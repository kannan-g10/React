import React from "react";
import LineItem from "./lineitem";

const ItemsList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default ItemsList;
