const { createSlice } = require("@reduxjs/toolkit");

const prescriptionsSlice = createSlice({
    name: 'prescriptions',
    initialState: [],
    reducers: {
        setPrescriptions(state, action) {
            const { rxs } = action.payload
            state.push(...rxs)
        },
        updatePrescription(state, action) {
            const { id, prescription } = action.payload
            let toUpdateInd = state.findIndex(prescription => prescription.id === id)
            state.splice(toUpdateInd, 1, prescription)
        }
    }
})

export const { setPrescriptions, updatePrescription } = prescriptionsSlice.actions
export default prescriptionsSlice.reducer