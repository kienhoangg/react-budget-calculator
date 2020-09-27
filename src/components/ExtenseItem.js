import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
export const ExtenseItem = ({ extense, handleEdit, handleDelete }) => {
  const { id, charge, amount } = extense;
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${amount}</span>
      </div>
      <div>
        <button className="edit-btn" onClick={() => handleEdit(id)}>
          <MdEdit />
        </button>
        <button className="clear-btn" onClick={() => handleDelete(id)}>
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default ExtenseItem;
