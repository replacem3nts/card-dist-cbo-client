const BACKEND_CBOS = 'http://localhost:3001/api/v1/cbos'
const BACKEND_PRESCRIBERS = 'http://localhost:3001/api/v1/prescribers'
const BACKEND_RX = 'http://localhost:3001/api/v1/rxs'

export const fetchLogin = (userInfo) => {
    return fetch(BACKEND_CBOS+'/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userInfo)})
        .then(r => r.json())
}

export const fetchPersistLogin = (token) => {
    return fetch(BACKEND_CBOS+'/persist_login', {
        headers: {'Authorization': `Bearer ${token}`}
    })
        .then(r => r.json())
}

export const fetchUpdatePrescriber = (prescriber, token) => {
    return fetch(BACKEND_PRESCRIBERS+`/${prescriber.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({...prescriber})
    })
        .then(r => r.json())
}

export const fetchAddPrescriber = (prescriber, token) => {
    return fetch(BACKEND_PRESCRIBERS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({...prescriber})
    })
        .then(r => r.json())
}

export const fetchDeletePrescriber = (id, token) => {
    return fetch(BACKEND_PRESCRIBERS+`/${id}`, {
        method: 'DELETE',
        headers: {'Authorization': `Bearer ${token}`}
    })
        .then(r => r.json())
    }
    
export const fetchConstants = () => {
        return fetch(BACKEND_CBOS+`/constants`)
            .then(r => r.json())

}

export const fetchFirstRxUpdate = (rx, survey, token) => {
    return fetch(BACKEND_RX+'/cbos', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({rx, survey})
    })
        .then(r => r.json())
}