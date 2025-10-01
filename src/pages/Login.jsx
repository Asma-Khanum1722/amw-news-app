import "./login.css";
import { useForm } from "react-hook-form";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("User signed up:", userCredential.user);
      alert("Signup successful!!");
    } catch (error) {
      console.error("Signup error:", error.message);
      alert(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google signup success:", result.user);
      alert("Signed up with Google ");
    } catch (error) {
      console.error("Google signup error:", error.message);
      alert(error.message);
    }
  };

  return (
    <section className="login-container">
      <h1 className="login-heading">Sign Up</h1>
      <p className="login-sub">Join Authentic Media Wire and stay updated!</p>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="login-input"
          type="text"
          placeholder="Username"
          {...register("username", {
            required: "Username is required",
          })}
        />
        {errors.username && <p className="login-error">{errors.username.message}</p>}

        <input
          className="login-input"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
          })}
        />
        {errors.email && <p className="login-error">{errors.email.message}</p>}

        <input
          className="login-input"
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Password must have 8+ chars, uppercase, lowercase, number, and symbol",
            },
          })}
        />
        {errors.password && <p className="login-error">{errors.password.message}</p>}

        <input className="amw-btn" type="submit" value="Sign Up" />
        {/* <hr className="login-hr" /> */}
        <button type="button" className="amw-btn" onClick={handleGoogleSignup}>
          <i className="fab fa-google" style={{marginRight: '8px'}}></i>
          Sign Up with Google
        </button>
      </form>
    </section>
  );
};

export default Login;
