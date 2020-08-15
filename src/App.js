import React, { Component } from 'react';
import './App.css';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginForm from './components/LoginForm';
import SiteHeader from './components/SiteHeader';
import { fetchPersistLogin, fetchConstants } from './services/Utils';
import { setCbo } from './features/cbo/cboSlice'
import { setPrescribers } from './features/prescribers/PrescribersSlice'
import PrescribersList from './features/prescribers/PrescribersList';
import { setPrescriptions } from './features/prescriptions/PrescriptionsSlice';
import FilledPrescritionsList from './features/prescriptions/FilledPrescritionsList';
import { setHcs } from './features/hcs/HcSlice';
import PrescriptionForm from './features/prescriptions/PrescriptionForm';
import { setCovidImpacts } from './features/covidimpacts/CovidImpactsSlice';
import { setDoctorVisits } from './features/doctorvisits/DoctorVisitsSlice';
import { setFundUses } from './features/funduses/FundUsesSlice';
import EditPrescription from './features/prescriptions/EditPrescription';

class App extends Component {

  componentDidMount() {
    if(localStorage.token) {
      fetchPersistLogin(localStorage.token)
        .then(this.handleResponse)
      fetchConstants()
        .then(response => {
          this.props.dispatch(setCovidImpacts(response))
          this.props.dispatch(setDoctorVisits(response))
          this.props.dispatch(setFundUses(response))
        })
    } else {
      this.props.history.push('/')
    }
  }
        
  handleResponse = (response) => {
    if(!response.message) {
      let {id, name} = response.cbo
      let {token} = response
      this.props.dispatch(setCbo({id, name, token}))
      this.props.dispatch(setPrescribers(response.cbo))
      this.props.dispatch(setPrescriptions(response.cbo))
      this.props.dispatch(setHcs(response.cbo))
    } else {
        localStorage.clear()
      }
    }

  renderHome = () => {
    if(localStorage.token) {
      return <FilledPrescritionsList/>
    } else {
      return <LoginForm/>
    }
  }

  renderPrescribers = () => {
    if(localStorage.token) {
      return <PrescribersList/>
    } 
  }
  
  renderFillRx = () => {
    if(localStorage.token) {
      return <PrescriptionForm/>
    } 
  }
  
  renderRx = (routerProps) => {
    let {slug} = routerProps.match.params
    let foundRx = this.props.prescriptions.find(rx => rx.id === parseInt(slug, 10))
    if(foundRx && localStorage.token) {
      return <EditPrescription prescription={foundRx}/>
    } else {
     this.props.history.push('/') 
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SiteHeader/>
          <hr/>
        </header>
        <main className="App-main">
          <Switch>
            <Route path='/' exact render={this.renderHome}/>
            <Route path='/prescribers' exact render={this.renderPrescribers}/>
            <Route path='/fillrx' exact render={this.renderFillRx}/>
            <Route path='/rx/:slug' exact render={this.renderRx}/>
          </Switch>
        </main>
      </div>
    );
  }
}
  

export default connect(state => state)(withRouter(App));
