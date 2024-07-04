import React, {Fragment} from "react";
import ReactDOM from "react-dom/client";
import Skills from "./components/Skills";
import About from "./components/AboutMe";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Fragment>
            <h1 style="text-align: center">Em manutenção! em breve teremos atualização por aqui</h1><br>
            <p>Contato: (51)99730-3001</p><br>
            <h1>Minhas Skills</h1>
            <hr />
            <Skills/>
        </Fragment>
    </React.StrictMode>
);
