import contactJSON from '../contacts.json'
import { useState } from 'react'

export default function ContactDetail(props) {
    const idNum = props.match.params.id
    const[activeUser, setActiveUser] = useState(contactJSON.find(user => user.id == idNum))
   console.log(activeUser)
    return <div>{activeUser.name.first} {activeUser.name.last}</div>
}