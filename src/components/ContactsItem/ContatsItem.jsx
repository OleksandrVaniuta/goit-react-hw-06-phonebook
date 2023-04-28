import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlicer';
import css from './ContactsItem.module.css';

function ContactsItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li key={id} className={css.item}>
      <p className={css.contact}>
        {name}: {number}
      </p>
      <button
        type="button"
        onClick={() => dispatch(removeContact(id))}
        className={css.button}
      >
        delete
      </button>
    </li>
  );
}

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsItem;
