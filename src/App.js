import React, { useState } from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const themeHook = useState("peru");

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root")); //where App is rendering => root //

//   return React.createElement("div", {}, [
//     React.createElement("h1", {},ç "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Dog",
//       breed: "Mixed",
//     }),
//     React.createElement(Pet, {
//       name: "Hohoho",
//       animal: "Dog",
//       breed: "Golden",
//     }),
//   ]);
