import React, { useState } from "react";
import io from "socket.io-client";

import * as scripts from "../scripts/selenium.js";

// import { BigTitle} from '../styles/header_style.js'

const Selenium = () => {
  const socket = io("/api");
  // Event listener for connecting to the server
  socket.on("connect", () => {
    console.log("Connected to server");
  });

  // Emitting a custom event to the server
  socket.emit("custom_event", { message: "Hello server" });

  const [seleniumArgs, setSeleniumArgs] = useState("");

  const handleSubmitSelenium = () => {
    scripts.submitSelenium(seleniumArgs);
  };

  return (
    <>
      <h1>Let's WebScrape!</h1>
      <button id="seleniumSubmitButton" onClick={handleSubmitSelenium}>
        Analyze
      </button>
      <div id="seleniumOutput"></div>
    </>
  );
};

export default Selenium;
