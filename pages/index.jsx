import { fail } from "assert";
import { useState } from "react";

export default function Home() {
  const [answer, setAnswer] = useState(0);
  const [arthemathic, setArtemathic] = useState("add");
  const [open, setOpen] = useState(false);

  function test() {
    const value = parseInt(window.prompt("enter any number"));

    if (isNaN(value)) {
      alert("enter a valid number");
      return null;
    }
    setAnswer(value);
  }

  return (
    <section className="flex flex-col  justify-center items-center">
      <h1 className="text-4xl w-full font-semibold">CALCULATOR</h1>
      <div> {answer} </div>
      <button
        onClick={() => {
          test();
        }}
      >
        submit{" "}
      </button>{" "}
      <div>
        {" "}
        <button
          type="button"
          onClick={() => {
            setOpen(!open);
          }}
          className="bg-blue-500 p-3"
        >
          {" "}
          {open ? "open Shop" : "closed shop"}
        </button>
        {!open ? <h2> shop is open </h2> : <h2>shop is close</h2>}
      </div>
    </section>
  );
}
