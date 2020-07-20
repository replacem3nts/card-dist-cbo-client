import React from 'react'
import { connect } from 'react-redux'

let mapState = (state) => {
    return {
        filled: state.prescriptions.filter(rx => rx),
        avail: state.prescriptions.filter(rx => rx)
    }
}

const FilledPrescritionsList = ({filled, avail}) => {

    const filledRxArr = 
    return (
        <section>
            
        </section>
    )
}

export default connect(mapState)(FilledPrescritionsList)
