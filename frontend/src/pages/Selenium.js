import React, { useState } from "react";
import io from "socket.io-client";

import * as scripts from "../scripts/selenium.js";

// import { BigTitle} from '../styles/header_style.js'

const Selenium = () => {
  // const socket = io("/api");
  // // Event listener for connecting to the server
  // socket.on("connect", () => {
  //   console.log("Connected to server");
  // });

  // // Emitting a custom event to the server
  // socket.emit("custom_event", { message: "Hello server" });

  const [seleniumArgs, setSeleniumArgs] = useState("");

  const handleInputChange = (e) => {
    setSeleniumArgs(e.target.value);
  };

  const handleSubmitSelenium = () => {
    scripts.submitSelenium(seleniumArgs);
    // console.log(seleniumArgs)
  };

  return (
    <>
      <h1>Let's WebScrape!</h1>
      <label htmlFor="seleniumArgs">Search Term: </label>
      <input
        name="seleniumArgs"
        id="seleniumArgs"
        value={seleniumArgs}
        onChange={handleInputChange}
      ></input>
      <button id="seleniumSubmitButton" onClick={handleSubmitSelenium}>
        Analyze
      </button>
      <div style={{width: "100%", overflow: "hidden"}}id="seleniumOutput"></div>
    </>
  );
};

export default Selenium;
