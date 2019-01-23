/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../logo.svg';
import './Header.scss';

export const Header = () => 
    <header className="header">
        <div className="container">
            <div className="header__body">
                <div className="header__block">
                    <div className="header__logo-container">
                        <div className="header__logo logo">
                            <img src={logo} className="logo__image" alt="Holiday Check - Logo"/>
                        </div>
                    </div>
                </div>
                <div className="header__block header__menu-container">
                    <ul className="header__menu menu">
                        <li className="menu__item">
                            <a href="#" className="menu__link">
                                <span className="menu__link-text">Dashboard</span>
                            </a>
                        </li>
                        <li className="menu__item menu__item--active">
                            <a href="#" className="menu__link">
                                <span className="menu__link-text">Reviews</span>
                            </a>
                        </li>
                        <li className="menu__item">
                            <a href="#" className="menu__link">
                                <span className="menu__link-text">Hotel Manager</span>
                            </a>
                        </li>
                        <li className="menu__item">
                            <a href="#" className="menu__link">
                                <span className="menu__link-text">Settings</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>