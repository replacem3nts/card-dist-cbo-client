import React, { useState } from 'react';
import logo from '../logo.svg'
import Switch from "react-switch";
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

export const SiteHeader = () => {
    let [eng, setEng] = useState(false)
    const { t } = useTranslation()

    const changeLanguage = lng => {
        i18n.changeLanguage(lng)
    }

    const handleChange = () => {
        setEng(eng => !eng)
        eng ? changeLanguage('en') : changeLanguage('sp')
    }

    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>{t('Welcome!')}</h1>
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
                      SP
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
                      EN
                    </div>
                  }
            />
            <div style={{width: '30%'}}></div>
        </div>
    )
}