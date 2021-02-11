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
    return <div> <h3> <Link to='/'> back </Link> </h3>
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