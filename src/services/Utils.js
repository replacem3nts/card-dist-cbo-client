const BACKEND_CBOS = 'http://localhost:3001/api/v1/cbos'

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