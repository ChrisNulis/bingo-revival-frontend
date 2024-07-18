import React from 'react';

const DogProf = ({ dog, updateDog, handleChange, deleteDog }) => {
  return (
    <article>
      <section className="dog-intro">
        <img src={dog.image} alt={dog.name} />
        <div className="intro-text">
          <h3 id="dog-name">{dog.name}</h3>
          <p>{dog.age} yrs.</p>
        </div>
      </section>
      <p><span>Breed:</span> {dog.breed}</p>
      <p><span>My Human(s):</span> {dog.human}</p>
      <p><span>Home zipcode:</span> {dog.zipcode}</p>
      <p><span>Favorite games:</span></p>
      <ul>
        {dog.favGames.map((game, index) => (
          <li key={index}>{game}</li>
        ))}
      </ul>
      <details>
        <summary>Edit Pooch</summary>
        <form id={dog.id} onSubmit={updateDog}>
          <label htmlFor="name">Name</label><br />
          <input type="text" id="name" onChange={handleChange} />
          <br />
          <label htmlFor="image">Image</label><br />
          <input type="text" id="image" onChange={handleChange} />
          <br />
          <label htmlFor="age">Age</label><br />
          <input type="text" id="age" onChange={handleChange} />
          <br />
          <label htmlFor="breed">Breed</label><br />
          <input type="text" id="breed" onChange={handleChange} />
          <br />
          <label htmlFor="human">Human</label><br />
          <input type="text" id="human" onChange={handleChange} />
          <br />
          <label htmlFor="zipcode">ZipCode</label><br />
          <input type="text" id="zipcode" onChange={handleChange} />
          <br />
          <label htmlFor="favGames">FavGames</label><br />
          <input type="text" id="favGames" onChange={handleChange} />
          <br />
          <input type="submit" value="Update Pooch" />
        </form>
        <button value={dog.id} onClick={deleteDog} id="del-btn">
          Remove Doggo
        </button>
      </details>
    </article>
  );
};

export default DogProf;