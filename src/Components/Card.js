import React from "react";

const Card = ({ Jokes }) => {
  return (
    <div className="bg-white dark:bg-themeDark-darker dark:text-themeDark-white transition-all m-5 max-w-sm rounded overflow-hidden shadow-lg card">
      <div className="px-6 py-4">
        <p className="font-bold text-xl text-center"></p>
        <p className="mt-2 text-base">{Jokes.joke || Jokes.setup}</p>
        <p className="mt-5 font-bold">{Jokes.delivery}</p>
        <p className="mt-5 text-gray-700">{Jokes.category}</p>
      </div>
    </div>
  );
};

export default Card;
