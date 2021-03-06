import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
// import PlayerBar from './components/PlayerBar'; later on I want to make the player bar display at the bottom even on the landing and library pages.


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Bloc Jams</h1>
          <nav>
            <Link to='/'>Landing</Link>
            <Link to='/library'>Library</Link>
          </nav>          
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
