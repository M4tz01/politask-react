import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { authFirebase, googleProvider } from "../firebase";
import { asegurarUsuarioEnFirestore } from "../utils/usuarios";
import registerImg from "../assets/images/regin.webp";


function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const registrarUsuario = async (data) => {
    try {
      await createUserWithEmailAndPassword(
        authFirebase,
        data.email,
        data.password
      );

      await updateProfile(newUserFirebase.user, {
        displayName: name,
      });

      await asegurarUsuarioEnFirestore(newUserFirebase.user);

      toast.success("Cuenta creada correctamente");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error al registrarse:", error);
      let mensaje = "No se pudo completar el registro.";

      if (error.code === "auth/email-already-in-use") {
        mensaje = "El correo ya está registrado. Intenta iniciar sesión.";
      } else if (error.code === "auth/weak-password") {
        mensaje = "La contraseña debe tener al menos 6 caracteres.";
      } else if (error.code === "auth/invalid-email") {
        mensaje = "El correo electrónico no es válido.";
      }

      toast.error(mensaje);
    }
  };

  const registrarConGoogle = async () => {
    try {
      await signInWithPopup(authFirebase, googleProvider);
      toast.success("Bienvenido a PoliTask");
      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.error("Error al registrarse con Google:", error);
      toast.error("No se pudo registrar con Google.");
    }
  };

  const registrarseConGoogle = async () => {
    try {
      const resultado = await signInWithPopup(authFirebase, googleProvider);
      await asegurarUsuarioEnFirestore(resultado.user);

      toast.success("Bienvenido a PoliTask");
      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.error("Error al registrarse con Google:", error);

      let mensaje = "No se pudo continuar con Google.";

      if (error.code === "auth/popup-closed-by-user") {
        mensaje = "Cerraste la ventana de Google antes de finalizar.";
      } else if (error.code === "auth/popup-blocked") {
        mensaje = "El navegador bloqueó la ventana emergente de Google.";
      } else if (error.code === "auth/network-request-failed") {
        mensaje = "Comprueba tu conexión a Internet.";
      }

      toast.error(mensaje);
    }
  };

  return (
    <main className="auth-split">
      <div
        className="auth-split__image"
        style={{ backgroundImage: `url(${registerImg})` }}
      />
      <div className="auth-split__form">
      <div className="auth-card">
        <h2 className="auth-title">Crear Cuenta</h2>

        {/* COLUMNA DERECHA: Formulario */}
        <div className="auth-form-side">
          <h2 className="auth-title">Crear Cuenta</h2>
          <p className="auth-subtitle">Regístrate para comenzar</p>

          <form className="formulario" onSubmit={handleSubmit(registrarUsuario)}>
            <div className="campo">
              <label htmlFor="email">Correo electrónico:</label>
              <input
                id="email"
                type="email"
                placeholder="ejemplo@correo.com"
                {...register("email", {
                  required: "El correo es obligatorio",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Ingresa un correo válido",
                  },
                })}
              />
              {errors.email && (
                <span className="errors">{errors.email.message}</span>
              )}
            </div>

            <div className="campo">
              <label htmlFor="password">Contraseña:</label>
              <input
                id="password"
                type="password"
                placeholder="Mínimo 6 caracteres"
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  minLength: {
                    value: 6,
                    message: "La contraseña debe tener mínimo 6 caracteres",
                  },
                })}
              />
              {errors.password && (
                <span className="errors">{errors.password.message}</span>
              )}
            </div>

          <button className="btn-primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creando cuenta..." : "Crear cuenta"}
          </button>
        </form>

        <div className="login-divider">
          <span>o continúa con</span>
        </div>

        <button
          type="button"
          className="btn-google"
          onClick={registrarseConGoogle}
        >
          <svg className="google-icon" viewBox="0 0 24 24" width="20" height="20">
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
          <span>Continuar con Google</span>
        </button>

        <NavLink to="/login" className="enlace">
          Si ya tienes cuenta, puedes iniciar sesión aquí
        </NavLink>
      </div>
    </div>
    </main>
  );
}

export default Register;