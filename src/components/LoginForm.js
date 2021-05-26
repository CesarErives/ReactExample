import React from "react"
import "./style/LoginForm.css"

class LoginForm extends React.Component{
    

    render(){
        return(
            <React.Fragment>
            <h1>Login</h1>
            <div className="LoginForm">
                <form onSubmit="">
                    <div className="form-group mb-2">
                    <label className="mb-1">E-Mail</label>
                    <input type="text" className="form-control" name="Email" onChange={this.props.onChange} value={this.props.formValues.Email}/>
                    </div>
                    <div className="form-group mb-2">
                    <label className="mb-1">Password</label>
                    <input type="password" className="form-control" name="Password" onChange={this.props.onChange} value={this.props.formValues.Password}/>
                    <button type="submit" className="saveChangesbtn">Save your changes</button>
                    </div>
                </form>
            </div>
            </React.Fragment>
        );
    }
}

export default LoginForm