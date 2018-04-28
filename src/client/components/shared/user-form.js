import React from 'react';

class UserForm extends React.PureComponent {
	// Custom methods
	onChangeEmail(e) {
		this.setState({
			email: e.target.value
		});
	}

	onChangePassword(e) {
		this.setState({
			password: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(this.state.email, this.state.password);
	}

	// Component methods
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render() {
		let notification;
		if(this.props.message){
			notification = 
			<div className={"notification " + (this.props.success ? "is-success" : "is-danger")}>
				<span>{this.props.message}</span>					
			</div>
		}

		return(
			<div>
				{notification}

				<form onSubmit={this.handleSubmit}>
				 	<div className="field">
						<label className="label">Email</label>
						<div className="control has-icons-left">
							<input className="input" type="text" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail} />
							<span className="icon is-small is-left">
								<i className="fa fa-envelope"></i>
							</span>
						</div>
					</div>
					<div className="field">
						<label className="label">Password</label>
						<div className="control has-icons-left">
							<input className="input" type="password" placeholder="Password" value={this.state.password} onChange={this.onChangePassword} />
							<span className="icon is-small is-left">
								<i className="fa fa-lock"></i>
							</span>
						</div>
					</div>
					<div className="field">
						<div className="control">
							<input className="button is-info" type="submit" value={this.props.title} />
						</div>
					</div>
				</form>
			</div>
		);
	}
};

export default UserForm;
