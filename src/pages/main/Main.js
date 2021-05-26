import React from "react"
import Hero from "../../components/Hero"
import Button from "../../components/MainButton"
import "./Main.css"

const Main = (props) => {
    return(
    <React.Fragment>
        <div className="Main">
            <div className="Main_content">
            <div className="h1__title">{props.title || "Aloha!"}</div>
            <Button contentText={"Sign up now!"}></Button>
        </div>
        <Hero h={"88vh"}></Hero>
        </div>
    </React.Fragment>
    );
}

export default Main;