import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

export default function App() {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}
