import React, { useContext, useState, useEffect } from "react";
import LandingPageContext from "./LandingPage/LandingPageContext";

const Chat = () => {
  const [currentMessage, setCurrentMessage] = useState("");
  const {
    socketPasser,
    chatname,
    socket,
    setChatLarge,
    setChatOpen,
    messages,
  } = useContext(LandingPageContext);

  // const sendMessage = async () => {
  //   if (currentMessage !== "") {
  //     const messageData = {
  //       room: "123",
  //       author: chatname,
  //       message: currentMessage,
  //       time:
  //         new Date(Date.now()).getHours() +
  //         ":" +
  //         new Date(Date.now()).getMinutes(),
  //     };

  //     await socket.emit("send_message", messageData);
  //   }
  // };

  // useEffect(() => {
  //   socket.on("receive_message", (message) => {
  //     messages.push(message.message);
  //     console.log(messages);
  //   });
  // }, [socket]);
  // const minimizeChat = () => {
  //   console.log("minimized");
  //   setChatLarge(false);
  //   setChatOpen(true);
  // };
  console.log(messages);
  return (
    <div className="absolute right-[5%]">
      <div className="h-[300px] bg-[white] flex items-center rounded-t-lg flex-col">
        <p
          className="w-full text-center cursor-pointer text-DGLogin h-fit"
          onClick={minimizeChat}
        >
          Insight Chat
        </p>
        <div className="">
          {messages.map((message, index) => (
            <div
              key={index}
              className="text-[black] w-full flex justify-start pl-[0.25rem]"
            >
              {message}
            </div>
          ))}
        </div>
      </div>
      <div className="flex rounded-b-lg">
        <input
          type="text"
          placeholder="Message goes here"
          className="p-[.5rem] bg-[black] "
          onChange={(e) => {
            setCurrentMessage(e.target.value);
          }}
        />
        <button onClick={sendMessage} className="bg-[black] pr-[0.5rem]">
          &#9658;
        </button>
      </div>
    </div>
  );
};
export default Chat;
