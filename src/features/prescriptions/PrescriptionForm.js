import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next';
import { fetchFirstRxUpdate, fetchSurveyCreate } from '../../services/Utils';
import { updatePrescription } from './PrescriptionsSlice';
import { useHistory } from 'react-router-dom';

let mapState = (state) => {
    return {
        prescribers: state.prescribers,
        hcs: state.hcs,
        covidimpacts: state.covidimpacts,
        doctorvisits: state.doctorvisits,
        funduses: state.funduses
    }
}

let mapDispatch = { updatePrescription }

const RxSurvey = ({ prescribers, hcs, covidimpacts, doctorvisits, funduses, updatePrescription }) => {
    const { t } = useTranslation()
    const history = useHistory()

    // Below are the inputs needed to update an instance of the 'Rx' model
    const [tel, setTel] = useState('')
    const [language, setLanguage] = useState('English')
    const [prescriberId, setPrescriberId] = useState('')
    const [hcId, setHcId] = useState('')
    const [notes, setNotes] = useState('')
    
    // Below are the fields needed to create an instance of the 'Survey' model
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('Male')
    const [hhsize, setHhsize] = useState(0)
    const [hhfamilies, setHhfamilies] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [mixedstatus, setMixedstatus] = useState('Yes')
    const [covidImps, setCovidImps] = useState([])
    const [drVisits, setDrVisits] = useState([])
    const [funds, setFunds] = useState([])
    const [hhmembers, setHhmembers] = useState([
        {age: '', gender: 'Male'},
        {age: '', gender: 'Male'}
    ])


    // Below are the form submission helpers

    let handleSubmit = (e) => {
        e.preventDefault()
        let rxUpdate = { hcId, prescriberId, tel, language, notes}
        let newSurvey = { age, gender, hhsize, hhfamilies, zipcode, mixedstatus }
        let surveyRels = { covidImps, drVisits, funds, hhmembers }
        fetchSurveyCreate(newSurvey, surveyRels, localStorage.token)
            .then(response => {
                if(!response.message) {
                    let { rxId } = response
                    fetchFirstRxUpdate(rxId, rxUpdate, localStorage.token)
                        .then(response => {
                            if(!response.message) {
                                console.log(response)
                                updatePrescription(response)
                                history.push('/')
                            }
                        })
                }
            })
    }


    // Below create the select options for prescribers and healthcare institutions
    const prescriberArr = prescribers.map(presc => {
    return <option key={presc.id} value={presc.id}>{presc.firstname} {presc.lastname}</option>
    })

    const filteredHcs = hcs.filter(hc => hc.name !== "DEFAULT HC")
    const hcArr = filteredHcs.map(hc => {
        return <option key={hc.id} value={hc.id}>{hc.name}</option>
    })

    // Below create the checkbox inputs and form controls for COVID Impacts, Doctor Visits and Fund Uses
    let handleCovid = (e) => {
        let { value } = e.target
        if(covidImps.find(ci => ci === value)){
            setCovidImps(covidImps => covidImps.filter(id => id !== value))
        } else {
            setCovidImps(covidImps => [...covidImps, value])
        }
    }

    const covidimpactArr = covidimpacts.map(ci => {
        return (
            <label key={ci.id}>
                <input type='checkbox' checked={covidImps.find(covimp => covimp === ci.id)} value={ci.id} onClick={(e) => handleCovid(e)}/>
                {t(`${ci.kind}`)}
            </label>
            )
        })

    let handleDoctor = (e) => {
        let { value } = e.target
        if(drVisits.find(dv => dv === value)){
            setDrVisits(drVisits => drVisits.filter(id => id !== value))
        } else {
            setDrVisits(drVisits => [...drVisits, value])
        }
    }
            
    const doctorvisitArr = doctorvisits.map(dv => {
        return (
            <label key={dv.id}>
                <input type='checkbox' checked={drVisits.find(drVisit => drVisit === dv.id)} value={dv.id} onClick={(e) => handleDoctor(e)}/>
                {t(`${dv.kind}`)}
            </label>
            )
        })

    let handleFund = (e) => {
        let { value } = e.target
        if(funds.find(fu => fu === value)){
            setFunds(funds => funds.filter(id => id !== value))
        } else {
            setFunds(funds => [...funds, value])
        }
    }
            
    const funduseArr = funduses.map(fu => {
        return (
            <label key={fu.id}>
                <input type='checkbox' checked={funds.find(use => use === fu.id)} value={fu.id} onClick={(e) => handleFund(e)}/>
                {t(`${fu.kind}`)}
            </label>
            )
        })

    // Below household members inputs and form controls

    let handleHhmemberAge = (e) => {
        let { name, value } = e.target
        let newHhmembers = [...hhmembers]
        newHhmembers[name].age = value
        setHhmembers(newHhmembers)
    }

    let handleHhmemberGender = (e) => {
        let { name, value } = e.target
        let newHhmembers = [...hhmembers]
        newHhmembers[name].gender = value
        setHhmembers(newHhmembers)
    }

    let handleAddMember = (e) => {
        e.preventDefault()
        setHhmembers(hhmembers => [...hhmembers, {age: '', gender: 'Male'}])
    }

    let handleRemoveMember = (e) => {
        e.preventDefault()
        let newHhmembers = [...hhmembers]
        newHhmembers.pop()
        setHhmembers(newHhmembers)
    }

    const hhmembersArr = hhmembers.map((hhmember, i) => {
        return (
            <div key={i} style={{margin: 0.25+'rem'}}>
                <label>
                    {`${i+1}. `}{t('age')}
                    <input type='number' name={i} value={hhmember.age} onChange={(e) => handleHhmemberAge(e)} required={true}/>
                </label>
                <label>
                    {t('gender')}
                    <select name={i} value={hhmember.gender} onChange={(e) => handleHhmemberGender(e)}>
                        <option>{t('Male')}</option>
                        <option>{t('Female')}</option>
                        <option>{t('Prefer Not to Say')}</option>
                    </select>
                </label>
            </div>
        )
    })


    return (
        <article className='survey-container'>
            <header>
                <h2>4-CT Card Prescription Request</h2>
                <p>{t('survey instructions')}</p> 
            </header>
            <section>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label>
                        <h4>{t('select prescriber')}</h4>
                        <select defaultValue={'DEFAULT'} onChange={(e) => setPrescriberId(e.target.value)} required={true}>
                            <option value='DEFAULT' disabled>---------------</option>
                            {prescriberArr}
                        </select>
                    </label><br/><br/>
                    <label>
                        <h4>{t('select health center')}</h4>
                        <select defaultValue={'DEFAULT'} onChange={(e) => setHcId(e.target.value)} required={true}>
                            <option value='DEFAULT' disabled>---------------</option>
                            {hcArr}
                        </select>
                    </label><br/><br/>
                        <h3>{t('applicant info')}</h3>
                        <p>{t('applicant description')}</p>
                    <div className='survey-section'>
                        <label>
                            {t('applicant phone')}
                            <input type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required={true} value={tel} onChange={(e) => setTel(e.target.value)}/>
                        </label>
                        <label>
                            {t('applicant age')}
                            <input type='number' value={age} required={true} onChange={(e) => setAge(e.target.value)}/>
                        </label>
                        <label>
                            {t('applicant gender')}
                            <select required={true} value={gender} onChange={(e) => setGender(e.target.value)}>
                                <option>{t('Male')}</option>
                                <option>{t('Female')}</option>
                                <option>{t('Prefer Not to Say')}</option>
                            </select>
                        </label>
                        <label>
                            {t('applicant language')}
                            <select value={language} onChange={(e) => setLanguage(e.target.value)} required={true}>
                                <option>English</option>
                                <option>Spanish</option>
                                <option>Portuguese</option>
                                <option>French</option>
                                <option>Arabic</option>
                            </select>
                        </label>
                    </div><br/>
                    <h3>{t('household info')}</h3>
                    <div className='survey-section'>
                        <label>
                            {t('household size')}
                            <input type='number' value={hhsize} onChange={(e) => setHhsize(e.target.value)} required={true}/>
                        </label>
                        <label>
                            {t('household families')}
                            <input type='number' value={hhfamilies} onChange={(e) => setHhfamilies(e.target.value)} required={true}/>
                        </label>
                        <label>
                            {t('household zipcode')}
                            <input type='text' value={zipcode} onChange={(e) => setZipcode(e.target.value)} required={true}/>
                        </label>
                        <label>
                            {t('household spousal status')}
                            <select value={mixedstatus} onChange={(e) => setMixedstatus(e.target.value)} required={true}>
                                <option>{t('yes')}</option>
                                <option>{t('no')}</option>
                                <option>{t('maybe')}</option>
                            </select>
                        </label>
                    </div><br/>
                    <h3>{t('use of funds')}</h3>
                    <p>{t('use of funds disclaimer')}</p>
                    <div className='survey-section'>
                        {t('use of funds question')}
                        {funduseArr}
                    </div><br/>
                    <h3>{t('covid impacts')}</h3>
                    <div className='survey-section'>
                        {t('covid impacts question')}<br/>
                        {covidimpactArr}
                    </div><br/>
                    <h3>{t('doctor visits')}</h3>
                    <div className='survey-section'>
                        {t('doctor visits question')}<br/>
                        {doctorvisitArr}
                    </div><br/>
                    <h3>{t('household members')}</h3>
                    <div className='survey-section'>
                        {t('household members description')}
                        <button onClick={(e) => handleAddMember(e)}>{t('add member')}</button>
                        <button onClick={(e) => handleRemoveMember(e)}>{t('remove member')}</button><br/><br/>
                        {hhmembersArr}<br/><br/>
                    </div><br/>
                    <h3>{t('notes')}</h3>
                    <p>{t('notes description')}</p>
                    <div className='survey-section'>
                        <textarea rows={8} cols={100} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder={t('notes placeholder')}/>
                    </div><br/>
                    <input type='submit' value={t('submit')}/>
                </form>
            </section>
        </article>
    )
}

export default connect(mapState, mapDispatch)(RxSurvey)