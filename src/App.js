import React, { Component } from 'react';
import './App.css';
import { withRouter, Switch, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SiteHeader from './components/SiteHeader';
import { fetchPersistLogin } from './services/Utils';
import { setCbo } from './features/cbo/cboSlice'
import { setPrescribers } from './features/prescribers/PrescribersSlice'
import { connect } from 'react-redux';
import PrescribersList from './features/prescribers/PrescribersList';
import { setPrescriptions } from './features/prescriptions/PrescriptionsSlice';
import FilledPrescritionsList from './features/prescriptions/FilledPrescritionsList';
import { setHcs } from './features/hcs/HcSlice';
import RxSurvey from './components/RxSurvey';

class App extends Component {

  componentDidMount() {
    if(localStorage.token) {
      fetchPersistLogin(localStorage.token)
        .then(this.handleResponse)
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
      return <RxSurvey/>
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
          </Switch>
        </main>
      </div>
    );
  }
}
  

export default connect(state => state)(withRouter(App));
