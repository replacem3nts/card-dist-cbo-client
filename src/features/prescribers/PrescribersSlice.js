const { createSlice } = require("@reduxjs/toolkit");

const prescribersSlice = createSlice({
    name: 'prescribers',
    initialState: [],
    reducers: {
        setPrescribers(state, action) {
            const { prescribers } = action.payload
            state.push(...prescribers)
        },
        addPrescriber(state, action) {
            const { prescriber } = action.payload
            state.push(prescriber)
        },
        updatePrescriber(state, action) {
            const { prescriber } = action.payload
            let toUpdateInd = state.findIndex(pres => pres.id === prescriber.id)
            state.splice(toUpdateInd, 1, prescriber)
        },
        deletePrescriber(state, action) {
            const { id } = action.payload
            return state.filter(prescriber => prescriber.id !== id)
        }
    }
})

export const { setPrescribers, addPrescriber, updatePrescriber, deletePrescriber } = prescribersSlice.actions
export default prescribersSlice.reducer