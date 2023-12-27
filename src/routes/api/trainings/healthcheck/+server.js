import { instance } from '$lib/utils/axios';

export async function GET(req, res) {
	try {
		const { data, status } = await instance.get('/');
		return new Response('True', {
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (err) {
		console.log(err);
		return new Response(err);
	}
}
