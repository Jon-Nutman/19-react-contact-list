import contactJSON from '../contacts.json'
import { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

export default function Contact() {
const [contacts, setContacts] = useState(contactJSON)
    return <div>
    <ul>
        {contacts.map(contact => {

            return <Link to={`/detail/${contact.id}`}> {contact.name.first}{contact.name.last} </Link>
            
        })}
    </ul>
    </div>
}

// should be contact list so do i have to index of contact then .id that