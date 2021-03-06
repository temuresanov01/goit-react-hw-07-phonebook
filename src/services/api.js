import axios from 'axios';

axios.defaults.baseURL = 'https://61f28c8d2219930017f506f8.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContacts(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
