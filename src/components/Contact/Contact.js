import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

  // Replace with your actual EmailJS service ID, template ID, and user ID
  const serviceID = 'service_6r8n89s';
  const templateID = 'template_i08omsr';
  const userID = 'oT2jZq2doJwJePdmH';

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);  // Set to true while sending email

    const templateParams = {
      name,
      email,
      phone,
      message,
    };

    // Send email using EmailJS service
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((result) => {
        if (result.status === 200) {
          setSuccessMessage('Your message has been sent successfully!');
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
          setErrorMessage('');
        } else {
          setErrorMessage('Failed to send the message. Please try again.');
          setSuccessMessage('');
        }
      })
      .catch((error) => {
        setErrorMessage('Error sending the message. Please try again.');
        setSuccessMessage('');
      })
      .finally(() => {
        setIsSubmitting(false);  // Reset form submission state
      });
  };

  return (
    <div id="connect" className="contact">
      <h1 className="skills-header text-center display-4 mb-4">Let's Connect</h1>
      <div className='contact-section' >
      <div className="contact-info">
      <h2><FaEnvelope className="contact-icon" /> Get in Touch</h2>
      <p><FaPhoneAlt className="contact-icon" /> Feel free to send us a message. We'd love to hear from you!</p>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" /> {/* Email Icon */}
          <a href="mailto:your-email@example.com" className="contact-link">
            anushkasrivastava083@gmail.com
          </a>
        </div>
    </div>
    </div>
      <form onSubmit={handleSubmit} className='contact-form-container'>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Description of Work Required:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}
        {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
        <button type="submit" disabled={isSubmitting} className="submit-button">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      </div>
    </div>
  );
};

export default Contact;
