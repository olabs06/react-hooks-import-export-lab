import React from "react";
import NavBar from "./NavBar";
import username from  "./username";
import city from  "./Aboutcity";

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