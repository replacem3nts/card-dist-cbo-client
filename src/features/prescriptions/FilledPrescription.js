import React from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'

export const FilledPrescription = ({hcname, clienttel, language, prescribername, prescriberphone, prescriberemail, amount, appt, cardserial, pickedup, loaded }) => {
    const { t } = useTranslation()
    const history = useHistory()

    let handleClick = () => {
        history.push('/')
    }

    return (
        <tr onClick={handleClick}>
            <td>{hcname}</td>
            <td>{clienttel}</td>
            <td>{language}</td>
            <td>{prescribername}</td>
            <td>{prescriberphone}</td>
            <td>{prescriberemail}</td>
            <td>${amount}</td>
            <td>{appt ? appt : '-'}</td>
            <td>{cardserial ? cardserial : '-'}</td>
            <td>{pickedup ? t('yes') : t('no')}</td>
            <td>{loaded ? t('yes') : t('no')}</td>
        </tr>
    )
}
