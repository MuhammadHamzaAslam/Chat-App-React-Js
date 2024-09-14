import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../Config/firebase";
import Swal from 'sweetalert2';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loginUser = async () => {
    if (!email || !password) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please fill all fields',
      });
    } else {
      setLoading(true);
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password);
        const user = userCredential.user;
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'You are being redirected...',
        });
        navigate("/");
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: error.message,
        });
      } finally {
        setLoading(false);
      }

      setEmail("");
      setPassword("");
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-600 to-indigo-600">
      <div className="w-[380px] bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-center text-4xl font-extrabold mb-8 text-gray-800">Login</h1>
        <div className="input-group mb-6">
          <p className="text-lg font-semibold text-gray-700 mb-2">Email:</p>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="input-group mb-6">
          <p className="text-lg font-semibold text-gray-700 mb-2">Password:</p>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="flex justify-center">
          <button
            className={`w-full bg-purple-500 text-white py-3 rounded-md font-semibold shadow-md hover:bg-purple-600 hover:shadow-lg transition duration-300 ease-in-out ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={loginUser}
            disabled={loading}
          >
            {loading ? (
              <span className="flex justify-center items-center">
                <svg
                  className="animate-spin mr-2 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8l4.29 4.29-1.42 1.42L12 14H4z"
                  ></path>
                </svg>
                Logging in...
              </span>
            ) : (
              "Login"
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
