import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
    render() {
        return (
            <>
                <div>
                    <nav className="navbar navbar-expand-lg bg-dark">
                        <div className="container-fluid">
                            <Link to="/" className="navbar-brand text-light">NewMonkey</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/" className="text-light nav-link">General</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/business" className="text-light nav-link">Business</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/entertainment" className="text-light nav-link" >Entertainment</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/health" className="text-light nav-link">Health</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/science" className="text-light nav-link">Science</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/sports" className="text-light nav-link">Sports</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/technology" className="text-light nav-link">Technology</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div>

                </div>


            </>
        )
    }
}
