export function submitLiquid(liquidRequest) {
    const sendToPython = {
      liquidRequest: liquidRequest,
    };
    displayLiquid("Loading...")
  
    fetch("/api/liquid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendToPython),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from Flask
        displayLiquid(data.result);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  }
  
  export function displayLiquid(result) {
    const output = document.getElementById("liquidOutput");
  
    if (result === "Loading...") {
      output.innerHTML = `<p>Loading...</p>`;
    } else {
        console.log(result)
      output.innerHTML = `<div>${result}</div>`;
    }
  }
  