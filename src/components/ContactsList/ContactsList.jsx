import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlicer';
import { getFilter } from 'redux/filterSlicer';

import css from './ContactList.module.css';
import ContactsItem from 'components/ContactsItem/ContatsItem';

const getVisibleContacts = (contacts, filter) => {
  const normalizeFilter = filter.toLocaleLowerCase();
  if (filter === ' ') {
    return contacts;
  }
  return contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizeFilter)
  );
};

function ContactsList() {
  const stateContacts = useSelector(getContacts);
  const stateFilter = useSelector(getFilter);

  const visibleEl = getVisibleContacts(stateContacts, stateFilter);

  return (
    <ul className={css.list}>
      {visibleEl.map(({ id, name, number }) => {
        return <ContactsItem key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
}

export default ContactsList;
