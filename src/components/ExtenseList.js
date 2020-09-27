import React from "react";
import Item from "./ExtenseItem";
import { MdDelete } from "react-icons/md";
const ExtenseList = ({ extenses, handleClear, handleDelete, handleEdit }) => {
  return (
    <>
      <ul className="list">
        {extenses.map((extense) => {
          return (
            <Item
              key={extense.id}
              extense={extense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {extenses.length > 0 && (
        <button onClick={handleClear} className="btn">
          Clear Extenses <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
};

export default ExtenseList;
