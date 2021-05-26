import React from "react"
import LoginForm from "../../components/LoginForm"
import Hero from "../../components/Hero"
import api from "../../libs/api"
import "./login.css"

class login extends React.Component{
    handleChange= event =>{
        this.setState({
            form:{
                ...this.state.form,[event.target.name]: event.target.value
            }
        })
    }

    handleSubmit= async(event)=>{
        event.preventDefault();
        this.setState({loading:true, error:null})
        try{
            await api.badges.create(this.state.form)
            this.setState({loading:false,error:null})
            this.props.history.push("/")
        }catch(error){
            this.setState({loading:false,error:error})
        }
    }

    state = {
        loading : false,
        error: null,
        form:{
            Email: "",
            Password: "",
        }
    }

    render(){
        return(
            <React.Fragment>
    <Hero h={"20vh"}></Hero>
    <LoginForm 
    onChange={this.handleChange}      
    onSubmit={this.handleSubmit} 
    formValues={this.state.form}>
    </LoginForm>
            </React.Fragment>
        );
    }
}

export default login