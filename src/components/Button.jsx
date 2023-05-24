import React from "react";

const Button = ({value,eventHandler}) => (
  <button type="button" onClick={eventHandler} className="my-8 bg-blue-500 hover:bg-blue-700 focus:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    {value}
  </button>
);

export default Button;
