import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Prescriber } from './Prescriber'
import { EditPrescriberForm } from './EditPrescriberForm'

const PrescribersList = ({prescribers}) => {
    let blankPresc = {
        id: '',
        firstname: '',
        lastname: '',
        tel: '',
        email: ''
    }

    const [dispForm, setDispForm] = useState(false)
    const [prescToEdit, setPrescToEdit] = useState(blankPresc)

    
    let handleEdit = (id) => {
        let presc = prescribers.find(presc => presc.id === id)
        setPrescToEdit(presc)
        setDispForm(dispForm => !dispForm)
    }

    let handleEditReset = (e) => {
        e.preventDefault()
        setPrescToEdit(blankPresc)
        setDispForm(dispForm => !dispForm)
    }

    const prescArray = prescribers.map(prescriber => {
        return <Prescriber key={prescriber.id} {...prescriber} edit={handleEdit}/>
    })

    return (
        <article>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Telephone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {prescArray}
                    </tbody>
                </table>
            </section>
            {dispForm 
            ?
            <>
                <EditPrescriberForm prescriber={prescToEdit}/>
                <button onClick={handleEditReset}>Cancel</button>
            </>
            :
            null
            }
            <section>

            </section>
        </article>
    )
}

let mapState = (state) => {
    return {prescribers: state.prescribers}
}

export default connect(mapState)(PrescribersList)
