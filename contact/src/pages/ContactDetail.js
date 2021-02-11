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
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      let firstName = capitalizeFirstLetter(activeUser.name.first)
      let lastName = capitalizeFirstLetter(activeUser.name.last)
      let city = capitalizeFirstLetter(activeUser.location.city)
      let state = capitalizeFirstLetter(activeUser.location.state)

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
        {firstName} {lastName}
        </li>
        <li> 
        {activeUser.email}
        </li>
        <li> 
        {activeUser.cell}
        </li>
        <li> 
        {city}{', '}{state}
        </li>
        </ul>
        </div>
}