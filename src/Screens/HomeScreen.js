import React from "react";
import "./HomeScreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import Row from "../Row";
import requests from "../Requests";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />

      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchURL={requests.fetchTrending} />
      <Row title="TOP RATED" fetchURL={requests.fetchTopRated} />
      <Row title="ACTION MOVIE" fetchURL={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIE" fetchURL={requests.fetchComedyMovies} />
      <Row title="DOCUMENTARIES" fetchURL={requests.fetchDocumentariesMovies} />
      <Row title="HORROR MOVIE" fetchURL={requests.fetchHorrorMovies} />
      <Row title="ROMANTIC MOVIE" fetchURL={requests.fetchRomanceMovies} />
    </div>
  );
}

export default HomeScreen;
