import React, { useState } from "react";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: "user" }]);
      setNewMessage("");

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "This is a bot response", sender: "bot" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleChat}
        className="bg-black text-white p-3 rounded-full flex items-center justify-center border-white"
      >
        <HiOutlineChatBubbleBottomCenterText className="h-6 w-6 " />
      </button>
      {isOpen && (
        <div className="bg-white text-black p-4 rounded-lg shadow-lg mt-2 w-80 h-96 flex flex-col ">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg">Chat with Us</h2>
            <button onClick={toggleChat} className="text-black font-bold">
              X
            </button>
          </div>
          <div className="flex-1 overflow-y-auto mt-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded ${
                  message.sender === "user"
                    ? "bg-black text-white self-end"
                    : "bg-gray-300 text-black self-start"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-2"
              placeholder="Type a message..."
              onKeyPress={(e) => {
                if (e.key === "Enter") handleSendMessage();
              }}
            />
            <button
              onClick={handleSendMessage}
              className="bg-black text-white py-2 px-4 w-full rounded"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
