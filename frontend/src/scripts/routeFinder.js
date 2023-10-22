import { Stage, Layer, Rect, Line } from "konva";



let selectionsList = [];

export function createGrid(gridSize) {
  const gridContainer = document.getElementById("gridContainer");

  // Clear previous grid if any
  gridContainer.innerHTML = "";

  // Generate the grid dynamically
  for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
      const square = document.createElement("div");
      square.classList.add("gridSquare");
      square.id = `${r}${c}`;
// I've switched the orders of "r" and "c" above, so the grid no longer follows the (x,y) structure but can now be read as shown below. This makes the coordinates easier to work with.
// (01, 02, 03)
// (11, 12, 13)
// (21, 22, 23)

      // Add click event listener to toggle square color
      square.addEventListener("click", toggleSquareColor);

      gridContainer.appendChild(square);
    }

    // After adding a row's worth of squares, add a line break as well.
    // Might want to move this to the beginning if the last line break causes issues.
    const linebreak = document.createElement("br");
    gridContainer.appendChild(linebreak);
  }
  const hiddenButton = document.getElementById("submitSection");
  hiddenButton.classList.remove("hidden");
  selectionsList = [];
}


export function toggleSquareColor(event) {
  const square = event.target;
  square.classList.toggle("selected");

  if (square.classList.contains("selected")) {
    // console.log(`Clicked gridSquare: ${square.id}`);
    selectionsList.push(square.id);
  } else {
    // console.log(`Unclicked gridSquare: ${square.id}`);
    let index = selectionsList.indexOf(square.id);
    selectionsList.splice(index, 1);
  }
}

// const submitGridButton = document.getElementById("routeSubmitButton");
// createGridButton.addEventListener("click", submitGrid);

export function submitGrid(method, gridSize) {
  const sendToPython = {
    method: method,
    selectionsList: selectionsList,
    gridSize: gridSize
  };

  console.log("method: ", method, "selectionsList: ", selectionsList, "gridSize: ", gridSize);

  fetch("/api/find_route", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendToPython),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from Flask
      updateGrid(data.result);
      plotRoute(data.result, gridSize);
      console.log(data);
    })
    .catch((error) => {
      // Handle errors
      console.error(error);
    });
}

export function updateGrid(newArray) {
  for (let i = 0; i < newArray.length; i++) {
    const cellId = `${newArray[i]}`;
    const cell = document.getElementById(cellId);
    if (cell) {
      cell.innerHTML = `<div class="gridSquare-inner">${i + 1}</div>`;
    }
  }
}

export function plotRoute(result, gridSize) {
  console.log(gridSize)
  const cellSize = 50; // Adjust the cell size as needed

  const stage = new Stage({
    container: "container",
    width: gridSize * cellSize,
    height: gridSize * cellSize,
  });

  const layer = new Layer();
  stage.add(layer);

  const drawLine = (x1, y1, x2, y2) => {
    const line = new Line({
      points: [x1, y1, x2, y2],
      stroke: "red",
      strokeWidth: 2,
    });
    layer.add(line);
    layer.batchDraw();
  };

  const drawGrid = () => {
    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        const rect = new Rect({
          x: x * cellSize,
          y: y * cellSize,
          width: cellSize,
          height: cellSize,
          stroke: "#000",
          strokeWidth: 0,
          listening: false
        });
        layer.add(rect);
      }
    }
    layer.batchDraw();
  };

  const coordinates = [];

  function findCoordinates(result) {
    coordinates.length = 0;

    for (let i = 0; i < result.length; i++) {
      let newPoint = [result[i][1], result[i][0]];
    // The indexes above have been flipped to account for the coordinates being formatted as (y, x) rather than (x, y) for ease of use.
      coordinates.push(newPoint);
    }
  }
  findCoordinates(result);

  drawGrid();

  for (let i = 0; i < coordinates.length - 1; i++) {
    const [x1, y1] = coordinates[i];
    const [x2, y2] = coordinates[i + 1];
    drawLine(
      x1 * cellSize + cellSize / 2,
      y1 * cellSize + cellSize / 2,
      x2 * cellSize + cellSize / 2,
      y2 * cellSize + cellSize / 2
    );
  }
}
