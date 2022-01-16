import axios from 'axios';
const baseInstance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL
});

baseInstance.defaults.headers.common['Accept'] = 'application/json';
baseInstance.defaults.headers.common['Content-Type'] = 'application/json';
baseInstance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

baseInstance.interceptors.response.use(
	res => res.data,
	err => {
		debugger;
		if (err?.response?.status === 401) {
			localStorage.removeItem('token');
			if (err.config.url !== 'admin/auth/login' && err.config.url !== 'admin/auth/forgot-password') {
				window.location.reload();
			}
		}
		throw err;
	}
);

export default baseInstance;

// import axios from 'axios';
// const qs = require('qs');

// const http = axios.create({
// 	// baseURL: process.env.REACT_APP_BASE_URL,
// 	baseURL: 'http://localhost:5000/',
// 	timeout: 30000,
// 	paramsSerializer: function (params) {
// 		return qs.stringify(params, {
// 			encode: false
// 		});
// 	}
// });

// http.interceptors.request.use(
// 	function (config) {
// 		config.headers.common['Content-Type'] = 'application/json';
// 		config.headers.common['Access-Control-Allow-Origin'] = '*';
// 		return config;
// 	},
// 	function (error) {
// 		return Promise.reject(error);
// 	}
// );

// http.interceptors.response.use(
// 	response => {
// 		return response;
// 	},
// 	error => {
// 		if (error.message === 'Network Error') {
// 			alert(error.message);
// 			return Promise.reject(error);
// 		}

// 		if (error.response.data.error.message === 'Login failed!') {
// 			return error.response;
// 		}

// 		if (
// 			!!error.response &&
// 			!!error.response.data.error &&
// 			!!error.response.data.error.message &&
// 			error.response.data.error.details
// 		) {
// 			alert(error.response.data.error.message);
// 			return error.response;
// 		} else if (
// 			!!error.response &&
// 			!!error.response.data.error &&
// 			error.response.data.error.message === 'Current user did not login to the application!'
// 		) {
// 		} else if (!!error.response && !!error.response.data.error && !!error.response.data.error.message) {
// 			return error.response;
// 		} else if (!error.response) {
// 			alert('Unknown Error');
// 		}

// 		setTimeout(() => {}, 1000);

// 		return Promise.reject(error);
// 	}
// );

// export default http;
