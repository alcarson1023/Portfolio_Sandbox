import React, { useState } from "react";
import { CodeBlock } from "../../styles/basePage_style.js";

const HomePageRight = () => {
  const [panel, setPanel] = useState("description");
  const handlePanelChange = () => {
    if (panel === "description") {
      setPanel("code");
    } else if (panel === "code") {
      setPanel("description");
    }
  };

  return (
    <div>
      <button onClick={handlePanelChange}>
        {panel === "description" ? (
          <p>Switch to Code</p>
        ) : (
          <p>Switch to Description</p>
        )}
      </button>
      {panel === "description" ? (
        <div>
          <p>
            This section allows you to view a description of each section of the
            site.
          </p>
          <p>
            You can also click on the "View Code" button to take a look under
            the hood!
          </p>
        </div>
      ) : (
        <CodeBlock>
          <p>Great job! More complex pages will have code in this section.</p>
          <p>
            If you want more information on anything, feel free to reach out
            using the "Contact Me" button!
          </p>
        </CodeBlock>
      )}
    </div>
  );
};

export default HomePageRight;
