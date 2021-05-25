import React from "react"
import "./style/Header.css"

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Header">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Logotipo_UTCH.png" alt="" />
                </div>
            </React.Fragment>
        );
    }
}

export default Header;