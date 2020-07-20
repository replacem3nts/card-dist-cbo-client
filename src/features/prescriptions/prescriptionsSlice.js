const { createSlice } = require("@reduxjs/toolkit");

const prescriptionsSlice = createSlice({
    name: 'prescriptions',
    initialState: [],
    reducers: {
        setPrescriptions(state, action) {
            const { prescriptions } = action.payload
            state.push(prescriptions)
        },
        updatePrescription(state, action) {
            const { id, prescription } = action.payload
            let toUpdateInd = state.findIndex(prescription => prescription.id === id)
            state.splice(toUpdateInd, 1, prescription)
        }
    }
})

export const { setPrescriptions, addPrescription, updatePrescription } = prescriptionsSlice.actions
export default prescriptionsSlice.reducer