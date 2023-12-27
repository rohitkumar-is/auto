import axios from 'axios';
import { randomHexString } from '../../../../lib/utils/randomvalue';

export async function GET(req, res) {
	try {
		const { data, status } = await axios.post({
			baseURL: 'https://trainings-audit.internshala.com/login/verify_ajax/user/',
			headers: {
				'X-Csrf-Token': randomHexString,
				Cookies: 'csrf_cookie_name=' + randomHexString
			},
			data: {
				username: 'root@rka.li',
				password: '123456'
			}
		});
		return new Response(JSON.stringify(data), {
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (err) {
		console.log(err);
		return new Response(err);
	}
}
