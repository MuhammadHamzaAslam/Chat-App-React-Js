import React from "react";

const ChatList = () => {
  return (
    <div className="border-b flex items-center border-black h-[70px] mt-3 w-[100%] ">
      <div className="flex justify-center items-center gap-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzeeEGWxI4S1SSqXpmfZJPGMgd64cxXSHrGA&s"
          className="h-[40px] w-[40px] rounded-full ms-3"
          alt=""
        />
        <div>
          <h1 className="text-xl">Hamza</h1>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
