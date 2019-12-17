import React from "react";

const header = (props) => {
  const {title, description} = props;

  return (
    <>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </>
  );
};

export default header;