import React, { useState } from "react";
import Konva from "konva";
import * as scripts from "../scripts/routeFinder.js";
import "../styles/routeFinder.css";

function RouteFinder() {
  // Variables for creating the grid
  const [rows, setRows] = useState("5");
  const [columns, setColumns] = useState("5");

  const handleRowsChange = (e) => {
    setRows(e.target.value);
  };

  const handleColumnsChange = (e) => {
    setColumns(e.target.value);
  };

  const handleCreateGrid = () => {
    scripts.createGrid(rows, columns);
  };

  // Variables for submitting the grid
  const [method, setMethod] = useState("return");

  const handleSubmitGrid = (e) => {
    scripts.submitGrid(method);
  };

  return (
    <>
      <h1>Welcome To RouteFinder!</h1>
      <label htmlFor="rows">Rows:</label>
      <select name="rows" id="rows" value={rows} onChange={handleRowsChange}>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <label htmlFor="columns">Columns:</label>
      <select
        name="columns"
        id="columns"
        value={columns}
        onChange={handleColumnsChange}
      >
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <button id="createGrid" onClick={handleCreateGrid}>
        Create Grid
      </button>
      <br />
      <br />

      <div id="gridContainer"></div>
      <div id="submitSection" className="hidden">
        <select
          name="method"
          id="method"
          value={method}
          // Used this syntax over the simpler options because method was being set to a very large object. Had to distill it.
          onChange={(event) => setMethod(event.target.value)}
        >
          <option value="return">Return</option>
          <option value="sort">Sort</option>
        </select>
        {/* Using an onClick below because I was having issues with connecting functions to items that load in hidden. */}
        <button id="routeSubmitButton" onClick={handleSubmitGrid}>
          Find Route
        </button>
        <br />
        <div id="container"></div>
      </div>

      <script src="../scripts/route_finder.js"></script>
    </>
  );
}

export default RouteFinder;
