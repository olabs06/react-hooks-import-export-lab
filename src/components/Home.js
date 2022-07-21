import React from "react";
import NavBar from "./NavBar";
import {username} from  "../data/user";
import {city} from  "../data/user";

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
        <username />
        <city />
        <NavBar />
      </h1>
    </div>
  );
}
export default Home;