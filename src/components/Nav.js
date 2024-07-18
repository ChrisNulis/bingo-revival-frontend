import React from 'react'

class Nav extends React.Component {
    render() {
        return (
            <div className="nav-container">
                <nav>
                    <h1 onClick={() => window.location.replace("/#nav-container")}>bingo</h1>
                    <ul>
                        <a onClick={() => window.location.replace("/#heroarea-container")}><li>add a buddy</li></a>
                        <a onClick={() => window.location.replace("/#weather-container")}><li>weather</li></a>
                        <a onClick={() => window.location.replace("/#map-container")}><li>parks near me</li></a>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav
