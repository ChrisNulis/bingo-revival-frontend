import React from 'react'

class HeroArea extends React.Component {

  state= {
    name: '',
    image: '',
    age: '',
    breed: '',
    human: '',
    zipcode: '',
    favGames: [],
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

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addDog(this.state)
  }

  showForm = () => {
      const addForm = document.querySelector('.addForm')
      addForm.classList.toggle('visible')
  }

    render(){
        return (
            <div className="heroarea-container" id="heroarea-container">
                <div className="welcome-text">
                    <h1>Welcome to bingo!</h1>
                    <button onClick={this.showForm}>add your bff</button>
                </div>
                <form className="addForm" onSubmit={this.handleSubmit}>
                  <label htmlFor="name">Name:</label><br />
                  <input
                      type="text"
                      id="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                  />
                  <br />
                  <label htmlFor="image">Image:</label><br />
                  <input
                      type="text"
                      id="image"
                      value={this.state.image}
                      onChange={this.handleChange}
                  />
                  <br />
                  <label htmlFor="age">Age:</label><br />
                  <input
                      type="text"
                      id="age"
                      value={this.state.age}
                      onChange={this.handleChange}
                  />
                  <br />
                  <label htmlFor="breed">Breed:</label><br />
                  <input
                      type="text"
                      id="breed"
                      value={this.state.breed}
                      onChange={this.handleChange}
                  />
                  <br />
                  <label htmlFor="human">Human:</label><br />
                  <input
                      type="text"
                      id="human"
                      value={this.state.human}
                      onChange={this.handleChange}
                  />
                  <br />
                  <label htmlFor="zipcode">Zipcode:</label><br />
                  <input
                      type="text"
                      id="zipcode"
                      value={this.state.zipcode}
                      onChange={this.handleChange}
                  />
                  <br />
                  <label htmlFor="favGames">favGames:</label><br />
                  <input
                      type="text"
                      id="favGames"
                      value={this.state.favGames}
                      onChange={this.handleChange}
                  />
                  <br />
                  <input
                    type="submit"
                    value="Add New Best Friend"
                    onClick={this.showForm}/>
               </form>
            </div>
        )
    }
}

export default HeroArea
