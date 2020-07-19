import React from 'react'
// {id, firstname, lastname, tel, email}
export const Prescriber = (props) => {

    return (
        <tr onClick={() => props.edit(props.id)}>
            <td>{props.firstname}</td>
            <td>{props.lastname}</td>
            <td>{props.tel}</td>
            <td>{props.email}</td>
        </tr>
    )
}
