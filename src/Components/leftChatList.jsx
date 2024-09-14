import { TextField } from "@mui/material";
import ChatList from "./chatList";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Config/firebase";

export default function LeftBar() {
  const navigate = useNavigate("");
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
    } else {
      navigate("/login");
    }
  });
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className="border border-black w-[40%] h-[100vh] ">
      <section className="flex justify-between items-center">
        <h1 className="text-2xl m-5">Chats</h1>
        <div className="flex items-center gap-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzeeEGWxI4S1SSqXpmfZJPGMgd64cxXSHrGA&s"
            className="h-[40px] w-[40px] rounded-full "
            alt=""
          />
          <Link to={"/addUser"}>
            <i className="bx bxs-user-plus text-4xl"></i>
          </Link>
          <i
            className="bx bx-log-out-circle me-4 text-3xl cursor-pointer"
            onClick={signOutUser}
          ></i>
        </div>
      </section>

      <section className="mt-4">
        <div className="flex items-center bg-gray-100 border border-black rounded-lg w-[80%] mx-5">
          <i className="bx bx-search text-xl text-gray-500 ml-3"></i>
          <input
            type="text"
            placeholder="Search........."
            className="bg-transparent py-2 px-3 w-full outline-none"
          />
        </div>
      </section>

      <ChatList />
    </section>
  );
}
