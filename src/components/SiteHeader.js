import React, { useState } from 'react';
import logo from '../logo.svg'
import Switch from "react-switch";

export const SiteHeader = () => {
    let [eng, setEng] = useState(true)

    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Welcome!</h1>
            <Switch
                checked={eng}
                onChange={() => setEng(eng => !eng)}
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