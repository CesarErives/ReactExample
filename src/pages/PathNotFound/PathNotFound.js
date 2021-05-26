import React from "react"
import Button from "../../components/MainButton"
import image404 from "../../images/404.gif"
import "./PathNotFound.css"

class PathNotFound extends React.Component{
    render(){
        return(
            <React.Fragment>
                    <div className="PathNotFound">
                        <img src={image404} alt=""/>
                        <Button contentText={"Go back..."} link={"/"}></Button>
                    </div>
            </React.Fragment>
        );
    }
}

export default PathNotFound