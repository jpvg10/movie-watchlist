let Auth = {
	authenticateUser: function(token, email){
		localStorage.setItem('token', token);
		localStorage.setItem('email', email);
	},
	isUserAuthenticated: function(){
		return localStorage.getItem('token') !== null;
	},
	deauthenticateUser: function(){
		localStorage.removeItem('token');
		localStorage.removeItem('email');
	},
	getToken: function(){
		return localStorage.getItem('token');
	},
	getEmail: function(){
		return localStorage.getItem('email');
	}
};

export default Auth;
