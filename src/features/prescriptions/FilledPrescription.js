import React from 'react'

export const FilledPrescription = ({hcname, clienttel, language, prescribername, prescriberphone, amount, appt, cardserial, pickedup, loaded }) => {
    return (
        <tr>
            <td>{hcname}</td>
            <td>{clienttel}</td>
            <td>{language}</td>
            <td>{prescribername}</td>
            <td>{prescriberphone}</td>
            <td>${amount}</td>
            <td>{appt}</td>
            <td>{cardserial}</td>
            <td>{pickedup}</td>
            <td>{loaded}</td>
            <td><button>Edit</button></td>
        </tr>
    )
}
