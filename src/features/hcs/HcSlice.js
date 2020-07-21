const { createSlice } = require("@reduxjs/toolkit");

const hcsSlice = createSlice({
    name: 'hcs',
    initialState: [],
    reducers: {
        setHcs(state, action) {
            const { allhcs } = action.payload
            state.push(...allhcs)
        },
        removeHcs(state) {
            localStorage.clear()
            state = []
        }
    }
})

export const { setHcs, removeHcs } = hcsSlice.actions
export default hcsSlice.reducer