import React, { useState } from 'react';
import logo from '../logo.svg'
import Switch from "react-switch";
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeCbo } from '../features/cbo/cboSlice';

let mapState = (state) => {
    return {
        cboName: state.cbo.name
    }
}

let mapDispatch = { removeCbo }

const SiteHeader = ({ cboName, removeCbo }) => {
    const [eng, setEng] = useState(false)
    const history = useHistory()
    const { t } = useTranslation()

    const changeLanguage = lng => {
        i18n.changeLanguage(lng)
    }

    const handleChange = () => {
        setEng(eng => !eng)
        eng ? changeLanguage('en') : changeLanguage('sp')
    }

    const handleLogout = (e) => {
        e.preventDefault()
        removeCbo()
        history.push('/')
    }

    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" onClick={() => {history.push('/')}}/>
            {localStorage.token ?
            <h3>{cboName}</h3>
            :
            <h3>{t('Welcome!')}</h3>
            }
            <div style={{width: '30%'}}>
                <Switch
                    checked={eng}
                    onChange={handleChange}
                    className='react-switch'
                    onColor="#ffffff"
                    onHandleColor="#28377E"
                    offColor="#ffffff"
                    offHandleColor="#28377E"
                    height={30}
                    width={60}
                    uncheckedIcon={
                        <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: 15,
                            fontWeight: 700,
                            color: "#28377E",
                            paddingRight: 2
                        }}
                        >
                        EN
                        </div>
                    }
                    checkedIcon={
                        <div
                        style={{
                            display: "flex",
                            fontWeight: 700,
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: 15,
                            color: "#28377E",
                            paddingRight: 2
                        }}
                        >
                        SP
                        </div>
                    }
                />
                <button onClick={(e) => handleLogout(e)} >Logout</button>
            </div>
        </div>
    )
}

export default connect(mapState, mapDispatch)(SiteHeader)