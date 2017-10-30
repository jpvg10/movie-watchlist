import React from 'react';
import axios from 'axios';

//Component requires
import UserForm from '../shared/user-form';

// Authentication module
import Auth from '../../auth';

class Login extends React.Component {
	// Custom methods
	onSubmit(email, password) {
		axios
			.post('/auth/login', {
				email: email,
				password: password
			})
			.then(function(response) {
				if(response.status === 200){
					Auth.authenticateUser(response.data.token);
					this.props.history.push('/');
				}
			}.bind(this))
			.catch(function(error) {
				console.log(error);
			});
	}

	// Component methods
	constructor() {
		super();
		this.onSubmit = this.onSubmit.bind(this);

		let storedMessage = localStorage.getItem('successMessage');
		let successMessage = '';
		if(storedMessage){
			successMessage = storedMessage;
			localStorage.removeItem('successMessage');
		}

		this.state = {
			successMessage: successMessage
		};
	}

	render() {
		return(
			<div>
				<h1 className="title">Login</h1>
				<UserForm message="Login" onSubmit={this.onSubmit} successMessage={this.state.successMessage} />
			</div>
		);
	}
};

export default Login;
