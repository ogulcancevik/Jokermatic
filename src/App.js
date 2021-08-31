import React, { useState, useEffect } from "react";
import Button from "./Components/Button";
import Card from "./Components/Card";
import { BsMoon } from "react-icons/bs";
import Logo from "../src/Components/joke.png";

const App = () => {
  const URL =
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist";
  useEffect(() => {
    if (localStorage.getItem("dark")) {
      document.documentElement.classList.add("dark");
    }
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setJokes(data));
  }, []);
  const [Jokes, setJokes] = useState("");
  const getJoke = async () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setJokes(data));
    console.log(Jokes);
  };
  const ToggleTheme = () => {
    const root = document.documentElement.classList;
    root.toggle("dark");
    if (root.contains("dark")) {
      localStorage.setItem("dark", true);
    } else {
      localStorage.removeItem("dark");
    }
  };
  return (
    <div className="h-screen w-screen dark:bg-themeDark-dark bg-themeDark-white flex flex-col justify-center items-center">
      <button
        className="h-12 w-20 mb-7 rounded-lg flex justify-center items-center dark:text-themeDark-white transition-all"
        id="toggle"
        onClick={ToggleTheme}
      >
        <BsMoon className="text-2xl dark:text-themeDark-yellow transition-all" />
      </button>
      <div className="flex flex-col justify-center items-center mb-5">
        <img className="w-28 h-28 mb-2" src={Logo} alt="Jokermatic logo" />
        <p className="font-bold text-2xl dark:text-themeWhite-white">
          Jokermatic
        </p>
      </div>
      <Button getJoke={getJoke} />
      <Card Jokes={Jokes} />
    </div>
  );
};

export default App;
