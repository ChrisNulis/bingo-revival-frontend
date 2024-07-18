import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button';

import Nav from './components/Nav';
import HeroArea from './components/HeroArea';
import DogProf from './components/DogProf';
import Weather from './components/Weather';
import Map from './components/Map';
import Footer from './components/Footer';

const App = () => {
  const [state, setState] = useState({
    name: '',
    image: '',
    age: '',
    breed: '',
    human: '',
    zipcode: '',
    favGames: [],
    dogs: [],
  });

  const addDog = (dog) => {
    console.log(dog);
    axios.post('http://localhost:8000/api/dogs', dog)
      .then((response) => {
        console.log('.then triggered');
        console.log(response);
        getDogs();
      })
      .catch((error) => console.error(error));
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    if (id === 'favGames') {
      setState((prevState) => ({
        ...prevState,
        favGames: value.split(','),
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    }
  };

  const getDogs = () => {
    axios.get('http://localhost:8000/api/dogs')
      .then((response) => {
        setState((prevState) => ({
          ...prevState,
          dogs: response.data,
        }));
      })
      .catch((error) => console.log(error));
  };

  const deleteDog = (event) => {
    axios.delete(`http://localhost:8000/api/dogs${event.target.value}`)
      .then(() => {
        getDogs();
      });
  };

  const updateDog = (event) => {
    event.preventDefault();
    const id = event.target.id;
    axios.put(`http://localhost:8000/api/dogs${id}`, state)
      .then(() => {
        getDogs();
      });
  };

  useEffect(() => {
    getDogs();
  }, []);

  return (
    <div className="main-container">
      <Nav />
      <ScrollUpButton />
      <HeroArea
        addDog={addDog}
        id="add"
      />
      <div className="smaller-width">
        <div id="dogs-container">
          {state.dogs.map((dog) => (
            <DogProf
              key={dog.id}
              dog={dog}
              updateDog={updateDog}
              deleteDog={deleteDog}
              handleChange={handleChange}
            />
          ))}
        </div>
        <Weather
          id="weather"
          handleChange={handleChange}
        />
        <Map
          handleChange={handleChange}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;