import React from 'react';

//Component requires
import UserForm from '../shared/user-form';

class Login extends React.Component {
	// Custom methods
	onSubmit() {
		console.log('login');
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
