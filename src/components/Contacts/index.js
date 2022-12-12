import React from "react";
import List from "../List";
import Form from "../Form";
import { useState,useEffect } from "react";
import  "./styles.css"
function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname:"Mehmet",
      phone_number:"123123"
    },
    {
      fullname:"Apo",
      phone_number:"4444"
    },
    {
      fullname:"Hasan",
      phone_number:"0000"
    },
  ])

  useEffect(() => {
    console.log(contacts)
    }
, [contacts])
  
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts}  />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );  
}

export default Contacts;
