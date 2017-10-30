import React from 'react';
import axios from 'axios';

//Component requires
import UserForm from '../shared/user-form';

class Login extends React.Component {
	// Custom methods
	onSubmit(email, password) {
		axios
			.post('/auth/login', {
				email: email,
				password: password
			})
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	// Component methods
	constructor() {
		super();
		this.onSubmit = this.onSubmit.bind(this);
	}

	render() {
		return(
			<div>
				<h1 className="title">Login</h1>
				<UserForm message="Login" onSubmit={this.onSubmit} />
			</div>
		);
	}
};

export default Login;
