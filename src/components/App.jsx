import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';
import { ContactList } from './ContactList/ContactList';
import { Container } from './App.styled';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export const App = () => {
  const {isLoading} = useSelector(selectContacts)
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {isLoading && (<Loader/>)}
      <ContactList />
      <ToastContainer autoClose={3000} />
    </Container>
  );
};
