const { createSlice } = require("@reduxjs/toolkit");

const doctorVisitsSlice = createSlice({
    name: 'doctorvisits',
    initialState: [],
    reducers: {
        setDoctorVisits(state, action) {
            const { doctorvisits } = action.payload
            state.push(...doctorvisits)
        },
        removeDoctorVisits(state) {
            state = []
        }
    }
})

export const { setDoctorVisits, removeDoctorVisits } = doctorVisitsSlice.actions
export default doctorVisitsSlice.reducer