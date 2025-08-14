export const stocksOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
		'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST
	}
};

export const STOCKS_URL = process.env.REACT_APP_STOCKS_URL;
export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
