import React, { useState } from 'react'
import { connect } from 'react-redux'
import Prescriber from './Prescriber'
import EditPrescriberForm from './EditPrescriberForm'
import { Link } from 'react-router-dom'


let mapState = (state) => {
    return {prescribers: state.prescribers}
}

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
        if(dispForm){
            setPrescToEdit(blankPresc)
        } else {
            let presc = prescribers.find(presc => presc.id === id)
            setPrescToEdit(presc)
        }
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
            <section className='button-break'>
                <Link to='/' className='small-button'>Back</Link>
            </section>
            <section className='rx-container'>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Telephone</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {prescArray}
                    </tbody>
                </table>
            </section>
            <section className='button-break'>
                {dispForm ? 
                <button className='small-button' onClick={handleEditReset}>Cancel</button>
                :
                <button className='small-button' onClick={() => setDispForm(dispForm => !dispForm)}>Add New Prescriber</button>
                }
            </section>
            {dispForm ?
                <section>
                    <EditPrescriberForm prescriber={prescToEdit} reset={handleEditReset}/>
                </section>
                :
                null
            }
        </article>
    )
}

export default connect(mapState)(PrescribersList)
