import React from "react";

const List = ({ data, render }) => {
  return <div>{data.map((item) => render(item))}</div>;
};

export default List;
