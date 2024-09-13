import { useState } from "react";
import "./App.css";
import LeftBar from "./Components/leftChatList";
import RightBar from "./Components/rightChatList";

function App() {
  return (
    <section className="flex justify-center items-center">
      <LeftBar />
      <RightBar/>
    </section>
  );
}

export default App;
