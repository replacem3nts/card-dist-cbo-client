import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useTranslation } from 'react-i18next';

let mapState = (state) => {
    return {
        prescribers: state.prescribers,
        hcs: state.hcs
    }
}

const RxSurvey = ({ prescribers, hcs }) => {
    const { t } = useTranslation()

    // Below here are all the inputs needed to update the 'Rx' model
    const [tel, setTel] = useState('')
    const [language, setLanguage] = useState('English')
    const [prescriberId, setPrescriberId] = useState('')
    const [hcId, setHcId] = useState('')
    
    // Below here are all the fields needed to update the 'Rx' model

    const filteredHcs = hcs.filter(hc => hc.name !== "DEFAULT HC")
    const hcArr = filteredHcs.map(hc => {
        return <option key={hc.id} value={hc.id}>{hc.name}</option>
    })

    const prescriberArr = prescribers.map(presc => {
    return <option key={presc.id} value={presc.id}>{presc.firstname} {presc.lastname}</option>
    })

    // const useOfFunds = ['Food', 'Housing', 'Medication', 'Childcare', 'Utilities', 'Transportation', 'Education', 'Clothes / Items for Babies & Children']

    
    return (
        <article className='survey-container'>
            {console.log(hcId)}
            <header>
                <h2>4-CT Card Prescription Request</h2>
                <p>{t('survey instructions')}</p> 
            </header>
            <section>
                <form>
                    <label>
                        <h4>{t('select prescriber')}</h4>
                        <select defaultValue={'DEFAULT'} onChange={(e) => setPrescriberId(e.target.value)}>
                            <option value='DEFAULT' disabled>---------------</option>
                            {prescriberArr}
                        </select>
                    </label><br/><br/>
                    <label>
                        <h4>{t('select health center')}</h4>
                        <select defaultValue={'DEFAULT'} onChange={(e) => setHcId(e.target.value)}>
                            <option value='DEFAULT' disabled>---------------</option>                            {hcArr}
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
                            <input type='number' required={true}/>
                        </label>
                        <label>
                            {t('applicant gender')}
                            <select required={true}>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Prefer Not To Say</option>
                            </select>
                        </label>
                        <label>
                            {t('applicant language')}
                            <select required={true} value={language} onChange={(e) => setLanguage(e.target.value)}>
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
                            <input type='number' required={true}/>
                        </label>
                        <label>
                            {t('household families')}
                            <input type='number' required={true}/>
                        </label>
                        <label>
                            {t('household zipcode')}
                            <input type='text' required={true}/>
                        </label>
                        <label>
                            {t('household spousal status')}
                            <select required={true}>
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
                        <label>
                        <input type='checkbox'/>
                            Option 1
                        </label>
                        <label>
                            <input type='checkbox'/>
                            Option 2
                        </label>
                        <label>
                            <input type='checkbox'/>
                            Option 3
                        </label>
                        <label>
                            <input type='checkbox'/>
                            Option 4
                        </label>
                    </div><br/>
                    <h3>4. COVID-19 Impacts:</h3>
                    <div className='survey-section'>
                        {'Has anyone in the household experienced any of the following impacts of COVID-19?  '}<br/>
                        <label>
                        <input type='checkbox'/>
                            Option 1
                        </label><br/>
                        <label>
                            <input type='checkbox'/>
                            Option 2
                        </label><br/>
                        <label>
                            <input type='checkbox'/>
                            Option 3
                        </label><br/>
                        <label>
                            <input type='checkbox'/>
                            Option 4
                        </label>
                    </div><br/>
                    <h3>5. Healthcare Interactions:</h3>
                    <div className='survey-section'>
                        {'Where do you/your family most often see a doctor now?  '}<br/>
                        <label>
                            <input type='checkbox'/>
                            Option 1
                        </label><br/>
                        <label>
                            <input type='checkbox'/>
                            Option 2
                        </label><br/>
                        <label>
                            <input type='checkbox'/>
                            Option 3
                        </label><br/>
                        <label>
                            <input type='checkbox'/>
                            Option 4
                        </label><br/>
                    </div>
                    <input type='submit' value='Submit'/>
                </form>
            </section>
        </article>
    )
}

export default connect(mapState)(RxSurvey)