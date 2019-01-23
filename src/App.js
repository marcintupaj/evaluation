import React, { Component } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Reviews } from './components/Reviews';
import { BANNER_IMAGE } from './config';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <main>
                    <div className="banner" style={{'backgroundImage': `url(${BANNER_IMAGE})`}}/>
                    <Reviews/>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default App;
