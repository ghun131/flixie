import React, { Component } from "react";
import { Box } from 'bloomer';
import "./MovieCard.css";
import { Image } from 'bloomer';

export default class MovieCard extends Component {
  render() {
    return (
     
    <Box className="MovieCard-Box">
    <img src={"http://image.tmdb.org/t/p/" + "w342" + this.props.movie.poster_path}/> <br/>
             <span className="MovieCard-Title">{this.props.movie.title}</span> <br/>
             <span className="MovieCard-Overview">{this.props.movie.overview}</span></Box>

     
    )
  }
}
