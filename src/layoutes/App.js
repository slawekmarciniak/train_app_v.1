import React, { Component } from "react";
import AppProvider from "./AppContext";

import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "Components/Header";
import Path from "./Path";
import Navigation from "Components/Nav";
import Pages from "./Pages";
import Footer from "Components/Footer";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <AppProvider>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="app">
            <header>
              <Header />
            </header>

            <section className="path">
              <Path />
            </section>

            <main>
              <aside>
                <Navigation />
              </aside>
              <section className="page">
                <Pages />
              </section>
            </main>
            <footer>
              <Footer />
            </footer>
          </div>
        </Router>
      </AppProvider>
    );
  }
}

export default App;
