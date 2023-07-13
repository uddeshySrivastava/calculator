import { fail } from "assert";
import { useState } from "react";

const style = {
  grid: " grid gap-5 grid-cols-2 h-60 mt-5 rounded-3xl max-w-2xl w-full",
  button:
    "col-span-1 h-full w-full bg-zinc-800 rounded-3xl hover:scale-95 transition duration-300 hover:bg-blue-500",
};

export default function Home() {
  const [answer, setAnswer] = useState(0);
  const [arthemathic, setArtemathic] = useState(3);
  const [open, setOpen] = useState(false);

  function test() {
    const value = parseInt(window.prompt("enter any number"));

    if (isNaN(value)) {
      alert("enter a valid number");
      return null;
    }
    setAnswer(value);
  }
  const SelectOperators = () => {
    return (
      <main className=" p-5 max-w-3xl mx-auto max-h-96 h-full rounded-3xl bg-gray-700 text-gray-300 ">
        <h1 className=" text-5xl w-full font-semibold">
          What do you want to do?
        </h1>

        <div className={style.grid}>
          <button className={style.button} type="button">
            <span className="text-2xl font-semibold">ADD</span>
          </button>
          <button className={style.button} type="button">
            <span className="text-2xl font-semibold">SUB</span>
          </button>
          <button className={style.button} type="button">
            <span className="text-2xl font-semibold">MULTI</span>
          </button>
          <button className={style.button} type="button">
            <span className="text-2xl font-semibold">DIVIDE</span>
          </button>
        </div>
      </main>
    );
  };
  const PerformOperator = () => {
    return (
      <main className=" p-5 max-w-3xl mx-auto max-h-96 h-full rounded-3xl bg-gray-700 text-gray-300 ">
        <h1 className=" text-5xl w-full font-semibold">Calculation for add!</h1>

        <div className={style.grid}>
          <h2 className="p-5 text-2xl font-semibold ">
            Enter 1st number you want to (add)
          </h2>
          <button className={style.button} type="button">
            {" "}
            submit{" "}
          </button>
          <h2 className="p-5  text-2xl font-semibold">
            Enter 2nd number you want to (add)
          </h2>
          <button className={style.button} type="button">
            {" "}
            submit{" "}
          </button>
        </div>
      </main>
    );
  };
  const ResultComponent = () => {
    return (
      <main className=" p-5 max-w-3xl mx-auto max-h-96 h-full rounded-3xl bg-gray-700 text-gray-300 flex flex-col justify-center items-center ">
        <h1 className=" text-5xl w-full font-semibold">Your answer is!</h1>
        <h2 className="text-7xl font-semibold ">{answer}</h2>
      </main>
    );
  };

  return (
    <section className="h-screen w-full bg-gray-900 flex flex-col justify-center items-center">
      {/* component part1 */}

      {arthemathic === 1 ? <SelectOperators /> : <> </>}
      {/* component part2 */}

      {arthemathic === 2 ? <PerformOperator /> : <> </>}
      {/* component part3 */}
      {arthemathic === 3 ? <ResultComponent /> : <> </>}
    </section>
  );
}
