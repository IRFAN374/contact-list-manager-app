import React from "react";
import user from "../images/user.png";
import {Link} from "react-router-dom";

const ContactCard = (props)=>{
    const {id,name,email}= props.contact;
    return(
             <div className="item">
                <img className="ui avatar image" src={user} alt={name}></img>
                 <div className="content">
                     <Link to={
                         {
                           pathname: `/contact/${id}`,
                           state:{contact:props.contact}
                        }
                     }>
                        <div className="header">{name}</div>
                        <div>{email}</div>
                     </Link>
                     
                 </div>
                 <i 
                   className="trash outline alternate icon"
                   style={{color:"red", marginTop:"7px"}}
                   onClick={()=>props.clickHandler(id)}
                 ></i>
            </div>
    );
}

export default ContactCard;