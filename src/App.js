import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MovieList} />
        <Route path="/:id" component={MovieDetails} />
        <Route path="/new" component={NewMovie} />
        <Route path="/:id/edit" component={EditMovie} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
