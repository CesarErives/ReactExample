import React from "react"
import "./style/BadgeForm.css"

class BadgeForm extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1>Form to fill your Profile</h1>
                <div className="BadgeForm m-4">
                    <form onSubmit={this.props.onSubmit}>
                    <div className="form-group mb-2">
                            <label className="mb-1">
                                Cover Picture URL:
                            </label>
                            <input type="text" className="form-control" name="HeaderBackground" onChange={this.props.onChange}
                            value={this.props.formValues.HeaderBackground}/>
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Profile Picture URL:
                            </label>
                            <input type="text" className="form-control" name="ProfilePic" onChange={this.props.onChange}
                            value={this.props.formValues.ProfilePic}/>
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Name:
                            </label>
                            <input type="text" className="form-control" name="name" onChange={this.props.onChange}
                            value={this.props.formValues.name}/>
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                Age:
                            </label>
                            <input type="text" className="form-control" name="age" onChange={this.props.onChange}
                            value={this.props.formValues.age}/>
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-1">
                                City:
                            </label>
                            <input type="text" className="form-control" name="city" onChange={this.props.onChange}
                            value={this.props.formValues.city}/>
                            <button type="submit" className="saveChangesbtn">Save your changes</button>
                        </div>
                    </form>
                </div>
            </React.Fragment>

        );
    }
}

export default BadgeForm