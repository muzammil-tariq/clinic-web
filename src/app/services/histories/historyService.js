import FuseUtils from '@fuse/utils/FuseUtils';
import axios from '../axiosbaseinstance';
/* eslint-disable camelcase */

class JwtService extends FuseUtils.EventEmitter {
	init() {
		this.setInterceptors();
	}

	setInterceptors = () => {
		debugger;
		axios.interceptors.response.use(
			response => {
				return response;
			},
			err => {
				return new Promise((resolve, reject) => {
					if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
						// if you ever get an unauthorized response, logout the user
						this.emit('onAutoLogout', 'Invalid access_token');
						this.setSession(null);
					}
					throw err;
				});
			}
		);
	};

	createHistory = data => {
		return new Promise((resolve, reject) => {
			axios.post('/api/history/create', data).then(response => {
				if (response.data.user) {
					resolve(response.data.user);
				} else {
					reject(response.data.error);
				}
			});
		});
	};

	updateHistoryData = data => {
		return axios.post('/api/history/update', {
			data
		});
	};
}

const instance = new JwtService();

export default instance;
