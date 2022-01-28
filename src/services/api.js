import axios from 'axios';

axios.defaults.baseURL = 'https://61bf5fcbb25c3a00173f4e18.mockapi.io';

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
