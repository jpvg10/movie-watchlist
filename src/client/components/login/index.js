import React from 'react';
import { login } from '../../api/authentication';

//Component requires
import UserForm from '../shared/user-form';

// Authentication module
import Auth from '../../auth';

class Login extends React.Component {
	// Custom methods
	onSubmit(email, password) {
		login({ email, password })
			.then((response) => {
				Auth.authenticateUser(response.data.token, response.data.user.email);
				this.props.history.push('/');
			})
			.catch((error) => {
				this.setState({
					message: error.response.data.message,
					success: error.response.data.success
				});
			});
	}

	// Component methods
	constructor(props) {
		super(props);

		let storedMessage = localStorage.getItem('successMessage');
		let message = '';
		if(storedMessage){
			message = storedMessage;
			localStorage.removeItem('successMessage');
		}

		this.state = {
			message: message,
			success: true
		};

		this.onSubmit = this.onSubmit.bind(this);
	}

	render() {
		return(
			<div>
				<h1 className="title">Log in</h1>
				<UserForm title="Log in" onSubmit={this.onSubmit} message={this.state.message} success={this.state.success} />
			</div>
		);
	}
};

export default Login;
