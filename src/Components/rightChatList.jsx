import { useState } from "react";
import { FaSearch, FaSmile, FaPaperclip } from "react-icons/fa";

export default function RightBar() {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    // Add functionality to send message
    console.log("Message Sent:", message);
    setMessage("");
  };

  return (
    <section className="border-2 border-black w-[60%] h-[100vh] flex flex-col">
      {/* Chat Header */}
      <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="h-10 w-10 rounded-full"
          />
          <div className="ml-3">
            <h2 className="text-lg font-semibold">Chat Name</h2>
            <p className="text-sm text-gray-400">Last seen recently</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button>
            <FaSearch className="text-xl" />
          </button>
          <button>
            <i className="bx bx-menu text-xl text-white"></i>
          </button>
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
        {/* Replace this with messages from the chat */}
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="h-10 w-10 rounded-full"
            />
            <div className="bg-white p-3 rounded-lg shadow-md">
              <p>Hello!</p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-start space-x-3 space-x-reverse">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="h-10 w-10 rounded-full"
            />
            <div className="bg-blue-500 text-white p-3 rounded-lg shadow-md">
              <p>Hi there!</p>
            </div>
          </div>
        </div>
      </main>

      {/* Message Input */}
      <footer className="bg-white p-4 border-t border-gray-300 flex items-center">
        <button className="mr-2">
          <FaSmile className="text-xl text-gray-500" />
        </button>
        <button className="mr-2">
          <FaPaperclip className="text-xl text-gray-500" />
        </button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="flex-1 border rounded-full px-4 py-2"
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 bg-blue-500 text-white rounded-full px-4 py-2"
        >
          Send
        </button>
      </footer>
    </section>
  );
}
