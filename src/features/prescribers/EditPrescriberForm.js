import React, { useState } from 'react'

export const EditPrescriberForm = ({prescriber}) => {
    const [newFirstname, setNewFirstname] = useState(prescriber.firstname)
    const [newLastname, setNewLastname] = useState(prescriber.lastname)
    const [newTel, setNewTel] = useState(prescriber.tel)
    const [newEmail, setNewEmail] = useState(prescriber.email)

    

    return (
        <form>
            {console.log(prescriber)}
            <label>
                First Name:
                <input type='text' name='firstname' value={newFirstname} onChange={(e) => {setNewFirstname(e.target.value)}}/>
            </label>
            <label>
                Last Name:
                <input type='text' name='lastname' value={newLastname} onChange={(e) => {setNewLastname(e.target.value)}}/>
            </label>
            <label>
                Telephone:
                <input type='text' name='tel' value={newTel} onChange={(e) => {setNewTel(e.target.value)}}/>
            </label>
            <label>
                E-mail:
                <input type='text' name='email' value={newEmail} onChange={(e) => {setNewEmail(e.target.value)}}/>
            </label>
            <input type='submit' value='Submit'/>
        </form>
    )
}
