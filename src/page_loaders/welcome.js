import Board from "../assets/components/board.js";
import AddHouseBtn from "../assets/components/addhousebtn.js";

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<Board />, document.getElementById("tableboard"));
ReactDOM.render(<AddHouseBtn />, document.getElementById("addhousebtn"));

import "../assets/css/welcome.css";
