import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "../Config/firebase";
import Swal from "sweetalert2";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate("");

  const SignUpUser = async () => {
    if (!userName || !email || !password || !imageFile) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please fill all fields and upload an image",
      });
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );
      const user = userCredential.user;
      const imageRef = ref(storage, `usersProfilePicture/profile.jpg`);
      await uploadBytes(imageRef, imageFile);
      const imageUrl = await getDownloadURL(imageRef);
      const docRef = await addDoc(collection(db, "chatAppSignUpUser"), {
        userName: userName,
        email: email,
        password: password,
        uid: user.uid,
        imageUrl: imageUrl,
      });

      Swal.fire({
        icon: "success",
        title: "Account Created",
        text: "Your account has been successfully created!",
      });

      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Signup Failed",
        text: error.message,
      });
    } finally {
      setLoading(false);
      setUserName("");
      setEmail("");
      setPassword("");
      setImageFile(null);
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-600 to-indigo-600">
      <div className="w-[400px] bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-center text-4xl font-extrabold mb-8 text-gray-800">
          Sign Up
        </h1>
        <div className="input-group mb-6">
          <p className="text-lg font-semibold text-gray-700 mb-2">User Name:</p>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500"
            placeholder="Enter Your UserName"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
        </div>
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
        <div className="input-group mb-6">
          <p className="text-lg font-semibold text-gray-700 mb-2">Image:</p>
          <input
            type="file"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500"
            onChange={(e) => setImageFile(e.target.files[0])} // Handle file selection
          />
        </div>
        <div className="flex justify-center">
          <button
            className={`w-full bg-purple-500 text-white py-3 rounded-md font-semibold shadow-md hover:bg-purple-600 hover:shadow-lg transition duration-300 ease-in-out ${
              loading ? "opacity-50" : ""
            }`}
            onClick={SignUpUser}
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default SignupForm;
