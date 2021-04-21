import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-actions';
import styles from './Contacts.module.css';

const Contacts = ({ contacts, deleteContact }) => {
    return (
        <ul>
            {contacts.map(contact => (
                <li key={contact.id} className={styles.contact}>
                    <p className={styles.text}>{contact.name}</p>
                    <p className={styles.text}>{contact.number}</p>
                    <button type="button" className={styles.btn} data-id={contact.id} onClick={deleteContact}>
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

const mapStateToProps = (state) => ({
    contacts: state.contacts.items.filter((item) =>
        item.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
    ),
});

const mapDispatchToProps = (dispatch) => {
    return {
        deleteContact: (data) => {
            dispatch(deleteContact(data));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);