import React, { useState } from 'react'
import { toast } from 'react-toastify';
import './Attending.css'

  const Attending = ({ togglePopup }: { togglePopup: () => void }) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    numberOfGuests: 0,
    willAttend: true
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const notifySuccess = () => toast.success("RSVP Response Received.", {
    theme: "colored"
  });

  const notifyFailure = () => toast.error("Something went wrong.", {
    theme: "colored"
  });

  const handleSubmit = (e: React.FormEvent) => {
    togglePopup();
  }

  return (
    <div className="overlay">
      <div className="popup">
        <h2>RSVP Yes</h2>
        <button className="close" onClick={togglePopup}>
          &times;
        </button>
        <form className="rsvp-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="numberOfGuests">Number of numberOfGuests:</label>
            <input
              type="number"
              id="numberOfGuests"
              name="numberOfGuests"
              /* convert to int */
              value={parseInt(formData.numberOfGuests.toString())}
              onChange={handleChange}
              required
            />
          </div>
          <button className="Submit" type="submit">
            Submit
          </button>
          <button className="Cancel" onClick={togglePopup}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  )
}

export default Attending