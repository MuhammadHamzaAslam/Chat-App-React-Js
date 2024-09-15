import React from "react";

const ChatList = ({ info }) => {
  return (
    <div>
      {info.length > 0 ? (
        info.map((user, index) => (
          <div
            key={index}
            className="border-b flex items-center border-black h-[70px] mt-3 w-[100%]"
          >
            <div className="flex justify-center items-center gap-4">
              <img
                src={user.imageUrl}
                className="h-[40px] w-[40px] rounded-full ms-3"
                alt=""
              />
              <div>
                <h1 className="text-xl font-bold">{user.userName}</h1>
                <p>Hello</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center">
          <p className="text-center my-3 text-2xl font-bold flex justify-center items-center">
            No users found
          </p>
        </div>
      )}
    </div>
  );
};

export default ChatList;
