import React from 'react';

const ContactForm = ({ onContactSubmit }) => (
  <form onSubmit={(event) => {
      event.preventDefault(); // 
      const { target } = event;

      const name = target.name.value;
      const phoneNumber = target.phoneNumber.value;

      // alert(name  + '-' + phoneNumber);
      onContactSubmit(name, phoneNumber);
      target.reset();
    }}>
    <div>
      <label htmlFor="name">Name</label>
      <input name="name" id="name" type="text" />
    </div>
    <div>
      <label htmlFor="phoneNumber">Phone Number</label>
      <input name="phoneNumber" id="phoneNumber" type="text" />
    </div>
    <input type="submit" value="Add" />
  </form>
);

export default ContactForm;