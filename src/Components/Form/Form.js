import React, { useState } from "react";
import { connect } from 'react-redux';
import { addContact } from '../../redux/phonebook/phonebook-actions';
import styles from './Form.module.css';

const Form = ({ contacts, addContact }) => {

    const [state, setState] = useState({
        name: '',
        number: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.currentTarget;

        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (contacts.some(contact => contact.name.toLocaleLowerCase() === state.name.toLocaleLowerCase())) {
            alert(`${state.name} is already in contacts.`);
            return;
        }

        addContact({ ...state });

        setState({
            name: '',
            number: '',
        });
    };

    return (

        <form className={styles.form} onSubmit={handleSubmit} >
            <label className={styles.label}>
                Name
                    <input
                    className={styles.input}
                    onChange={handleChange}
                    value={state.name}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required />
            </label>
            <label className={styles.label}>
                Number
                    <input
                    className={styles.input}
                    onChange={handleChange}
                    value={state.number}
                    type="tel"
                    name="number"
                    pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                    title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                    required />
            </label>
            <button className={styles.btn} type="submit">Add contact</button>
        </form>
    )
};

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts.items,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addContact: (data) => {
            dispatch(addContact(data));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);