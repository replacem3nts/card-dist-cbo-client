import React from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'

export const FilledPrescription = ({id, rxcode, hcname, clienttel, language, prescribername, amount, appt, cardserial, pickedup, loaded }) => {
    const { t } = useTranslation()
    const history = useHistory()

    let handleClick = () => {
        history.push(`/rx/${id}`)
    }

    return (
        <tr onClick={handleClick}>
            <td>{rxcode}</td>
            <td>{hcname}</td>
            <td>{clienttel}</td>
            <td>{language}</td>
            <td>{prescribername}</td>
            <td>${amount}</td>
            <td>{appt ? appt : '-'}</td>
            <td>{cardserial ? cardserial : '-'}</td>
            <td>{pickedup ? t('yes') : t('no')}</td>
            <td>{loaded ? t('yes') : t('no')}</td>
        </tr>
    )
}
