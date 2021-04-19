import { Component } from 'react';
// import PropTypes from 'prop-types';
import Section from './Components/Section/Section';
import Form from './Components/Form/Form';
import Contacts from './Components/Contacts/Contacts';
import Filter from './Components/Filter/Filter';


class App extends Component {

  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: '',
  };

  componentDidMount() {

    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts })
    }
  };

  componentDidUpdate(prevProps, prevState) {

    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    };
  };

  addContact = (newContact) => {

    const { contacts } = this.state;

    if (contacts.some(contact => contact.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase())) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [newContact, ...prevState.contacts],
      };
    });
  };

  handleChange = event => {

    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleFilter = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));
  };

  deleteContact = contactId => {

    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {

    const { filter } = this.state;
    const filteredContacts = this.handleFilter();

    return (
      <>
        <Section title={"Phonebook"} >
          <Form addContact={this.addContact} />
        </Section>

        <Section title={"Contacts"} >
          <Filter onChange={this.handleChange} filter={filter} />
          <Contacts contacts={filteredContacts} deleteContact={this.deleteContact} />
        </Section >

      </>
    )
  }
};

export default App;