import React, { PropTypes } from 'react';
import ContactItem from './ContactItem';

const ContactList = ({ entries }) => (
  <div className="contact-list">
    {entries.map((contact, index) => (
      <ContactItem 
        key={index} 
        name={contact.name} 
        phoneNumber={contact.phoneNumber} 
      />
    ))}
  </div>
);

const { shape, arrayOf, number, string } = PropTypes;

ContactList.propTypes = {
  entries: arrayOf(shape({
    id: number,
    name: string,
    phoneNumber: string,
  })).isRequired,
};

// ContactList.propTypes = {
//   entries: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number,
//     name: PropTypes.string,
//     phoneNumber: PropTypes.string,
//   })).isRequired,
// };

export default ContactList;