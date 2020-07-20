import React from 'react'
import { connect } from 'react-redux'
import { fetchDeletePrescriber } from '../../services/Utils'
import { deletePrescriber } from './PrescribersSlice'

let mapDispatch = { deletePrescriber }

const Prescriber = ({id, firstname, lastname, tel, email, edit, deletePrescriber}) => {

    let handleDelete = () => {
        fetchDeletePrescriber(id, localStorage.token)
            .then(response => {
                if(!response.message) {
                    deletePrescriber({id: id})
                }
            })
    }

    return (
        <tr>
            <td>{firstname}</td>
            <td>{lastname}</td>
            <td>{tel}</td>
            <td>{email}</td>
            <td><button onClick={() => edit(id)}>Edit</button></td>
            <td><button onClick={handleDelete} >Delete</button></td>
        </tr>
    )
}

export default connect(null, mapDispatch)(Prescriber)
