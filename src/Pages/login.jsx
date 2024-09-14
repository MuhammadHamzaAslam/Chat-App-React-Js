import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const loginUser = () => {
    if (!email || !password) {
      alert("Plz Fill All Fields");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
      console.log("email:", email);
      console.log("password:", password);
      setEmail("");
      setPassword("");
    }
  };
  return (
    <section className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-600 to-indigo-600">
      <div className="w-[380px] bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-center text-4xl font-extrabold mb-8 text-gray-800">
          Login
        </h1>
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
            className="w-full bg-purple-500 text-white py-3 rounded-md font-semibold shadow-md hover:bg-purple-600 hover:shadow-lg transition duration-300 ease-in-out"
            onClick={loginUser}
          >
            Login
          </button>
        </div>
      </div>
    </section>
  );
}
export default LoginForm;
