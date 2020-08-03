import React, { useState } from 'react'
import { fetchUpdatePrescriber, fetchAddPrescriber } from '../../services/Utils'
import { connect } from 'react-redux'
import { updatePrescriber, addPrescriber } from './PrescribersSlice'

let mapDispatch = { updatePrescriber, addPrescriber }

const EditPrescriberForm = ({prescriber, updatePrescriber, addPrescriber, reset}) => {
    const [firstname, setFirstname] = useState(prescriber.firstname)
    const [lastname, setLastname] = useState(prescriber.lastname)
    const [tel, setTel] = useState(prescriber.tel)
    const [email, setEmail] = useState(prescriber.email)

    let handleSubmit = (e) => {
        e.preventDefault()
        if(prescriber.firstname !== '') {
            handleUpdate()
        } else {
            handleCreate()
        }
        
    }
    
    let handleUpdate = () => {
        let newPresc = {id: prescriber.id, firstname, lastname, tel, email}
        fetchUpdatePrescriber(newPresc, localStorage.token)
            .then(response => {
                if(!response.message) {
                    updatePrescriber(response)
                    reset()
                }
            })
    }

    let handleCreate = () => {
        let newPresc = {firstname, lastname, tel, email}
        fetchAddPrescriber(newPresc, localStorage.token)
            .then(response => {
                if(!response.message) {
                    addPrescriber(response)
                    reset()
                }
            })
    }

    return (
            <form onSubmit={handleSubmit} className='rx-container'>
                <div className='presc-detail'>
                    <label>
                        First Name:
                        <input type='text' name='firstname' value={firstname} onChange={(e) => {setFirstname(e.target.value)}}/>
                    </label>
                </div>
                <div className='presc-detail'>
                    <label>
                        Last Name:
                        <input type='text' name='lastname' value={lastname} onChange={(e) => {setLastname(e.target.value)}}/>
                    </label>
                </div>
                <div className='presc-detail'>
                    <label>
                        Telephone:
                        <input type='text' name='tel' value={tel} onChange={(e) => {setTel(e.target.value)}}/>
                    </label>
                </div>
                <div className='presc-detail'>
                    <label>
                        E-mail:
                        <input type='text' name='email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                    </label>
                </div>
                <input type='submit' value='Submit' className='small-button'/>
            </form>
    )
}

export default connect(null, mapDispatch)(EditPrescriberForm)
