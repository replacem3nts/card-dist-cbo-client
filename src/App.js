import React, { Component } from 'react';
import './App.css';
import { withRouter, Switch, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Home from './containers/Home';
import { SiteHeader } from './components/SiteHeader';
import { fetchPersistLogin } from './services/Utils';
import { setCbo } from './features/cbo/cboSlice'
import { setPrescribers } from './features/prescribers/prescribersSlice'
import { connect } from 'react-redux';
import PrescribersList from './features/prescribers/PrescribersList';

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
    } else {
        localStorage.clear()
      }
    }

  renderHome = () => {
    if(localStorage.token) {
      return <Home/>
    } else {
      return <LoginForm/>
    }
  }

  renderPrescribers = () => {
    if(localStorage.token) {
      return <PrescribersList/>
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
          </Switch>
        </main>
      </div>
    );
  }
}
  

export default connect(state => state)(withRouter(App));
