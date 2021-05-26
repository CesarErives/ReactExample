import React from "react"
import "./style/SignupForm.css"

class SignupForm extends React.Component{
    

    render(){
        return(
            <React.Fragment>
            <h1>Sign Up</h1>
            <div className="SignupForm">
                <form onSubmit="">
                <div className="form-group mb-2">
                    <label className="mb-1">First Name(s)</label>
                    <input type="email" className="form-control" name="Email" onChange={this.props.onChange} value={this.props.formValues.firstN}/>
                    </div>
                    <div className="form-group mb-2">
                    <label className="mb-1">Last Name(s)</label>
                    <input type="email" className="form-control" name="Email" onChange={this.props.onChange} value={this.props.formValues.lastN}/>
                    </div>
                    <div className="form-group mb-2">
                    <label className="mb-1">E-Mail</label>
                    <input type="email" className="form-control" name="Email" onChange={this.props.onChange} value={this.props.formValues.Email}/>
                    </div>
                    <div className="form-group mb-2">
                    <label className="mb-1">Password</label>
                    <input type="password" className="form-control" name="Password" onChange={this.props.onChange} value={this.props.formValues.Password}/>
                    </div>
                    <div className="form-group mb-2">
                    <label className="mb-1">Confirm Password</label>
                    <input type="password" className="form-control" name="Password" onChange={this.props.onChange} 
                    value={this.props.formValues.ConfirmPassword}/>
                    <button type="submit" className="Signupbtn">Sign me up!</button>
                    </div>
                </form>
            </div>
            </React.Fragment>
        );
    }
}

export default SignupForm