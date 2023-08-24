import React, { useContext, useState, useEffect, useMemo } from "react";
import LandingPageContext from "./LandingPage/LandingPageContext";

const Chat = () => {
  const {
    chatname,
    setChatLarge,
    setChatOpen,
    messages,
    setMessages,
    currentMessage,
    setCurrentMessage,
    socket,
  } = useContext(LandingPageContext);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: "123",
        author: chatname,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
    }
    setCurrentMessage("");
  };
  useMemo(() => {
    socket.on("connect", () => {
      console.log("Connected to the server");
    });

    socket.on("receive_message", (message) => {
      console.log(message);
      setMessages((list) => [...list, message]);
    });

    // return () => {
    //   socket.disconnect();
    // };
  }, []);

  // useEffect(() => {
  //   socket.on("receive_message", (message) => {
  //     console.log(message);
  //     setMessages((list) => [...list, message]);
  //   });
  // }, [socket]);

  const minimizeChat = () => {
    setChatLarge(false);
    setChatOpen(true);
  };
  return (
    <div className="absolute right-[5%]">
      <div className="h-[300px] bg-DGrayLogin flex rounded-t-lg flex-col overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-white">
        <p
          className="w-full text-center cursor-pointer bg-black py-[0.5rem] text-white h-fit font-bold"
          onClick={minimizeChat}
        >
          Insight Chat
        </p>
        <div className="">
          {messages.map((message, index) => {
            return (
              <div className="flex justify-start w-full">
                <div
                  key={index}
                  className="flex items-center pl-[0.5rem] flex-wrap"
                >
                  <p className="text-[0.75rem] inline">{message.author} : </p>
                  <h1 className="text-black">{message.message}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex rounded-b-lg placeholder:text-black">
        <input
          type="text"
          placeholder="Message goes here"
          className="p-[.5rem] bg-black border-none focus:outline-none"
          value={currentMessage}
          onChange={(e) => {
            setCurrentMessage(e.target.value);
          }}
        />
        <button
          onClick={sendMessage}
          className="bg-black text-white pr-[0.5rem]"
        >
          &#9658;
        </button>
      </div>
    </div>
  );
};
export default Chat;
