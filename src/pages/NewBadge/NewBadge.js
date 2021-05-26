import React from "react"
import Hero from "../../components/Hero"
import "./NewBadge.css"

class NewBadge extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Hero h={"20vh"}></Hero>
                <h1>The New Badge</h1>
            </React.Fragment>
        );
    }
}

export default NewBadge