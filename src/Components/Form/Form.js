import { Component } from 'react';
// import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import styles from './Form.module.css';

class Form extends Component {

    // static defaultProps = {
    //     //
    // };

    // static propTypes = {
    //     //
    // };

    state = {
        name: '',
        number: '',
    };

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { name, number } = this.state;
        const contact = { id: uuid(), name, number };
        this.props.addContact(contact);

        this.setState({
            name: '',
            number: ''
        });
    };


    render() {
        const { name, number } = this.state;

        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <label className={styles.label}>
                    Name
                        <input
                        className={styles.input}
                        onChange={this.handleChange}
                        value={name}
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
                        onChange={this.handleChange}
                        value={number}
                        type="tel"
                        name="number"
                        pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                        title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                        required />
                </label>
                <button className={styles.btn} type="submit">Add contact</button>
            </form>
        );
    };
};

export default Form;