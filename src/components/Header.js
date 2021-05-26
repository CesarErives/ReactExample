import React from "react"
import {Link} from "react-router-dom"
import "./style/Header.css"

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Header">
                    <Link to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Logotipo_UTCH.png" alt="" />
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;