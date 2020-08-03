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
        <article className='survey-container'>
            <section>
                <div className='survey-section'>
                    <label>Prescriber Name:  <span>{prescriberName}</span></label>
                </div>
                <div className='survey-section'>
                    <label>Health Care Institution: <span>{hcName}</span></label>
                </div>
                <div className='survey-section'>
                    <label>Client Phone: <span>{tel}</span></label>
                    <label>Language: <span>{language}</span></label>
                </div>
                <div className='survey-section'>
                    <label>Amount: <span>{prescription.amount}</span></label>
                    <label>Appt: <span>{prescription.appt ? prescription.appt : '-'}</span></label>
                    <label>cardserial: <span>{prescription.cardserial ? prescription.cardserial : '-'}</span></label>
                    <label>Picked Up: <span>{prescription.pickedup ? t('yes') : t('no')}</span></label>
                    <label>Loaded: <span>{prescription.loaded ? t('yes') : t('no')}</span></label>
                </div>
                <div className='survey-section'>
                    <label>Notes: <span>{notes ? notes : '-'}</span></label>
                </div>
                    <button onClick={handleEditClick}>Edit</button>
            </section>
            <section>
                {edit ?
                    <div className='survey-section' >
                        <form>
                            <label>
                                {t('select prescriber')}
                                <select value={prescriberId} onChange={(e) => setPrescriberId(e.target.value)}>
                                    {prescriberArr}
                                </select>
                            </label><br/><br/>
                            <label>
                                {t('select health center')}
                                <select value={hcId} onChange={(e) => setHcId(e.target.value)}>
                                    {hcArr}
                                </select>
                            </label><br/><br/>
                            <label>
                                {t('applicant phone')}
                                <input type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={tel} onChange={(e) => setTel(e.target.value)}/>
                            </label><br/><br/>
                            <label>
                                {t('applicant language')}
                                <select value={language} onChange={(e) => setLanguage(e.target.value)} required={true}>
                                    <option value='EN'>English</option>
                                    <option value='SP'>Spanish</option>
                                    <option value='PT'>Portuguese</option>
                                    <option value='FR'>French</option>
                                    <option value='AR'>Arabic</option>
                                </select>
                            </label><br/><br/>
                            {t('notes description')}
                            <textarea rows={8} cols={100} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder={t('notes placeholder')}/>
                        </form>
                    </div>
                :
                null
                }
            </section>
        </article>
    )
}

export default connect(mapState)(EditPrescription)