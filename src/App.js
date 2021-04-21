import { connect } from 'react-redux';
import Section from './Components/Section/Section';
import Form from './Components/Form/Form';
import Contacts from './Components/Contacts/Contacts';
import Filter from './Components/Filter/Filter';

const App = () => {
  return (
    <>
      <Section title={"Phonebook"} >
        <Form />
      </Section>

      <Section title={"Contacts"} >
        <Filter />
        <Contacts />
      </Section >
    </>
  );
};

const mapStateToProps = (state) => {
  return { contacts: state.contacts.items };
};

export default connect(mapStateToProps)(App);
