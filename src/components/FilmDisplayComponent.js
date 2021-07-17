import React from "react";
import "./FilmDisplayComponent.css";
import { Spinner } from "react-bootstrap";
import FilmComponent from './FilmComponent'

export default function FilmDisplayComponent(props) {
  if (props.isLoading) {
    return (
      <div className="isLoading">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <div className="FilmDisplay">
      {props.film.map((value, idx) => {
        return (
          <FilmComponent
            key={idx}
            id={value.id}
            character={value.character}
            title={value.title}
            release_date={value.release_date}
            producer={value.producer}
            director={value.director}
            opening={value.opening_crawl}
          />
        );
      })}
    </div>
  );
}
