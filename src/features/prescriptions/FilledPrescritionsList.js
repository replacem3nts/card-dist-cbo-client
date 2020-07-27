import React from 'react'
import { connect } from 'react-redux'
import { FilledPrescription } from './FilledPrescription'
import { Link } from 'react-router-dom'

let mapState = (state) => {
    return {prescriptions: state.prescriptions}
}

const FilledPrescritionsList = ({ prescriptions }) => {

    const filled  = prescriptions.filter(rx => rx.hcname !== "DEFAULT HC")
    const avail  = prescriptions.filter(rx => rx.hcname === "DEFAULT HC")

    const filledRxArr = filled.map(rx => {
        return <FilledPrescription key={rx.id} {...rx}/>
    })

    const filledNum = filled.length
    const filledAmt = filled.reduce((i, rx) => {return i + rx.amount}, 0)
    const availNum = avail.length

    return (
        <>
        <section className='display-container filled'>
            <header className='filled-header'>
                <h2>Filled Prescriptions</h2>
                <div>
                    <h3>Total: {filledNum}</h3>
                    <h3>Distributed: ${filledAmt}</h3>
                </div>
            </header>
            <table>
                <thead>
                    <tr>
                        <th>Org.</th>
                        <th>Client Tel.</th>
                        <th>Lang.</th>
                        <th>Presc.</th>
                        <th>Presc. #</th>
                        <th>Amount</th>
                        <th>Appt. Date</th>
                        <th>Appt. Time</th>
                        <th>Picked Up</th>
                        <th>Loaded</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {filledRxArr}
                </tbody>
            </table>
        </section>
        <section className='display-container'>
            <header className='filled-header'>
                <h2>Available Prescriptions</h2>
            </header>
            <div className='distributed-body'>
                <h3>Number Available to be Filled: {availNum}</h3>
                <Link className='large-button' to={`/fillrx`}>Assign New Rx</Link>
                <Link className='large-button' to='/prescribers'>Manage Prescribers</Link>
            </div>
        </section>
        </>
    )
}

export default connect(mapState)(FilledPrescritionsList)
