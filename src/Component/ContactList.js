import React from 'react';
//import user from "../images/user.png"
import ContactCard from './ContactCard';
import {Link} from "react-router-dom";

const ContactList = (props) => {

    const deleteContactHandler= (id)=>{
        props.getContactId(id);
    };
//     const contacts =[
//     {
//       id: "1",
//       name: "md irfan",
//       email:"irfan@gmail.com"
//     },
//     {
//       id:2,
//       name:"Shyam",
//       email:"shyam@gmail.com"
//     }
//   ];

    const rednerContactList = props.contacts.map( (contact)=>{
        return(
            <ContactCard 
               contact={contact}
               key={contact.id}
               clickHandler={deleteContactHandler}
            ></ContactCard>
        );
    });
    return (
        <div className="main">
            <h2>Contact List
                <Link to="/add">
                    <button type="button" className="ui button blue right floated">Add Contact</button>
                </Link>     
            </h2>
            <div className="ui celled list">
                {rednerContactList}
            </div>    
        </div>
    );
};

export default ContactList;