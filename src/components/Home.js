import React from "react";
import NavBar from "./NavBar";
import username from  "../data/username";
import city from  "../data/city";

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
        <username />
        <city />
      </h1>
    </div>
  );
}
export default Home;