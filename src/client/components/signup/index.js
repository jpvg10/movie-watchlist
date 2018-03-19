import React from 'react';
import { signup } from '../../api/authentication';

//Component requires
import UserForm from '../shared/user-form';

class Register extends React.Component {
	// Custom methods
	onSubmit(email, password) {
		let re = /\S+@\S+\.\S+/;
		if(re.test(email)){
			signup({ email, password })
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
		}else{
			this.setState({
				message: 'Please use a valid email address',
				success: false
			});
		}
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
				<div className="content is-small">
					<span>You can use a fake email, but shh, don't tell anyone</span>
				</div>
				<UserForm title="Sign up" onSubmit={this.onSubmit} message={this.state.message} success={this.state.success} />
			</div>
		);
	}
};

export default Register;