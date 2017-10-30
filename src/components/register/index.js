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
					sessionStorage.setItem('successMessage', true);
					//this.context.router.replace('/login');
				}else{
					console.log('Error');
				}
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
				<h1 className="title">Register</h1>
				<UserForm message="Register" onSubmit={this.onSubmit} />
			</div>
		);
	}
};

export default Register;
