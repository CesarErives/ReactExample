import React from "react"
import {Link} from "react-router-dom"
import "./style/Header.css"

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Header">
                    <Link to="/">
                    <img src="https://www.pngkey.com/png/full/424-4244394_imagen-ipb-games-for-windows-logo.png" alt="" />
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;