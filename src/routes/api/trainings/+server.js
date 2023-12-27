import { instance } from '../../../lib/utils/axios';

export async function GET(req, res) {
	try {
		const { data } = await instance.get('https://trainings-audit.internshala.com/');
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
