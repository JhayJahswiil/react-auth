import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Styles/Joke.css"

export default function JokeApi() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
      setJoke(response.data);
    };
    fetchJoke();
  }, []);

  return (
    <div className="joke-sec">
      <h1>Our recent Joke</h1>
      <table>
        {/* <caption></caption> */}
        <tr>
          <td>Joke Type: {joke.type}</td>
        </tr>
        <tr>
          <td>Joke ID: {joke.id}</td>
        </tr>
        <tr>
          <td>Joke Setup: {joke.setup}</td>
        </tr>
        <tr>
          <td>Joke Punchline: {joke.punchline}</td>
        </tr>
      </table>
    </div>
  )
}
