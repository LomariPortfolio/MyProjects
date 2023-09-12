import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/send-email', formData);
      alert('Email sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      alert('Failed to send email. Please try again later.');
    }
  };

  return (
    <div className="max-w-md mx-auto lg:mt-4 lg:mb-56 p-4 bg-gray-100 rounded-lg smoll:mt-40 smoll:mb-40">
      <h2 className="text-7xl font-semibold mb-7">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="4"
            required
          />
        </div>
        <button className="bg-cyan-950 text-cyan-400 border-cyan-400 group relative overflow-hidden rounded-md border border-b-4 px-4 py-2 font-medium outline-none duration-300 hover:border-b hover:border-t-4 hover:brightness-150 active:opacity-75">
        <a href="#" className="absolute z-50 h-full w-full"></a>
        <span className="bg-cyan-400 shadow-cyan-400 absolute -top-[150%] left-0 inline-flex h-[5px] w-80 rounded-md opacity-50 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] duration-500 group-hover:top-[150%]">
        </span>
        Send Email
      </button>
      </form>
    </div>
  );
};

export default ContactForm;