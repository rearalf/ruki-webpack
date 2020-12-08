import { API_RUKI_BACKEND } from '../utils/settings';

export const DeleteWatchedAnime = ({ id_user, mal_id }) => {
	const API = `${API_RUKI_BACKEND}/api/anime/`;
	const myHeaders = new Headers({
		'Content-Type': 'application/json',
		authorization: localStorage.getItem('token'),
	});
	return fetch(API, {
		method: 'DELETE',
		body: JSON.stringify({ id_user, mal_id }),
		headers: myHeaders,
		mode: 'cors',
	})
		.then(res => res.json())
		.catch(error => console.error('Error:', error))
		.then(response => {
			return {
				message: response.message,
				data: response.data,
			};
		});
};
