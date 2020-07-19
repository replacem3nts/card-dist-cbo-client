import { combineReducers } from 'redux'
import cboReducer from '../features/cbo/cboSlice'
import prescribersReducer from '../features/prescribers/prescribersSlice'
import prescriptionsReducer from '../features/prescriptions/prescriptionsSlice'

export default combineReducers({
    cbo: cboReducer,
    prescribers: prescribersReducer,
    prescriptions: prescriptionsReducer
})

// /Users/northernspy/Development/4CT/card-dist-cbo-client/src/reducers
// /Users/northernspy/Development/4CT/card-dist-cbo-client/src/features/prescribers