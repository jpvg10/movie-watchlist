let Auth = {
	authenticateUser: function(token){
		localStorage.setItem('token', token);
	},
	isUserAuthenticated: function(){
		return localStorage.getItem('token') !== null;
	},
	deauthenticateUser: function(){
		localStorage.removeItem('token');
	},
	getToken: function(){
		return localStorage.getItem('token');
	}
};

export default Auth;
