import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/images/somleLogo.svg';
import Button from './buttonGradient';

function header({ phone = "+213 658 092 106", logoSvg = logo }) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navCus shadow fixed-top">
                <div className="container ">
                    <Link className="navbar-brand" to="/" >
                        <img src={logoSvg} alt="logo" width="40" height="40" className="d-inline-block align-text-top" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item ">
                                <Link className="nav-link  text-white" to="/project">Services</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link  text-white" to="/project">Faq</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link  text-white" to="/project">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <div className="button-phon">
                            <Button content={phone} icon="phone-alt" />
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    );
}

export default header
