import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next';

let mapState = (state) => {
    return {
        prescribers: state.prescribers,
        hcs: state.hcs,
        covidimpacts: state.covidimpacts,
        doctorvisits: state.doctorvisits,
        funduses: state.funduses
    }
}

const RxSurvey = ({ prescribers, hcs, covidimpacts, doctorvisits, funduses }) => {
    const { t } = useTranslation()

    // Below are the inputs needed to update an instance of the 'Rx' model
    const [tel, setTel] = useState('')
    const [language, setLanguage] = useState('English')
    const [prescriberId, setPrescriberId] = useState('')
    const [hcId, setHcId] = useState('')
    
    // Below are the fields needed to create an instance of the 'Survey' model
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('Male')
    const [hhsize, setHhsize] = useState('')
    const [hhfamilies, setHhfamilies] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [mixedstatus, setMixedstatus] = useState('Yes')
    const [covidImps, setCovidImps] = useState([])
    const [drVisits, setDrVisits] = useState([])
    const [funds, setFunds] = useState([])

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
                {ci.kind}
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
                {dv.kind}
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

    return (
        <article className='survey-container'>
            {console.log(age)}
            <header>
                <h2>4-CT Card Prescription Request</h2>
                <p>{t('survey instructions')}</p> 
            </header>
            <section>
                <form>
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
                                <option>Male</option>
                                <option>Female</option>
                                <option>Prefer Not To Say</option>
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
                                <option>Yes</option>
                                <option>No</option>
                                <option>Maybe</option>
                            </select>
                        </label>
                    </div><br/>
                    <h3>{t('use of funds')}</h3>
                    <p>{t('use of funds disclaimer')}</p>
                    <div className='survey-section'>
                        {t('use of funds question')}
                        {funduseArr}
                    </div><br/>
                    <h3>4. COVID-19 Impacts:</h3>
                    <div className='survey-section'>
                        {'Has anyone in the household experienced any of the following impacts of COVID-19?  '}<br/>
                        {covidimpactArr}
                    </div><br/>
                    <h3>5. Healthcare Interactions:</h3>
                    <div className='survey-section'>
                        {'Where do you/your family most often see a doctor now?  '}<br/>
                        {doctorvisitArr}
                    </div>
                    <input type='submit' value='Submit'/>
                </form>
            </section>
        </article>
    )
}

export default connect(mapState)(RxSurvey)