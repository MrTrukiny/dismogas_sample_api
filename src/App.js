import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ServiceDetails from './components/services/ServiceDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateService from './components/services/CreateService';

const App = () => {
  return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path='/' component={Dashboard} />
					<Route path='/service/:id' component={ServiceDetails} />
					<Route path='/signin' component={SignIn} />
					<Route path='/signup' component={SignUp} />
					<Route path='/create' component={CreateService} />
				</Switch>
			</div>
		</BrowserRouter>
  );
}

export default App
