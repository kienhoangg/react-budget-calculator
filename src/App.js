import React, { useState, useEffect } from "react";
import "./App.css";
import ExtensesForm from "./components/ExtenseForm";
import ExtensesList from "./components/ExtenseList";
import { v4 as uuid } from "uuid";
import Alert from "./components/Alert";
// const initialExtenses = [
//   { id: uuid(), charge: "rent", amount: 900 },
//   { id: uuid(), charge: "Car", amount: 1000 },
//   { id: uuid(), charge: "Macbook", amount: 1200 },
// ];
const initialExtenses = localStorage.getItem("initialExtenses")
  ? JSON.parse(localStorage.getItem("initialExtenses"))
  : [];

function App() {
  const [extenses, setStateFunction] = useState(initialExtenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [isEdit, setEdit] = useState(false);
  const [currentId, setCurrentId] = useState("");
  useEffect(() => {
    console.log("call useEffect");
    localStorage.setItem("initialExtenses", JSON.stringify(extenses));
  }, [extenses]);

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleClear = () => {
    setStateFunction([]);
  };
  const handleDelete = (id) => {
    setStateFunction([...extenses.filter((item) => item.id !== id)]);
  };
  const handleEdit = (id) => {
    setEdit(true);
    const thisExtense = extenses.find((item) => item.id === id);
    setCharge(thisExtense.charge);
    setAmount(thisExtense.amount);
    setCurrentId(id);
  };

  const handleAlert = ({ type, message }) => {
    setAlert({ show: true, type, message });

    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (isEdit) {
        setStateFunction([
          ...extenses.map((item) => {
            return item.id === currentId ? { ...item, amount, charge } : item;
          }),
        ]);
      } else {
        const newExtense = {
          id: uuid(),
          charge,
          amount,
        };
        setStateFunction([...extenses, newExtense]);
      }
      setAmount("");
      setCharge("");
      setEdit(false);
      handleAlert({ type: "success", message: "Item Added" });
    } else {
      //handle alert
      handleAlert({
        type: "danger",
        message:
          "charge can't be empty value and amount value has to be bigger than zero",
      });
    }
  };

  return (
    <section>
      {alert.show && <Alert type={alert.type} message={alert.message} />}

      <h1>budget calculator</h1>
      <main className="App">
        <ExtensesForm
          handleCharge={handleCharge}
          charge={charge}
          amount={amount}
          isEdit={isEdit}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />
        <ExtensesList
          extenses={extenses}
          handleClear={handleClear}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </main>

      <h1>
        Total Spending:
        <span className="total">
          ${extenses.reduce((acc, curr) => (acc += parseInt(curr.amount)), 0)}
        </span>
      </h1>
    </section>
  );
}

export default App;
