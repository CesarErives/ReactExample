import React from "react"
import Hero from "../../components/Hero"
import Badge from "../../components/Badge"
import BadgeForm from"../../components/BadgeForm"
import "./NewBadge.css"

class NewBadge extends React.Component{

    handleChange= event =>{
        this.setState({
            form:{
                ...this.state.form,[event.target.name]: event.target.value
            }
        })
    }

    handleSubmit= async(event)=>{
        event.preventDefault();
    }

    state = {
        loading : false,
        error: null,
        form:{
            HeaderBackground: "",
            ProfilePic: "",
            name:"",
            age:"",
            city:"",
            games:"",
            achievements:"",
            followers:""

        }
    }

    render(){
        return(
            <React.Fragment>
                <Hero h={"20vh"}></Hero>
                <div className="container">
                    <div className="row">
                    <div className="col">
                        <Badge 
                        HeaderBackground={this.state.form.HeaderBackground ||  "https://i.pinimg.com/originals/37/42/fb/3742fba5eb0ca8e31e31d31588f7b353.jpg"}
                        ProfilePic={this.state.form.ProfilePic || "https://friconix.com/png/fi-snsuxx-question-mark.png"}
                        name={this.state.form.name || "Your Name"}
                        age={this.state.form.age || "Age"}
                        city={this.state.form.city || "Earth"}
                        games={this.state.form.games || "0"}
                        achievements={this.state.form.achievements || "Nothing"}
                        followers={this.state.form.followers || "0"}
                        ></Badge>
                    </div>
                    <div className="col">
                        <BadgeForm 
                        onChange={this.handleChange} 
                        onSubmit={this.handleSubmit} 
                        formValues={this.state.form}></BadgeForm>
                    </div>
                    </div>
                </div>
             </React.Fragment>
        );
    }
}

export default NewBadge