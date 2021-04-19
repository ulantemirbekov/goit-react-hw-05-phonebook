import PropTypes from 'prop-types';
import styles from './Contacts.module.css';

const Contacts = ({ contacts, deleteContact }) => {
    return (
        <ul>
            {contacts.map(contact => (
                <li key={contact.id} className={styles.contact}>
                    <p className={styles.text}>{contact.name}</p>
                    <p className={styles.text}>{contact.number}</p>
                    <button type="button" className={styles.btn} onClick={() => deleteContact(contact.id)}>
                        Delete
                     </button>
                </li>
            ))}
        </ul>
    )
};

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default Contacts;