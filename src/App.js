import React, { Component } from "react";
import "./App.css";
import Entete from "./components/Entete";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import { STATICMOVIESDATA } from "./MoviesDATA";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export default class App extends Component {
  state = {
    movies: STATICMOVIESDATA,
    likedMovies: [],
    searchValue: "",
    categoryValue: "All",
    StarFilter: 1,
  };

  handleStars = (indexStar) => this.setState({ StarFilter: indexStar });

  handleCategory = (option) => {
    this.setState({ categoryValue: option });
  };

  handleDeleteAll = () => {
    this.setState({ movies: [] });
    this.setState({ likedMovies: [] });
  };

  handleEdit = (filmmodif) => {
    this.setState({
      movies: this.state.movies.map((el) =>
        el.id === filmmodif.id ? filmmodif : el
      ),
    });

    const verificationFilm = this.state.likedMovies.find(
      (el) => el.id === filmmodif.id
    );
    if (verificationFilm) {
      this.setState({
        likedMovies: this.state.likedMovies.map((el) =>
          el.id === filmmodif.id ? filmmodif : el
        ),
      });
    }
  };

  handleAdd = (filmjdid) => {
    this.setState({ movies: [...this.state.movies, filmjdid] });
  };

  handleSearch = (ktiba) => {
    this.setState({ searchValue: ktiba });
  };

  handleLike = (movie) => {
    let verification = this.state.likedMovies.find(
      (el) => el.id === movie.id && el !== movie
    );

    verification
      ? alert("You already have this movie in your watch list")
      : this.setState({ likedMovies: [...this.state.likedMovies, movie] });
  };

  handleDislike = (identif) =>
    this.setState({
      likedMovies: this.state.likedMovies.filter((el) => el.id !== identif),
    });

  handleDelete = (identif) =>
    this.setState({
      movies: this.state.movies.filter((el) => el.id !== identif),
    });
  render() {
    return (
      <div className="App">
        <Entete
          handleSearch={this.handleSearch}
          inputV={this.state.searchValue}
          categoryValue={this.state.categoryValue}
          handleCategory={this.handleCategory}
          likedMovies={this.state.likedMovies}
          dislike={this.handleDislike}
          filterStar={this.state.StarFilter}
          handleStars={this.handleStars}
        />
        <MovieList
          inputV={this.state.searchValue}
          categoryValue={this.state.categoryValue}
          like={this.handleLike}
          movies={this.state.movies}
          del={this.handleDelete}
          edit={this.handleEdit}
          filterStar={this.state.StarFilter}
        />
        <AddMovie handleAdd={this.handleAdd} />
        <Button
          onClick={() => this.handleDeleteAll()}
          style={{ margin: "10px", padding: "10px 15px" }}
          variant="outline-danger"
        >
          Delete All
        </Button>
      </div>
    );
  }
}
