const { createSlice } = require("@reduxjs/toolkit");

const prescriptionsSlice = createSlice({
    name: 'prescriptions',
    initialState: [],
    reducers: {
        setPrescriptions(state, action) {
            const { prescriptions } = action.payload
            state.push(prescriptions)
        },
        addPrescription(state, action) {
            const { prescription } = action.payload
            state.push(prescription)
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