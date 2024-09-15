import ChatList from "./chatList";
import { Link, useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, auth } from "../Config/firebase";
import Swal from "sweetalert2";
export default function LeftBar() {
  const navigate = useNavigate("");

  const [user, setUser] = useState(null);
  const [currentUserUid, setCurrentUserUid] = useState(null);
  const [currentUserData, setCurrentUserData] = useState([]);
  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    const checkingUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        const userUid = user.uid;
        setCurrentUserUid(userUid);
      } else {
        navigate("/login");
      }
    });

    return () => checkingUser();
  }, [navigate]);

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "chatList"));
        const usersArray = [];
        querySnapshot.forEach((doc) => {
          const data = JSON.stringify(doc.data);
          usersArray.push({ uid: doc.id, ...doc.data() });
        });
        setAllUser(usersArray);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      if (!currentUserUid) {
        return;
      } else {
        const q = query(
          collection(db, "chatList"),
          where("uid", "==", currentUserUid)
        );

        const querySnapshot = await getDocs(q);
        const currentUserDataArray = [];
        querySnapshot.forEach((doc) => {
          currentUserDataArray.push(doc.data());
        });
        setCurrentUserData(currentUserDataArray);
      }
    };
    fetchCurrentUser();
  }, [currentUserUid]);

  const profileView = () => {
    const userData = currentUserData[0]; // Assuming there's only one user data

    Swal.fire({
      title: userData?.userName || "User Profile",
      html: `
        <div style="display: flex; align-items: center;">
          <img
            src="${userData?.imageUrl || "default-image-url"}"
            style="width: 80px; height: 80px; border-radius: 50%; margin-right: 15px;"
            alt="Profile Image"
          />
          <div>
            <p><strong>UID:</strong> ${userData?.uid || "N/A"}</p>
            <p><strong>Email:</strong> ${userData?.email || "N/A"}</p>
            <p><strong>Number:</strong> ${userData?.number || "N/A"}</p>
          </div>
        </div>
      `,
      showCloseButton: true,
      showCancelButton: false,
      confirmButtonText: "Close",
    });
  };

  console.log(currentUserData);

  return (
    <section className="border border-black w-[40%] h-[100vh] ">
      <section className="flex justify-between items-center">
        <h1 className="text-2xl m-5">Chats</h1>
        <div className="flex items-center gap-3">
          <img
            src={currentUserData[0]?.imageUrl}
            className="h-[40px] w-[40px] rounded-full "
            alt=""
            onClick={profileView}
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

      <ChatList info={allUser} />
    </section>
  );
}
