import React from "react";
import { MdSend } from "react-icons/md";
export const ExtenseForm = ({
  handleCharge,
  charge,
  amount,
  handleAmount,
  handleSubmit,
  isEdit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-center">
          <div className="form-group">
            <label htmlFor="charge">charge</label>
            <input
              type="text"
              id="charge"
              name="charge"
              className="form-control"
              placeholder="e.g rent"
              onChange={handleCharge}
              value={charge}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={amount}
              onChange={handleAmount}
              className="form-control"
              placeholder="e.g 1000"
            />
          </div>
        </div>

        <button type="submit" className="btn">
          {isEdit ? "edit" : "submit"} <MdSend className="btn-icon" />
        </button>
      </form>
    </>
  );
};

export default ExtenseForm;
