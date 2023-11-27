import React from "react";
import Card from "./Card";
import perfil from "../img/MyPhoto.jpg";

const About = () => {
    return(
        <section className="section">
        <div className="columns">
            <div className="column">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={perfil} alt="My image"/>
                        </figure>
                    </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <p className="title is-4" >Andrey Marques</p>
                                    <span className="tag is-dark is-medium">Web Developer</span>
                                </div>
                            </div>

                            <div className="content">
                                <p>+55 (51) 99561-8177</p>
                                <p>andreymarques822@gmail.com</p>
                            </div>

                        </div>
                    </div>
                </div>
            <div className="column">
                  <Card /> 
                  <div className="p-5">
                <p>Sou um web desenvolvedor a procura de desafios</p>
                <p>Sempre em busca de conhecimento a procura de novas oportunidades. Apaixonado por tecnologia um verdadeiro amante da programação...</p>

            </div> 
            </div>
            
            </div>
        </section>
    )
}

export default About;