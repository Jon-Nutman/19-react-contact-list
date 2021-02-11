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
    <ul id="contacts-list">
        <h3 id="contacts-list-header">My Peeps</h3>
        {contacts.map(contact => {

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  let firstName = capitalizeFirstLetter(contact.name.first)
  let lastName = capitalizeFirstLetter(contact.name.last)
            return <Link 
            className='contact-list-links' 
            to={`/detail/${contact.id}`}>
                <img className='contact-picture-thumbnail' src={contact.picture.thumbnail} alt="Logo" />
                 <span className='contact-name' > {firstName} {lastName} </span> 
                 </Link>
            
        })}
    </ul>
    </div>
}

// should be contact list so do i have to index of contact then .id that