import React, { useState } from 'react'
import { connect } from 'react-redux'

let mapState = (state) => {
    return {prescribers: state.prescribers}
}

const RxSurvey = ({ prescribers }) => {
    const [state, setstate] = useState('')

    const prescriberArr = prescribers.map(presc => {
    return <option key={presc.id} value={presc.id}>{presc.firstname} {presc.lastname}</option>
    })

    return (
        <article className='survey-container'>
            <header>
                <h2>4-CT Card Prescription Request</h2>
                <p>If you are an approved prescriber, fill out this form to write a "prescription" for an individual to receive cash assistance.</p> 
            </header>
            <section>
                <form>
                    <label>
                        Please select the CBO caseworker who is writing the prescription:
                        <select>
                            {prescriberArr}
                        </select>
                    </label>
                </form>
            </section>
            <section>
                <form>
                    <label>
                        Applicant Phone Number:
                        <input type='tel'/>
                    </label><br/>
                    <label>
                        Applicant Age:
                        <input type='number'/>
                    </label><br/>
                    <label>
                        Applicant Gender:
                        <select>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Prefer Not To Say</option>
                        </select>
                    </label><br/>
                    <label>
                        What is the size of the household?
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11+</option>
                        </select>
                    </label><br/>
                    <label>
                        How many families ive in the household?
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </label><br/>
                    <label>
                        What is the zip code for the Primary Applicant's household?
                        <input type='text'/>
                    </label><br/>
                    <label>
                        Does the applicant live with an immediate family member (spouse or partner) who has a  different immigration status?
                        <select>
                            <option>Yes</option>
                            <option>No</option>
                            <option>Maybe</option>
                        </select>
                    </label><br/>
                    <label>
                        How will the Primary Applicant/household use the money?
                        <select>
                            <option>Yes</option>
                            <option>No</option>
                            <option>Maybe</option>
                        </select>
                    </label><br/>
                    <label>
                        What is the preferred language of the applicant??
                        <select>
                            <option>English</option>
                            <option>Spanish</option>
                            <option>Portuguese</option>
                            <option>French</option>
                            <option>Arabic</option>
                        </select>
                    </label><br/>
                    <label>
                        Has anyone in the household experienced any of the following impacts of COVID-19?
                        <select>
                            <option>English</option>
                            <option>Spanish</option>
                            <option>Portuguese</option>
                            <option>French</option>
                            <option>Arabic</option>
                        </select>
                    </label><br/>
                    Where do you/your family most often see a doctor now?<br/>
                    <label>
                        Option 1
                        <input type='checkbox'/>
                    </label><br/>
                    <label>
                        Option 2
                        <input type='checkbox'/>
                    </label><br/>
                    <label>
                        Option 3
                        <input type='checkbox'/>
                    </label><br/>
                    <label>
                        Option 4
                        <input type='checkbox'/>
                    </label><br/>
                </form>
            </section>
        </article>
    )
}

export default connect(mapState)(RxSurvey)