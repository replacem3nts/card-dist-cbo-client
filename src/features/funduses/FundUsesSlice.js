const { createSlice } = require("@reduxjs/toolkit");

const fundUsesSlice = createSlice({
    name: 'funduses',
    initialState: [],
    reducers: {
        setFundUses(state, action) {
            const { funduses } = action.payload
            state.push(...funduses)
        },
        removeFundUses(state) {
            state = []
        }
    }
})

export const { setFundUses, removeFundUses } = fundUsesSlice.actions
export default fundUsesSlice.reducer