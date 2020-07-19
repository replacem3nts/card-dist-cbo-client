import React, { useState } from 'react'

export const EditPrescriberForm = ({id, firstname, lastname, tel, email}) => {
    const [newFirstname, setNewFirstname] = useState(firstname)
    const [newLastname, setNewLastname] = useState(lastname)
    const [newTel, setNewTel] = useState(tel)
    const [newEmail, setNewEmail] = useState(email)

    return (
        <form>
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
