import React from 'react'

import axios from 'axios'

import {TinyButton as ScrollUpButton} from 'react-scroll-up-button'

import Nav from './components/Nav'
import HeroArea from './components/HeroArea'
import DogProf from './components/DogProf'
import Weather from './components/Weather'
import Map from './components/Map'
import Footer from './components/Footer'


class App extends React.Component {

  state= {
    name: '',
    image: '',
    age: '',
    breed: '',
    human: '',
    zipcode: '',
    favGames: [],
    dogs: [],
  }

  addDog = (dog) => {
     console.log(dog)
    axios
    .post('http://localhost:8000/api/dogs', dog)
    .then((response) => {
      console.log('.then triggered')
      console.log(response)
      this.getDogs()
    })
    .catch((error) => console.error(error))
  }

  handleChange = (event) => {
    if (event.target.id === "favGames") {
        this.setState({
            favGames: event.target.value.split(',')
        })
    }
    else {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
}

  getDogs = () => {
    axios
      .get('http://localhost:8000/api/dogs')
      .then(
        (response) => {
          this.setState({ dogs: response.data})
        },
        (err) => console.log(err)
      )
      .catch((error) => console.log(error))
  }

  deleteDog = (event) => {
    axios.delete('http://localhost:8000/api/dogs' + event.target.value).then((response) => {
      this.getDogs()
    })
  }

  updateDog = (event) => {
    event.preventDefault()
    const id = event.target.id
    axios
    .put('http://localhost:8000/api/dogs' + id, this.state)
    .then((response) => {
      this.getDogs()
    })
  }

   componentDidMount = () => {
    this.getDogs()
   }

    render() {
        return (
            <div className="main-container">
                <Nav />
                <ScrollUpButton />
                <HeroArea
                    addDog={this.addDog}
                    id="add"/>
                <div className="smaller-width">
                    <div id="dogs-container">
                        {this.state.dogs.map((dog) => {
                          return(
                            <DogProf dog={dog}
                              updateDog={this.updateDog}
                              deleteDog={this.deleteDog}
                              handleChange={this.handleChange}
                              />
                          )
                        })}
                    </div>
                    <Weather
                        id="weather"
                        handleChange={this.handleChange}/>
                    <Map
                        handleChange={this.handleChange}/>
                </div>
                <Footer />
            </div>
        )
    }
}

export default App

// <Map
//     id="map"
//     handleChange={this.handleChange}/>
