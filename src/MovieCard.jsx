import React, { Component } from "react";
import { Box } from 'bloomer';
import "./MovieCard.css";
import { Image } from 'bloomer';

export default class MovieCard extends Component {
  render() {
    const { title, poster_path, overview, vote_average} = this.props.movie;
    let imgSrc = `https://image.tmdb.org/t/p/w370_and_h556_bestv2${poster_path}`;
    {/* Can I do this?
    let imgSrc = `http://image.tmdb.org/t/p/w342{poster_path}`;
    and why does he need the part of _and_h556_bestv2$ */}
    return (
    <Box className="MovieCard-Box">
      <h1>
        <b className="MovieCard-Title">{title}</b>
      </h1>
      <img src={imgSrc}/><br/>
      <span>Rating: {vote_average}</span><br/>
      <p>{overview}</p>
    </Box>             

    )
  }
}
