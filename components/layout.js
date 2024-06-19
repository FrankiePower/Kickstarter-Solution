import React from "react";

const layout = (props) => {
  return (
    <div>
      <h1>I am a header</h1>
      {props.children}
      <h1>I am a footer</h1>
    </div>
  );
};
export default layout;
