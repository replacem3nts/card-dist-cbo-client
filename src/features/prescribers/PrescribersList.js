import React, { useState } from 'react'
import { connect } from 'react-redux'
import Prescriber from './Prescriber'
import EditPrescriberForm from './EditPrescriberForm'

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

    let handleEditReset = () => {
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
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {prescArray}
                    </tbody>
                </table>
            </section>
            <section>
                {dispForm 
                ?
                <>
                    <EditPrescriberForm prescriber={prescToEdit} reset={handleEditReset}/>
                    <button onClick={handleEditReset}>Cancel</button>
                </>
                :
                    <button onClick={() => setDispForm(dispForm => !dispForm)}>Add New Prescriber</button>
                }
            </section>
        </article>
    )
}

let mapState = (state) => {
    return {prescribers: state.prescribers}
}

export default connect(mapState)(PrescribersList)
