import React, { PropTypes } from 'react';

const ContactItem = ({ name, phoneNumber }) => (
  <div className="contact-item">
    <img 
      style={{ float: 'left' }} 
      src="http://lorempixel.com/60/60/food" 
    />
    <div style={{ display: 'inline-block', marginLeft: 20 }}>
      <div className="contact-item__name">{name}</div>
      <div className="contact-item__phone-number">
        {phoneNumber}
      </div>
    </div>
    <div style={{ clear: 'both' }} />
  </div>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
};

export default ContactItem;