import React from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root")); //where App is rendering => root //

//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
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
