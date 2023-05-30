import React from "react";
import { useSelector } from "react-redux"; // import useSelector hook
const HelloReduxExampleComponent = () => {
  const message = useSelector((hello) => hello.message); // extract 'Hello World' from reducer
  return <h3>{message}</h3>;
};
export default HelloReduxExampleComponent;
