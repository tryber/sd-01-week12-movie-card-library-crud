import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MovieList from "./pages/MovieList";
import MovieDetails from "./pages/MovieDetails";
import NewMovie from "./pages/NewMovie";
import EditMovie from "./pages/EditMovie";
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MovieList} />
        <Route path="/movies/:id" exact component={MovieDetails} />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
