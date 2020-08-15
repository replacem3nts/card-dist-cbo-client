import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { fetchRxUpdate } from '../../services/Utils';
import { updatePrescription } from './PrescriptionsSlice';
import { useHistory, Link } from 'react-router-dom';

const mapState = (state) => {
    return {
        prescribers: state.prescribers,
        hcs: state.hcs
    }
}

const mapDispatch = { updatePrescription }

const EditPrescription = ({ prescription, prescribers, hcs, updatePrescription }) => {
    const { t } = useTranslation()
    const history = useHistory()

    const initialHc = hcs.find(hc => hc.name === prescription.hcname)
    const [hc, setHc] = useState(initialHc)

    const initialPresc = prescribers.find(presc => presc.email === prescription.prescriberemail)
    const [prescriber, setPrescriber] = useState(initialPresc)

    const [tel, setTel] = useState(prescription.clienttel)
    const [language, setLanguage] = useState(prescription.language)
    const [notes, setNotes] = useState(prescription.notes)

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

    let handleHcChange = (e) => {
        let newHc = hcs.find(hc => hc.id.toString() === e.target.value)
        setHc(newHc)
    }
    
    let handlePrescChange = (e) => {
        let newPresc = prescribers.find(presc => presc.id.toString() === e.target.value)
        setPrescriber(newPresc)
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        let newRx = { hcId: hc.id, prescriberId: prescriber.id, tel, language, notes }
        fetchRxUpdate(prescription.id, newRx, localStorage.token)
            .then(response => {
                if(!response.message) {
                    updatePrescription(response)
                    history.push('/')
                }
            })
    } 

    return (
        <article >
            <section className='button-break'>
                <Link to='/' className='small-button'>Back</Link>
            </section>
            <section className='rx-container'>
                <div className='rx-detail'>
                    <label>Rx Code: <span>{prescription.rxcode}</span></label>
                    <label>Client Phone: <span>{prescription.clienttel}</span></label>
                    <label>Language: <span>{prescription.language}</span></label>
                </div>
                <div className='rx-detail'>
                    <label>Prescriber Name:  <span>{prescription.prescribername}</span></label>
                </div>
                <div className='rx-detail'>
                    <label>Health Care Institution: <span>{prescription.hcname}</span></label>
                </div>
                <div className='rx-detail'>
                    <label>Amount: <span>${prescription.amount}</span></label>
                    <label>Appt: <span>{prescription.appt ? prescription.appt : '-'}</span></label>
                    <label>cardserial: <span>{prescription.cardserial ? prescription.cardserial : '-'}</span></label>
                    <label>Picked Up: <span>{prescription.pickedup ? t('yes') : t('no')}</span></label>
                    <label>Loaded: <span>{prescription.loaded ? t('yes') : t('no')}</span></label>
                </div><br/><br/>
                <div className='rx-detail' style={{width: 80+'%'}}>
                    <label>Notes:<br/><br/><span>{prescription.notes ? prescription.notes : '-'}</span></label>
                </div>
            </section>
            <section className='button-break'>
                    <button className='small-button' onClick={handleEditClick}>Edit</button>
            </section>
            <section>
                {edit ?
                    <div className='rx-container' >
                        <form onSubmit={handleSubmit}>
                            <div className='rx-detail'>
                                <label>
                                    {t('select prescriber')}
                                    <select value={prescriber.id} onChange={handlePrescChange}>
                                        {prescriberArr}
                                    </select>
                                </label>
                            </div><br/>
                            <div className='rx-detail'>
                                <label>
                                    {t('select health center')}
                                    <select value={hc.id} onChange={handleHcChange}>
                                        {hcArr}
                                    </select>
                                </label>
                            </div><br/>
                            <div className='rx-detail'>
                                <label>
                                    {t('applicant phone')}
                                    <input type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={tel} onChange={(e) => setTel(e.target.value)}/>
                                </label>
                            </div><br/>
                            <div className='rx-detail'>
                                <label>
                                    {t('applicant language')}
                                    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                                        <option value='EN'>English</option>
                                        <option value='SP'>Spanish</option>
                                        <option value='PT'>Portuguese</option>
                                        <option value='FR'>French</option>
                                        <option value='AR'>Arabic</option>
                                    </select>
                                </label>
                            </div><br/>
                            <div className='rx-detail'>
                                <label>
                                    {t('notes')}:<br/><br/>
                                    <textarea rows={8} cols={100} value={notes ? notes : t('notes placeholder')} onChange={(e) => setNotes(e.target.value)}/>
                                </label>
                            </div><br/>
                            <input type='submit' className='small-button' value={t('submit')}/>
                        </form>
                    </div>
                :
                null
                }
            </section>
        </article>
    )
}

export default connect(mapState, mapDispatch)(EditPrescription)