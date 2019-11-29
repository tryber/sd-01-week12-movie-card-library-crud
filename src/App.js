import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import newMovie from './pages/NewMovie';
import editMovie from './pages/EditMovie';
import notFound from './pages/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/movies/new" component={newMovie} />
          <Route path="/movies/:id/edit" component={editMovie} />
          <Route path="*" component={notFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
