import React from "react";

export default function Calc() {
  const [input, setInput] = React.useState({
    num1: "",
    num2: "",
    num3: "",
    num4: "",
  });

  const [result, setResult] = React.useState("");
  const [months, setMonths] = React.useState("");

  //handle input change

  const handleInput = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  //suma function
  const principal = 1000;
  const time = 1 / 12;
  const rate = 0.08;
  const n = 12;

  const compoundInterest = (p, t, r, n) => {
    const amount = p * Math.pow(1 + r / n, n * t);
    const interest = amount - p;
    return interest;
  };

  const amounttosave = 1000000;
  const monthlydeposit = 1500;
  const startingcap = 10000;
  const yearlyinterest = 0.11;

  const calculator = (
    amounttosave,
    monthlydeposit,
    startingcap,
    yearlyinterest
  ) => {
    return calculatorHelper(
      0,
      amounttosave,
      monthlydeposit,
      startingcap,
      yearlyinterest / 100
    );
  };

  const calculatorHelper = (
    current,
    amounttosave,
    monthlydeposit,
    startingcap,
    yearlyinterest
  ) => {
    if (startingcap >= amounttosave) {
      return [current, startingcap];
    } else {
      var newStarting =
        Number(startingcap) +
        Number(monthlydeposit) +
        Number(compoundInterest(startingcap, 1 / 12, yearlyinterest, 12));

      var newCurrent = current + 1;
      return calculatorHelper(
        newCurrent,
        amounttosave,
        monthlydeposit,
        newStarting,
        yearlyinterest
      );
    }
  };
  const suma = function () {
    console.log("clicked");
    const { num1, num2, num3, num4 } = input;
    console.log(num1, num2, num3, num4);
    const [a, b] = calculator(num1, num2, num3, num4);
    console.log(calculator(num1, num2, num3, num4));
    setResult(parseInt(b));
    setMonths(a);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "15vw",
        marginTop: "23vh",
      }}
    >
      amount to save
      <input
        onChange={handleInput}
        name="num1"
        value={input.num1}
        type="number"
      ></input>
      monthly deposit
      <input
        onChange={handleInput}
        name="num2"
        value={input.num2}
        type="number"
      ></input>{" "}
      starting cap
      <input
        onChange={handleInput}
        name="num3"
        value={input.num3}
        type="number"
      ></input>{" "}
      yearly interest
      <input
        onChange={handleInput}
        name="num4"
        value={input.num4}
        type="number"
      ></input>
      <button onClick={suma}>Calculate</button>
      <br />
      <br />
      <span>Months: {months} months</span>
      <span>Result: ${result} </span>
      <span>
        Amount Saved: ${" "}
        {result === ""
          ? ""
          : Number(input.num2) * Number(months) + Number(input.num3)}{" "}
      </span>
      <span>
        Interest Amount: $
        {result === ""
          ? ""
          : Number(result) -
            (Number(input.num2) * Number(months) + Number(input.num3))}{" "}
      </span>
    </div>
  );
}
