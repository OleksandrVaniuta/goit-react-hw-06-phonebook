import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlicer';
import { getContacts } from 'redux/contactsSlicer';

import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const stateContacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const onclone = stateContacts.find(contact => contact.name === name);

    const contact = {
      name: name,
      number: number,
    };
    contact.id = nanoid();

    if (onclone) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(contact));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.contactName}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={e => setName(e.currentTarget.value)}
          className={css.contactNameInput}
        />
      </label>
      <label className={css.contactTel}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={e => setNumber(e.currentTarget.value)}
          className={css.contactTelInput}
        />
      </label>
      <button type="submit" className={css.createBtn}>
        Add contact
      </button>
    </form>
  );
}
