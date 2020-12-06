export const WatchedAnime = ({ id_user, mal_id }) => {
	const API = `${process.env.API_RUKI_BACKEND}/api/anime/watched`;
	const myHeaders = new Headers({
		'Content-Type': 'application/json',
		authorization: localStorage.getItem('token'),
	});
	return fetch(API, {
		method: 'POST',
		body: JSON.stringify({ id_user, mal_id }),
		headers: myHeaders,
		mode: 'cors',
	})
		.then(res => res.json())
		.catch(error => console.error('Error:', error))
		.then(response => {
			return { found: response.found, message: response.message };
		});
};