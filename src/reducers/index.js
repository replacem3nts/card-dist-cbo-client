import { combineReducers } from 'redux'
import cboReducer from '../features/cbo/cboSlice'
import prescribersReducer from '../features/prescribers/PrescribersSlice'
import prescriptionsReducer from '../features/prescriptions/PrescriptionsSlice'
import hcsReducer from '../features/hcs/HcSlice'
import covidImpactsReducer from '../features/covidimpacts/CovidImpactsSlice'
import doctorVisitsReducer from '../features/doctorvisits/DoctorVisitsSlice'
import fundUsesReducer from '../features/funduses/FundUsesSlice'

export default combineReducers({
    cbo: cboReducer,
    hcs: hcsReducer,
    prescribers: prescribersReducer,
    prescriptions: prescriptionsReducer,
    covidimpacts: covidImpactsReducer,
    doctorvisits: doctorVisitsReducer,
    funduses: fundUsesReducer
})