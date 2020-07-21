import { combineReducers } from 'redux'
import cboReducer from '../features/cbo/cboSlice'
import prescribersReducer from '../features/prescribers/PrescribersSlice'
import prescriptionsReducer from '../features/prescriptions/PrescriptionsSlice'

export default combineReducers({
    cbo: cboReducer,
    prescribers: prescribersReducer,
    prescriptions: prescriptionsReducer
})