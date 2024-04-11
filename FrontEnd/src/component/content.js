import React, { useState } from "react";
import axios from "axios";

const Content = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleButtonClick = (activityType) => {
    // const currentTime = new Date().toISOString().slice(0, 19).replace("T", " ");
    const todaydate = new Date();
    const month = todaydate.getMonth() + 1;
    const year = todaydate.getFullYear();
    const date = todaydate.getDate();
    const currentdate = `${month}/${date}/${year}`;
    const currentTime = todaydate.toISOString().slice(11, 19);
    const email = "nandhini@gmail.com";

    const data = {
      Date: currentdate,
      Time: currentTime,
      Userid: email,
      Activity_type: activityType,
    };

    axios
      .post("http://localhost:8095/attendance1", data)
      .then((response) => {
        console.log(`${activityType} time stored successfully:`, response.data);
        if (activityType === "login") {
          setIsLoggedIn(true);
        } else if (activityType === "logout") {
          setIsLoggedIn(false);
        }
      })
      .catch((error) => {
        console.error(`Error storing ${activityType} time:`, error);
      });
  };

  return (
    <div className="con">
      <h2>Hi Good Morning!!</h2>
      <h3>How are you</h3>
      <h3>Enjoy your work</h3>

      {!isLoggedIn && (
        <button onClick={() => handleButtonClick("login")}>Log In</button>
      )}
      {isLoggedIn && (
        <>
          <button onClick={() => handleButtonClick("breakin")}>Break In</button>
          <button onClick={() => handleButtonClick("breakout")}>
            Break Out
          </button>
          <button onClick={() => handleButtonClick("logout")}>Log Out</button>
        </>
      )}
    </div>
  );
};

export default Content;
