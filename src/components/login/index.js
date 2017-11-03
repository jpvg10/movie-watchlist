import React from 'react';
import axios from 'axios';

//Component requires
import UserForm from '../shared/user-form';

// Authentication module
import Auth from '../../auth';

class Login extends React.Component {
	// Custom methods
	onSubmit(email, password) {
		let options = {
			method: 'post',
			url: '/auth/login',
			data: { 
				email: email,
				password: password 
			} 
		};
		axios.request(options)
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
		let message = '';
		if(storedMessage){
			message = storedMessage;
			localStorage.removeItem('successMessage');
		}

		this.state = {
			message: message,
			error: false
		};
	}

	render() {
		return(
			<div>
				<h1 className="title">Log in</h1>
				<UserForm title="Log in" onSubmit={this.onSubmit} message={this.state.message} error={this.state.false} />
			</div>
		);
	}
};

export default Login;
