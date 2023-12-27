import axios from 'axios';

export const instance = axios.create({
	baseURL: 'https://trainings-audit.internshala.com',
	auth: {
		username: 'admin',
		password: 'hwdhksd#$'
	},
	xsrfHeaderName: 'X-Csrf-Token',
	xsrfCookieName: 'csrf_cookie_name',
	validateStatus: function (status) {
		return Number.isInteger(status) && status != 401;
	}
});
