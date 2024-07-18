import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <h4>...and bingo was his Django.</h4>
                <p>project by:</p>
                <ul>
                    <li>
                        <p>Christopher Nugroho</p>
                        <a href="https://www.linkedin.com/in/christophernugroho/" target>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/ChrisNulis" >
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Footer
