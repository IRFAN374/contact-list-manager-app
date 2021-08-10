// import logo from './logo.svg';
import {
  useState, 
  useEffect
} from "react";
import './App.css';
import Header from "./Component/Header";
import AddContact from "./Component/AddContact";
import ContactList from "./Component/ContactList";
import CardDetail from "./Component/CardDetail";

import { uuid } from "uuidv4";
import {
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom";


function App() {
  const LOCAL_STORAGE_KEY= "contacts";
  const [contacts, setContacts] = useState([]);


  const addContactHandler = (contact)=>{
//    console.log(contact);
    setContacts([...contacts,{id:uuid(), ...contact}]); 
  };

  const removeContactHandler = (id)=>{
    const newContacts = contacts.filter((contact)=>{
        return contact.id !==id;
    });
     setContacts(newContacts);
  }

  useEffect (()=>{
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts){
      setContacts(retriveContacts);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);
 
  return (
    
    <div className="ui container">
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/add"  
               render={
                 (props)=><AddContact 
                   {...props}
                   addContactHandler={addContactHandler}>
                 </AddContact>
                }></Route>
            <Route path="/"
              exact
              render={
                (props)=><ContactList
                  {...props}
                  contacts={contacts}
                  getContactId={removeContactHandler}
                >                  
                </ContactList>
                }></Route>
             <Route path="/contact/:id" component={CardDetail}></Route>
             <Route render={()=><h1><br></br>Not found page</h1>}></Route>   
          </Switch>
          {/* <AddContact addContactHandler={addContactHandler} ></AddContact> */}
          {/* <ContactList contacts={contacts} getContactId={removeContactHandler} ></ContactList>         */}
        </Router>
        
    </div>
  );
}

export default App;
