import React, { useState } from "react";

const Messages = () => {
  const emails = [
    {
      id: 1,
      from: "john@example.com",
      subject: "Meeting Tomorrow",
      message:
        "Hi team, we have a meeting scheduled for tomorrow at 10 AM. Don't forget to prepare your updates.",
      timestamp: "2023-08-16",
    },
    {
      id: 2,
      from: "alice@example.com",
      subject: "Project Update",
      message:
        "Hey everyone, just wanted to let you know that we've completed the first phase of the project ahead of schedule. Great job!",
      timestamp: "2023-08-15",
    },
    {
      id: 3,
      from: "marketing@company.com",
      subject: "New Product Launch",
      message:
        "Dear customers, we're excited to announce the launch of our new product line. Check out our website for more details!",
      timestamp: "2023-08-14",
    },
    {
      id: 4,
      from: "support@company.com",
      subject: "Your Support Request",
      message:
        "Hello, your support request (Ticket #12345) has been received. Our team will review and get back to you as soon as possible.",
      timestamp: "2023-08-13",
    },
    {
      id: 5,
      from: "newsletter@updates.com",
      subject: "Monthly Newsletter",
      message:
        "Greetings! Here's your monthly newsletter with updates, articles, and upcoming events. Enjoy reading!",
      timestamp: "2023-08-12",
    },
  ];
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [selectedEmail, setSelectedEmail] = useState(null);

  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
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
    <div className="flex flex-col gap-2 m-2 overflow-y-auto font-robot">
      <h1 className="p-2 text-[30px] font-bold text-center">Insight Email</h1>
      {/* Inbox Sidebar */}
      <div className="w-full p-4 bg-[#2f454192] overflow-y-auto rounded-xl flex-col flex gap-6">
        <h1 className="w-[6rem] h-2 text-lg font-semibold">Inbox</h1>
        <ul className="space-y-2">
          {emails.map((email) => (
            <li
              key={email.id}
              className="px-2 py-1 rounded cursor-pointer w-[21rem] hover:bg-[#808f8693]"
            >
              <div className="font-semibold">{email.from}</div>
              <div className="text-sm">
                {email.subject}
                <br />
                {email.timestamp}
              </div>
            </li>
          ))}
        </ul>
        {/* Single Message Display Component */}
        {selectedEmail && (
          <ul>
            <h2 className="text-lg font-semibold">{selectedEmail.subject}</h2>
            <div className="font-semibold">{selectedEmail.from}</div>
            <div className="text-sm">{selectedEmail.timestamp}</div>
            <p>{selectedEmail.message}</p>
          </ul>
        )}
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
