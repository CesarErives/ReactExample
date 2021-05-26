import React from "react"
import Layout from "../Layout/Layout"
import Button from "../../components/MainButton"
import image404 from "../../images/404.gif"

class PageNotFound extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Layout>
                    <div className="PathNotFound">
                        <img src={image404}/>
                        <Button contentText={"Go back..."} link={"/"}></Button>
                    </div>
                </Layout>
            </React.Fragment>
        );
    }
}