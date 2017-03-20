import React, { Component, PropTypes } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

class App extends Component {
  state = {
    contacts: [
      { id: 1, name: 'Handry', phoneNumber: '085112233' },
      { id: 2, name: 'Adi', phoneNumber: '085112244' },
    ],
  };

  /**
   * Add new contact
   * @param {String} name
   * @param {String} phoneNumber
   */
  addContact = (name, phoneNumber) => {
    const { contacts } = this.state;
    const contactCount = contacts.length;
    const nextId = contacts[contactCount - 1].id + 1;

    const newContact = { id: nextId, name, phoneNumber };
    
    this.setState({
      contacts: contacts.concat(newContact),
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <div className="contact-app">
        <h1>Contact App</h1>
        <ContactForm onContactSubmit={this.addContact} />
        <ContactList entries={contacts} />
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
