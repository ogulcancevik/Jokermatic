import React from "react";

const Button = ({ getJoke }) => {
  return (
    <button
      className="bg-white dark:bg-themeDark-darker dark:text-themeWhite-white shadow-lg hover:bg-gray-300 transition-all p-3 rounded-xl"
      onClick={getJoke}
    >
      Click me if u want a joke
    </button>
  );
};

export default Button;
