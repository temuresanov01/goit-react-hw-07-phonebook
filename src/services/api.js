const BASE_URL = 'https://61f28c8d2219930017f506f8.mockapi.io';

const API_ENDPOINT = 'contacts';

const fetchData = async (API_ENDPOINT, options = {}) => {
  const res = await fetch(`${BASE_URL}/${API_ENDPOINT}`, options);
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

const getData = (endpoint, options) => fetchData(endpoint, options);

const saveItem = (endpoint, item, options = {}) => {
  const finalOptions = {
    method: 'POST',
    body: JSON.stringify(item),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    ...options,
  };
  return fetchData(endpoint, finalOptions);
};

const deleteItem = (endpoint, id, options = {}) =>
  fetchData(`${endpoint}/${id}`, { method: 'DELETE', ...options });

export { getData, saveItem, deleteItem, API_ENDPOINT };
