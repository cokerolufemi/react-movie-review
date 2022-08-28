import React, { Component } from "react";

class CokerFunc extends Component {
  constructor(props) {
    super();
    this.state = { movies: [] };
  }

  componentDidMount() {
    fetch(
      "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=1RSzcMx65mgClREMPO3Z0gOAxafJAxkN"
    )
      .then((res) => {
        res.json().then((moviesdata) => {
          this.setState({ movies: moviesdata.results });
          console.log(moviesdata);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        {this.state.movies.map((movie, id) => {
          return (
            <div key={movie.id}>
              <h4>Byline: {movie.byline}</h4>
              <h4>critic pick: {movie.critics_pick}</h4>
              <h4>tittle : {movie.display_title} </h4>
              <h4>headline : {movie.headline}</h4>
            </div>
          );
        })}
      </>
    );
  }
}
export default CokerFunc;
