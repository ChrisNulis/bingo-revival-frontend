import React from 'react'

class DogProf extends React.Component {
    render() {
        return (
                <article>
                    <section className="dog-intro">
                        <img src={this.props.dog.image} alt={this.props.dog.name}/>
                        <div className="intro-text">
                            <h3 id="dog-name">{this.props.dog.name}</h3>
                            <p>{this.props.dog.age} yrs.</p>
                        </div>
                    </section>
                    <p><span>Breed:</span> {this.props.dog.breed}</p>
                    <p><span>My Human(s):</span> {this.props.dog.human}</p>
                    <p><span>Home zipcode:</span> {this.props.dog.zipcode}</p>
                    <p><span>Favorite games:</span></p>
                        <ul>
                        {this.props.dog.favGames.map(game => {
                            return (
                                <li>{game}</li>
                            )
                        })}
                    </ul>
                    <details>
                      <summary>Edit Pooch</summary>
                      <form id={this.props.dog.id} onSubmit={this.props.updateDog}>
                        <label htmlFor="name">Name</label><br />
                        <input type="text" id="name" onChange={this.props.handleChange} />
                        <br />
                        <label htmlFor="image">Image</label><br />
                        <input type="text" id="image" onChange={this.props.handleChange} />
                        <br />
                        <label htmlFor="age">Age</label><br />
                        <input type="text" id="age" onChange={this.props.handleChange} />
                        <br />
                        <label htmlFor="breed">Breed</label><br />
                        <input type="text" id="breed" onChange={this.props.handleChange} />
                        <br />
                        <label htmlFor="human">Human</label><br />
                        <input type="text" id="human" onChange={this.props.handleChange} />
                        <br />
                        <label htmlFor="zipcode">ZipCode</label><br />
                        <input type="text" id="zipcode" onChange={this.props.handleChange} />
                        <br />
                        <label htmlFor="favGames">FavGames</label><br />
                        <input type="text" id="favGames" onChange={this.props.handleChange} />
                        <br />
                        <input type="submit" value="Update Pooch" />
                      </form>
                      <button value={this.props.dog.id} onClick={this.props.deleteDog} id="del-btn">
                      Remove Doggo
                      </button>
                    </details>
                </article>
        )
    }
}

export default DogProf
