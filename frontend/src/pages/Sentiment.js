import React, { useState } from "react";

import * as scripts from "../scripts/sentiment.js";

// import { BigTitle} from '../styles/header_style.js'

const Sentiment = () => {
    const [reviewInput, setInput] = useState("");
    const [reviewOutput, setOutput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmitSentiment = () => {
    scripts.submitSentiment(reviewInput)
  };

  return (
    <>
      <h1>Submit a review!</h1>
      <label htmlFor="reviewInput">Rows:</label>
      <input
        name="reviewInput"
        id="reviewInput"
        value={reviewInput}
        onChange={handleInputChange}
      ></input>
      <button id="sentimentSubmitButton" onClick={handleSubmitSentiment}>
        Analyze
      </button>
      <br />
      <br />
      <div 
        name="reviewOutput"
        id="reviewOutput"
        value={reviewOutput}>Placeholder</div>
    </>
  );
};

export default Sentiment;
