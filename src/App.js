import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Projects from "./components/Projects.js";
import Homepage from "./components/Homepage.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path={"/"}>
            <Homepage />
          </Route>
          <Route exact path={["/about"]}>
            <About />
          </Route>
          <Route exact path={["/contact"]}>
            <Contact />
          </Route>
          <Route exact path={["/projects"]}>
            <Projects />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
