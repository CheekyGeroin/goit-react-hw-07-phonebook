import axios from 'axios';

axios.defaults.baseURL = 'https://635687219243cf412f8703de.mockapi.io/api/v1/';

export async function fetchAllContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContactByName(name, number) {
  const newContact = { name, phone: number };
  const { data } = await axios.post(`/contacts`, newContact);
  return data;
}

export async function deleteContactById(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
