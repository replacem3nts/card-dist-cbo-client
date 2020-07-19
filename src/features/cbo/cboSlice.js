const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    id: '',
    name: ''
}

const cboSlice = createSlice({
    name: 'cbo',
    initialState,
    reducers: {
        setCbo(state, action) {
            const { id, name, token } = action.payload
            localStorage.token = token
            state.id = id
            state.name = name
        },
        removeCbo(state) {
            localStorage.clear()
            state = initialState
        }
    }
})

export const { setCbo } = cboSlice.actions
export default cboSlice.reducer