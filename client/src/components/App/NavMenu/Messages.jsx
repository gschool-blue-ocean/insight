import React, { useState } from "react";

const Messages = () => {
  const emails = [
    {
      id: 1,
      from: "johnrutabega@student.insight.com",
      subject: "Meeting Tomorrow",
    },
    {
      id: 2,
      from: "janebeet@instructor.insight.com",
      subject: "Project Update",
    },
    {
      id: 3,
      from: "alicekohlrabi@student.insight.com",
      subject: "Lunch Invitation",
    },
    {
      id: 4,
      from: "davidspinach@alumni.insight.com",
      subject: "Networking Event",
    },
    {
      id: 5,
      from: "marycarrot@instructor.insight.com",
      subject: "Upcoming Workshop",
    },
    {
      id: 6,
      from: "robertpotato@student.insight.com",
      subject: "Group Study Session",
    },
    {
      id: 7,
      from: "michaelbroccoli@student.insight.com",
      subject: "Hackathon Announcement",
    },
  ];
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Email sending logic
    console.log("Sending email:", { to, subject, message });
    setTo("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="flex flex-col gap-2 m-2 font-robot">
      <h1 className="p-2 text-2xl font-bold text-center">Insight Email</h1>
      {/* Inbox Sidebar */}
      <div className="w-full p-4 bg-[#2f454192] rounded-xl flex-col flex gap-6">
        <h1 className="w-[6rem] h-2 text-lg font-semibold">Inbox</h1>
        <ul className="space-y-2">
          {emails.map((email) => (
            <li
              key={email.id}
              className="px-2 py-1 rounded cursor-pointer w-[21rem] hover:bg-[#808f8693]"
            >
              <div className="font-semibold">{email.from}</div>
              <div className="text-sm">{email.subject}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Email Compose */}
      <div className="w-full p-4 shadow-md bg-[#2f454192] rounded-xl">
        <h2 className="mb-4 font-semibold text-[20px]">Compose Email</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold ">To:</label>
            <input
              type="email"
              className="w-full p-2 text-black border rounded"
              value={to}
              onChange={handleToChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold ">Subject:</label>
            <input
              type="text"
              className="w-full p-2 text-black border rounded"
              value={subject}
              onChange={handleSubjectChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold">Message:</label>
            <textarea
              className="w-full p-2 text-black border rounded"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-[#55705e] rounded hover:bg-[#4e6b59]"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Messages;
