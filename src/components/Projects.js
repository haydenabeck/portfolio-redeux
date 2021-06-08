import React from "react";

function Projects() {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="../assets/spotifyplaylisthomepage.png"
          className="card-img-top"
          alt="spotify playlist generator"
        />
        <div class="card-body">
          <h5 class="card-title">Spotify Playlist Generator</h5>
          <p class="card-text">
            A web app designed to help users more effectively navigate music
            listening algorithms
          </p>
          <a
            href="https://spotify-community.herokuapp.com/"
            class="btn btn-primary"
          >
            Check out the project
          </a>
        </div>
      </div>
      <div class="card" style={{ width: "18rem" }}>
        <img
          src="../assets/bluelinetracker.png"
          class="card-img-top"
          alt="washington dc blue line tracker"
        />
        <div class="card-body">
          <h5 class="card-title">Washington D.C. Blue Line Tracker</h5>
          <p class="card-text">
            A Washington D.C. Blue Line metra tracker in realtime.
          </p>
          <a
            href="https://haydenabeck.github.io/Project-1-App/"
            class="btn btn-primary"
          >
            Check out the project
          </a>
        </div>
      </div>
      <div class="card" style={{ width: "18rem" }}>
        <img
          src="../assets/techblog.png"
          class="card-img-top"
          alt="tech blog"
        />
        <div class="card-body">
          <h5 class="card-title">Tech Blog Concept</h5>
          <p class="card-text">
            A simple blog concept with a login in feature that allows a user to
            make posts and comment on other user's posts.
          </p>
          <a
            href="https://evening-woodland-62741.herokuapp.com/"
            class="btn btn-primary"
          >
            Check out the project
          </a>
        </div>
      </div>
      <div class="card" style={{ width: "18rem" }}>
        <img
          src="../assets/workouttracker.png"
          class="card-img-top"
          alt="workout tracker"
        />
        <div class="card-body">
          <h5 class="card-title">Workout Tracker</h5>
          <p class="card-text">
            A workout tracking app that lets one pick their workout type, fill
            out reps, sets, distance traveled and time to then track your
            workout progress.
          </p>
          <a
            href="https://secure-ridge-25028.herokuapp.com/"
            class="btn btn-primary"
          >
            Check out the project
          </a>
        </div>
      </div>
      <div class="card" style={{ width: "18rem" }}>
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Check out the project
          </a>
        </div>
      </div>
      <div class="card" style={{ width: "18rem" }}>
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Check out the project
          </a>
        </div>
      </div>
    </>
  );
}

export default Projects;
