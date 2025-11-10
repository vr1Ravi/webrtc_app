import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  // name change handler
  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);

  // room start logic
  const handleStart = () => {
    navigate(`/room/?userName=${userName}`);
  };

  // keydown handler
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleStart();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={handleUserNameChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleStart}>Join</button>
    </div>
  );
};

export default Landing;
