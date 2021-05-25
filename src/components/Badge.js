import React, { Component } from 'react'
import HeaderBackground from '../images/bg-pattern-card.svg'
import ProfilePic from '../images/image-victor.jpg'
import './style/Badge.css'




class Badge extends Component {

    render() {
        return (
            <React.Fragment>
            <div className="Badge m-5 flex-column">
                <div className="Badge__header">
                    <img src={HeaderBackground} alt="header_backgrond" />

                </div>
                <div className="container mt-5 mb-1 Badge__userInfo container ">
                    <div className="Badge__userImage">
                        <img src={ProfilePic} alt="Profile Pic" />
                    </div>
                    <h4 className='text-center mt-5'>Victor BS <i>25</i></h4>
                    <p className='text-center mt'>Las Vegas</p>
                </div>
                <div className="Badge__info container pt-3">
                <div className="row">
                    <div className="col">
                    <h4 className="text-center fw bold">80k</h4>
                    <p className="text-center">Followers</p>
                    </div>
                    <div className="col">
                    <h4 className="text-center fw bold">150k</h4>
                    <p className="text-center">Likes</p>
                    </div>
                    <div className="col">
                    <h4 className="text-center fw bold">300</h4>
                    <p className="text-center">Pictures</p>
                    </div>
                </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default Badge
