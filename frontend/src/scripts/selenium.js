export function submitSelenium(seleniumArgs) {
    const sendToPython = {
      seleniumArgs: seleniumArgs,
    };
    displaySelenium("Loading...")
  
    fetch("/api/selenium", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendToPython),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from Flask
        displaySelenium(data.result);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  }
  
  export function displaySelenium(result) {
    const output = document.getElementById("seleniumOutput");
  
    if (result === "Loading...") {
      output.innerHTML = `<p>Loading...</p>`;
    } else {
        console.log(result)
      output.innerHTML = `<div>${result}</div>`;
    }
  }
  