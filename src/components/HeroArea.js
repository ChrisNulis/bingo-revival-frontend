import React, { useState } from 'react';

const HeroArea = ({ addDog }) => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    age: '',
    breed: '',
    human: '',
    zipcode: '',
    favGames: [],
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    if (id === "favGames") {
      setFormData(prevState => ({
        ...prevState,
        favGames: value.split(',')
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [id]: value
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addDog(formData);
    showForm(); // Hide the form after submission
  };

  const showForm = () => {
    const addForm = document.querySelector('.addForm');
    addForm.classList.toggle('visible');
  };

  return (
    <div className="heroarea-container" id="heroarea-container">
      <div className="welcome-text">
        <h1>Welcome to bingo!</h1>
        <button onClick={showForm}>add your bff</button>
      </div>
      <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label><br />
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="image">Image:</label><br />
        <input
          type="text"
          id="image"
          value={formData.image}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="age">Age:</label><br />
        <input
          type="text"
          id="age"
          value={formData.age}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="breed">Breed:</label><br />
        <input
          type="text"
          id="breed"
          value={formData.breed}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="human">Human:</label><br />
        <input
          type="text"
          id="human"
          value={formData.human}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="zipcode">Zipcode:</label><br />
        <input
          type="text"
          id="zipcode"
          value={formData.zipcode}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="favGames">favGames:</label><br />
        <input
          type="text"
          id="favGames"
          value={formData.favGames.join(',')}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          value="Add New Best Friend"
          onClick={showForm}
        />
      </form>
    </div>
  );
};

export default HeroArea;