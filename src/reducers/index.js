import { combineReducers } from 'redux'
import cboReducer from '../features/cbo/cboSlice'
import prescribersReducer from '../features/prescribers/PrescribersSlice'
import prescriptionsReducer from '../features/prescriptions/PrescriptionsSlice'
import hcsReducer from '../features/hcs/HcSlice'

export default combineReducers({
    cbo: cboReducer,
    hcs: hcsReducer,
    prescribers: prescribersReducer,
    prescriptions: prescriptionsReducer
})