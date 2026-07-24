import { authFirebase, googleProvider } from "../firebase";
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const password = watch("password");

  const registrarUsuario = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        authFirebase,
        data.email,
        data.password
      );

      await updateProfile(userCredential.user, {
        displayName: data.nombre,
      });

      toast.success("Cuenta creada exitosamente");
      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.error("Error al registrarse:", error);
      let mensaje = "No se pudo crear la cuenta.";

      if (error.code === "auth/email-already-in-use") {
        mensaje = "El correo electrónico ya está registrado.";
      } else if (error.code === "auth/invalid-email") {
        mensaje = "El correo electrónico no es válido.";
      } else if (error.code === "auth/weak-password") {
        mensaje = "La contraseña es muy débil.";
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
      console.error("Error con Google:", error);
      toast.error("No se pudo iniciar sesión con Google.");
    }
  };

  return (
    <main className="auth-page-container">
      <div className="auth-card auth-card-split">
        {/* COLUMNA IZQUIERDA: Banner */}
        <div
          className="auth-image-side"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop")',
          }}
        >
          <div className="auth-image-content">
            <h3>¡Únete a PoliTask!</h3>
            <p>Crea tu cuenta para organizar y hacer seguimiento a todas tus actividades.</p>
          </div>
        </div>

        {/* COLUMNA DERECHA: Formulario */}
        <div className="auth-form-side">
          <h2 className="auth-title">Crear Cuenta</h2>
          <p className="auth-subtitle">Ingresa tus datos para registrarte</p>

          <form className="formulario" onSubmit={handleSubmit(registrarUsuario)}>
            <div className="campo">
              <label htmlFor="nombre">Nombre completo:</label>
              <input
                id="nombre"
                type="text"
                placeholder="Tu nombre"
                {...register("nombre", {
                  required: "El nombre es obligatorio",
                })}
              />
              {errors.nombre && (
                <span className="errors">{errors.nombre.message}</span>
              )}
            </div>

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
                placeholder="Crea una contraseña"
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  minLength: {
                    value: 6,
                    message: "Mínimo 6 caracteres",
                  },
                })}
              />
              {errors.password && (
                <span className="errors">{errors.password.message}</span>
              )}
            </div>

            <div className="campo">
              <label htmlFor="confirmPassword">Confirmar contraseña:</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Repite tu contraseña"
                {...register("confirmPassword", {
                  required: "Confirma tu contraseña",
                  validate: (value) =>
                    value === password || "Las contraseñas no coinciden",
                })}
              />
              {errors.confirmPassword && (
                <span className="errors">{errors.confirmPassword.message}</span>
              )}
            </div>

            <button className="btn-primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Registrando..." : "Registrarse"}
            </button>
          </form>

          <div className="login-divider">
            <span>o continúa con</span>
          </div>

          <button
            type="button"
            className="btn-google"
            onClick={registrarConGoogle}
          >
            <span>Continuar con Google</span>
          </button>

          <NavLink to="/login" className="enlace">
            ¿Ya tienes cuenta? Inicia sesión aquí
          </NavLink>
        </div>
      </div>
    </main>
  );
}

export default Register;