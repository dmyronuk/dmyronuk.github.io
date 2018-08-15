import React from "react";
import ReactDOM from "react-dom";
import "./styles/normalize.css"
import "./styles/index.css";
import "./styles/header.css";
import "./styles/summary.css";
import "./styles/projects.css";
import "./styles/employment.css";
import "./styles/education.css";
import "./styles/awards.css";
import "./styles/footer.css";
import App from './App';
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
