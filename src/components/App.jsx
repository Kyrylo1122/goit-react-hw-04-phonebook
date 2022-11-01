import { useState, useEffect, lazy, Suspense } from 'react';
import './App.css';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Box } from './Box/Box';
import Title from './Title/Title';
import AddContact from './AddContact/AddContact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Loader/Loader';
import Footer from './Footer/Footer';

const Modal = lazy(() => import('./Modal/Modal'));
export default function App() {
  const [contacts, setContacts] = useState(() => {
    const parsedItems = JSON.parse(localStorage.getItem('contacts'));
    return parsedItems ? parsedItems : [];
  });
  const [filter, setFilter] = useState('');
  const [modal, setModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = e => setFilter(e.currentTarget.value);

  const onSubmitForm = data => {
    const isExist = contacts.map(e => e.name).includes(data.name);
    if (isExist) {
      toast.warn(`The contact ${data.name} is already exist`);

      return;
    }
    setContacts(prevState => [...prevState, data]);
    toast(` ${data.name} added to all contacts`);

    setModal(false);
  };

  const deleteContact = id =>
    setContacts(prevState => prevState.filter(e => e.id !== id));

  const visibleContacts = contacts.filter(e =>
    e.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <main className='main'>
      <Box className="container">
        <ToastContainer />

        <Title />
        <AddContact openModal={() => setModal(true)} />

        <Filter changeFilter={changeFilter} />
        <ContactList contacts={visibleContacts} deleteCon={deleteContact} />
        <Footer />
      </Box>

      {modal && (
        <Suspense fallback={<Loader />}>
          <Modal
            onSubmitForm={onSubmitForm}
            closeModal={() => setModal(false)}
          />
        </Suspense>
      )}
    </main>
  );
}
