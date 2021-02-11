import contactJSON from '../contacts.json'
import { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

export default function ContactDetail(props) {
    const idNum = props.match.params.id
    const[activeUser, setActiveUser] = useState(contactJSON.find(user => user.id == idNum))
   console.log(activeUser)
    return <div>
         <h3 
         className="contact-details-header" >  
         <Link 
         className='contact-details-back' to='/'> Back 
         </Link> 
         <img className='contact-picture-header' src={activeUser.picture.large} alt="Logo" />
         </h3>
        <ul>
        <li>
        {activeUser.name.first} {activeUser.name.last}
        </li>
        <li> 
        {activeUser.email}
        </li>
        <li> 
        {activeUser.cell}
        </li>
        <li> 
        {activeUser.location.city}{', '}{activeUser.location.state}
        </li>
        </ul>
        </div>
}