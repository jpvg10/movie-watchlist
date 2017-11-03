import React from 'react';
import axios from 'axios';

//Component requires
import UserForm from '../shared/user-form';

class Register extends React.Component {
	// Custom methods
	onSubmit(email, password) {
		let options = {
			method: 'post',
			url: '/auth/signup',
			data: { 
				email: email,
				password: password 
			} 
		};
		axios.request(options)
			.then(function(response){				
				localStorage.setItem('successMessage', 'You have successfully signed up. You can now log in');
				this.props.history.push('/login');				
			}.bind(this))
			.catch(function(error) {
				this.setState({
					message: error.response.data.message,
					success: error.response.data.success
				});
			}.bind(this));
	}

	// Component methods
	constructor() {
		super();
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			message: '',
			success: false
		};
	}

	render() {
		return(
			<div>
				<h1 className="title">Sign up</h1>
				<UserForm title="Sign up" onSubmit={this.onSubmit} message={this.state.message} error={this.state.success} />
			</div>
		);
	}
};

export default Register;
