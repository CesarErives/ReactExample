import React, { Component } from 'react'
import './style/Badge.css'
class Badge extends Component {

    render() {
        return (
            <React.Fragment>
            <div className="Badge m-5 flex-column">
                <div className="Badge__header">
                    <img src={this.props.HeaderBackground} alt="header_backgrond" />

                </div>
                <div className="container mt-5 mb-1 Badge__userInfo container ">
                    <div className="Badge__userImage">
                        <img src={this.props.ProfilePic} alt="Profile Pic" />
                    </div>
                    <h4 className='text-center mt-5'>{this.props.name} <i>{this.props.age}</i></h4>
                    <p className='text-center mt'>{this.props.city}</p>
                </div>
                <div className="Badge__info container pt-3">
                <div className="row">
                    <div className="col">
                    <h4 className="text-center fw bold">{this.props.games}</h4>
                    <p className="text-center">Games</p>
                    </div>
                    <div className="col">
                    <h4 className="text-center fw bold">{this.props.achievements}</h4>
                    <p className="text-center">Achievements</p>
                    </div>
                    <div className="col">
                    <h4 className="text-center fw bold">{this.props.followers}</h4>
                    <p className="text-center">Followers</p>
                    </div>
                </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default Badge
