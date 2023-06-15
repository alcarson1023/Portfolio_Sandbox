export function submitSentiment(review) {
  const sendToPython = {
    review: review,
  };
  updateOutput("Loading...")

  fetch("/api/sentiment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendToPython),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from Flask
      updateOutput(data.result);
    })
    .catch((error) => {
      // Handle errors
      console.error(error);
    });
}

export function updateOutput(result) {
  const output = document.getElementById("reviewOutput");

  if (result === "Loading...") {
    output.innerHTML = `<p>Loading...</p>`;
  } else {
    output.innerHTML = `<p>${result[0].label}</p><p>Confidence: ${result[0].score}</p>`;
  }
}
