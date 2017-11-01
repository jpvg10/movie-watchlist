import React from 'react';
import axios from 'axios';

//Component requires
import UserForm from '../shared/user-form';

class Register extends React.Component {
	// Custom methods
	onSubmit(email, password) {
		axios
			.post('/auth/register', {
				email: email,
				password: password
			})
			.then(function(response) {
				if(response.status === 200){
					console.log('Successful register');
					localStorage.setItem('successMessage', 'You have successfully signed up. You can now log in');
					this.props.history.push('/login');
				}else{
					console.log('Error');
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
	}

	render() {
		return(
			<div>
				<h1 className="title">Register</h1>
				<UserForm title="Register" onSubmit={this.onSubmit} />
			</div>
		);
	}
};

export default Register;
