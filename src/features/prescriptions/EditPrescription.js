import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'

const mapState = (state) => {
    return {
        prescribers: state.prescribers,
        hcs: state.hcs
    }
}

const EditPrescription = ({ prescription, prescribers, hcs }) => {
    const { t } = useTranslation()
    const initialPresc = prescribers.find(presc => presc.email === prescription.prescriberemail)
    const initialHc = hcs.find(hc => hc.name === prescription.hcname)

    const [prescriberId, setPrescriberId] = useState(initialPresc.id)
    const [hcId, setHcId] = useState(initialHc.id)
    const [tel, setTel] = useState(prescription.clienttel)
    const [language, setLanguage] = useState(prescription.language)
    const [notes, setNotes] = useState(prescription.notes)

    const [prescriberName, setPrescriberName] = useState(prescription.prescribername)
    const [hcName, setHcName] = useState(prescription.hcname)

    const [edit, setEdit] = useState(false)

    const prescriberArr = prescribers.map(presc => {
        return <option key={presc.id} value={presc.id}>{presc.firstname} {presc.lastname}</option>
        })
    
    const filteredHcs = hcs.filter(hc => hc.name !== "DEFAULT HC")
    const hcArr = filteredHcs.map(hc => {
        return <option key={hc.id} value={hc.id}>{hc.name}</option>
    })

    let handleEditClick = (e) => {
        e.preventDefault()
        setEdit(edit => !edit)
    }

    return (
        <section className='survey-section'>
            {edit ?
            <form>
                <label>
                    <h4>{t('select prescriber')}</h4>
                    <select value={prescriberId} onChange={(e) => setPrescriberId(e.target.value)}>
                        {prescriberArr}
                    </select>
                </label>
                <label>
                    <h4>{t('select health center')}</h4>
                    <select value={hcId} onChange={(e) => setHcId(e.target.value)}>
                        {hcArr}
                    </select>
                </label>
                <label>
                    {t('applicant phone')}
                    <input type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={tel} onChange={(e) => setTel(e.target.value)}/>
                </label>
                <label>
                    {t('applicant language')}
                    <select value={language} onChange={(e) => setLanguage(e.target.value)} required={true}>
                        <option value='EN'>English</option>
                        <option value='SP'>Spanish</option>
                        <option value='PT'>Portuguese</option>
                        <option value='FR'>French</option>
                        <option value='AR'>Arabic</option>
                    </select>
                </label>
            </form>
            :
            <>
            <div>
                <h4>Prescriber Name:</h4>
                <p>{prescriberName}</p>
            </div>
            <div>
                <h4>Health Care Institution Name:</h4>
                <p>{hcName}</p>
            </div>
            <div>
                <h4>Client Phone:</h4>
                <p>{tel}</p>
            </div>
                <h4>Language:</h4>
                <p>{language}</p>
            <div>
                <h4>Amount:</h4>
                <p>{prescription.amount}</p>
            </div>
            <div>
                <h4>Appt:</h4>
                <p>{prescription.appt ? prescription.appt : '-'}</p>
            </div>
                <h4>cardserial:</h4>
                <p>{prescription.cardserial ? prescription.cardserial : '-'}</p>
            <div>
                <h4>Picked Up:</h4>
                <p>{prescription.pickedup ? t('yes') : t('no')}</p>
            </div>
            <div>
                <h4>Loaded:</h4>
                <p>{prescription.loaded ? t('yes') : t('no')}</p>
            </div>
            <div>
                <h4>Notes:</h4>
                <p>{notes ? notes : '-'}</p>
            </div>
                <button onClick={handleEditClick}>Edit</button>
            </>
            }
        </section>
    )
}

export default connect(mapState)(EditPrescription)