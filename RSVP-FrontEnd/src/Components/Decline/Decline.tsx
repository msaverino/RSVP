import React from "react";
import { useState } from "react";

const RSVPNo = ({ togglePopup }: { togglePopup: () => void }) => {
  const [formData, setFormData] = useState({
    familyName: "",
    email: "",
    phone: "",
    guests: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    togglePopup();
  };
  return (
    <div className="overlay">
      <div className="popup">
        <h2>RSVP No</h2>
        <button className="close" onClick={togglePopup}>
          &times;
        </button>
        <form className="rsvp-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="familyName">Name:</label>
            <input
              type="text"
              id="familyName"
              name="familyName"
              value={formData.familyName}
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
          <button className="Submit" type="submit">
            Submit
          </button>
          <button className="Cancel" onClick={togglePopup}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default RSVPNo;
