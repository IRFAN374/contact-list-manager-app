import React from "react";
import Header from "./Header"
import profile from "../images/profile.jpg"
import {Link} from "react-router-dom"

const CardDetail = (props)=>{
    // console.log(props.location.state.contact);
    const {id,name,email} = props.location.state.contact;
    return(
        <div>
            <Header></Header>            
            <div className="main">
                <div className="center-div">
                    <h1>Welcome to Card Detail</h1>
                </div>
                <div className="ui card centered">
                    <div className="image">                     
                        <img src={profile} alt="user_pict"></img>
                    </div> 
                    <div className="content">
                        <div className="header">{name}</div>
                        <div className="description">{email}</div>
                    </div>
                </div>
                <div className="center-div">
                    <Link to="/">
                        <button type="button"
                         className="ui button blue fluid">Back to Contact List</button>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default CardDetail;