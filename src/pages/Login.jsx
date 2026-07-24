import { useState } from "react";
import { authFirebase, googleProvider } from "../firebase";
import {
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [isGoogleLoading, setIsGoogleLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const iniciarSesion = async (data) => {
        try {
            await signInWithEmailAndPassword(
                authFirebase,
                data.email.trim(),
                data.password
            );

            toast.success("¡Bienvenido de nuevo!");

            navigate("/dashboard", { replace: true });

        } catch (error) {
            console.error("Error al iniciar sesión:", error);

            let mensaje = "No se pudo iniciar sesión.";

            if (
                error.code === "auth/invalid-credential" ||
                error.code === "auth/wrong-password" ||
                error.code === "auth/user-not-found"
            ) {
                mensaje = "El correo o la contraseña son incorrectos.";

            } else if (error.code === "auth/invalid-email") {
                mensaje = "El correo electrónico no es válido.";

            } else if (error.code === "auth/too-many-requests") {
                mensaje =
                    "Demasiados intentos. Espera unos minutos e inténtalo nuevamente.";

            } else if (error.code === "auth/network-request-failed") {
                mensaje = "Comprueba tu conexión a Internet.";
            }

            toast.error(mensaje);
        }
    };

    const iniciarSesionConGoogle = async () => {
        setIsGoogleLoading(true);

        try {
            await signInWithPopup(
                authFirebase,
                googleProvider
            );

            toast.success("Bienvenido a PoliTask");

            navigate("/dashboard", { replace: true });

        } catch (error) {
            console.error(
                "Error al iniciar sesión con Google:",
                error
            );

            // Ignorar si el usuario cerró la ventana
            if (error.code === "auth/popup-closed-by-user") {
                return;
            }

            let mensaje =
                "No se pudo iniciar sesión con Google.";

            if (error.code === "auth/popup-blocked") {
                mensaje =
                    "El navegador bloqueó la ventana emergente de Google.";

            } else if (error.code === "auth/unauthorized-domain") {
                mensaje =
                    "Este dominio no está autorizado en Firebase.";
            }

            toast.error(mensaje);

        } finally {
            setIsGoogleLoading(false);
        }
    };

    const isLoading =
        isSubmitting || isGoogleLoading;

    return (
        <main className="auth-container">

            {/* COLUMNA IZQUIERDA: Banner */}

            <div
                className="auth-image-side"
                style={{
                    backgroundImage:
                        'url("https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop")',
                }}
            >

                <div className="auth-image-overlay">

                    <h1>
                        ¡Hola de nuevo!
                    </h1>

                    <p>
                        Organiza tus tareas y proyectos académicos
                        de forma eficiente en PoliTask.
                    </p>

                </div>

            </div>


            {/* COLUMNA DERECHA: Formulario */}

            <div className="auth-form-side">

                <h2 className="auth-title">
                    Iniciar sesión
                </h2>

                <p className="auth-subtitle">
                    Ingresa tus datos para continuar
                </p>


                <form
                    className="formulario"
                    onSubmit={handleSubmit(iniciarSesion)}
                    noValidate
                >

                    <div className="campo">

                        <label htmlFor="email">
                            Correo electrónico:
                        </label>

                        <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            placeholder="ejemplo@correo.com"
                            aria-invalid={
                                errors.email
                                    ? "true"
                                    : "false"
                            }
                            aria-describedby={
                                errors.email
                                    ? "email-error"
                                    : undefined
                            }
                            {...register("email", {
                                required:
                                    "El correo es obligatorio",

                                pattern: {
                                    value:
                                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

                                    message:
                                        "Ingresa un correo válido",
                                },
                            })}
                        />

                        {errors.email && (
                            <span
                                id="email-error"
                                className="errors"
                                role="alert"
                            >
                                {errors.email.message}
                            </span>
                        )}

                    </div>


                    <div className="campo">

                        <label htmlFor="password">
                            Contraseña:
                        </label>

                        <input
                            id="password"
                            type="password"
                            autoComplete="current-password"
                            placeholder="Tu contraseña"
                            aria-invalid={
                                errors.password
                                    ? "true"
                                    : "false"
                            }
                            aria-describedby={
                                errors.password
                                    ? "password-error"
                                    : undefined
                            }
                            {...register("password", {
                                required:
                                    "La contraseña es obligatoria",

                                minLength: {
                                    value: 6,

                                    message:
                                        "La contraseña debe tener mínimo 6 caracteres",
                                },
                            })}
                        />

                        {errors.password && (
                            <span
                                id="password-error"
                                className="errors"
                                role="alert"
                            >
                                {errors.password.message}
                            </span>
                        )}

                    </div>


                    <button
                        className="btn-primary"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isSubmitting
                            ? "Ingresando..."
                            : "Iniciar sesión"}
                    </button>

                </form>


                <div className="login-divider">

                    <span>
                        o continúa con
                    </span>

                </div>


                <button
                    type="button"
                    className="btn-google"
                    onClick={iniciarSesionConGoogle}
                    disabled={isLoading}
                >

                    <svg
                        className="google-icon"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                    >

                        <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />

                        <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />

                        <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        />

                        <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        />

                    </svg>


                    <span>
                        {isGoogleLoading
                            ? "Conectando..."
                            : "Continuar con Google"}
                    </span>

                </button>


                <NavLink
                    to="/register"
                    className="enlace"
                >
                    ¿No tienes cuenta? Regístrate aquí
                </NavLink>

            </div>

        </main>
    );
}

export default Login;