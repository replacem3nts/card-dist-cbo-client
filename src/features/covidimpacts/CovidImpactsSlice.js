const { createSlice } = require("@reduxjs/toolkit");

const covidImpactsSlice = createSlice({
    name: 'covidimpacts',
    initialState: [],
    reducers: {
        setCovidImpacts(state, action) {
            const { covidimpacts } = action.payload
            // let convertedToInts = covidimpacts.map(ci => {
            //     return {
            //         id: ci.id.to_s,
            //         kind: kind
            //     }
            // })
            state.push(...covidimpacts)
        },
        removeCovidImpacts(state) {
            state = []
        }
    }
})

export const { setCovidImpacts, removeCovidImpacts } = covidImpactsSlice.actions
export default covidImpactsSlice.reducer