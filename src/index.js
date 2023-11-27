import React, {Fragment} from "react";
import ReactDOM from "react-dom/client";
import Skills from "./components/Skills";
import About from "./components/AboutMe";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Fragment>
            <About />
            <h1>Minhas Skills</h1>
            <hr />
            <Skills/>
        </Fragment>
    </React.StrictMode>
);
