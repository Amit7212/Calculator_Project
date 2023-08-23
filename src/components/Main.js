import React, { useState } from "react";

function Main() {
  const [result, setResult] = useState("");
  const [er, setEr] = useState("");
  
  const handleClick = (e) => {
    let resultStr = result.toString();
    if (
      (resultStr[resultStr.length - 1] === "+" ||
        resultStr[resultStr.length - 1] === "-" ||
        resultStr[resultStr.length - 1] === "*" ||
        resultStr[resultStr.length - 1] === "/") &&
      (e.target.innerText === "+" ||
        e.target.innerText === "-" ||
        e.target.innerText === "*" ||
        e.target.innerText === "/")
    ) {
      resultStr = resultStr.slice(0, -1);
    }
    console.log(resultStr[resultStr.length - 1]);
    setResult(resultStr.concat(e.target.innerText));
  };

  const handlePer = () => {
    let resultStr = result.toString();
    setResult(resultStr / 100);
  };

  const handleClear = () => {
    setResult("");
    setEr("");
  };

  const handleResult = () => {
    try {
      if (
        result[result.length - 1] === "+" ||
        result[result.length - 1] === "-" ||
        result[result.length - 1] === "*" ||
        result[result.length - 1] === "/"
      ) {
        setResult("Error");
      }
      else {
        setResult(eval(result));
      }
    }
     catch (error) {
      setResult("Error");
      setEr("Don't use numbers with preceding zeros");
    }
  };

  const handleDel = () => {
    let resultStr = result.toString();
    setResult(resultStr.slice(0, -1));
  };

  return (
    <main className="font-serif w-auto h-auto shadow-2xl shadow-cyan-400 justify-items-center p-8 bg-transparent border-4 border-cyan-400 mx-5 mt-14 rounded-3xl md:w-1/3 md:ml-[33.3%]">
      <div className="text-left flex items-center bg-transparent border-4 shadow-sm shadow-cyan-400 border-cyan-400 mb-4 w-full h-14 rounded-2xl text-cyan-400 font-extrabold text-lg">
        <p className="text-left mx-3 w-full h-3/4 pt-2 rounded-3xl font-extr pl-4">
          {result}
        </p>
      </div>
      <div className="bg-transparent border-4  shadow-md shadow-pink-600 border-pink-600 grid grid-cols-4 gap-3 py-5 rounded-lg p-3 text-white text-lg font-bold">
        <button
          className="rounded-lg text-red-500 font-extrabold bg-transparent py-2 border-4 border-red-600 hover:bg-red-600 hover:text-violet-950 hover:border-white text-xl  shadow-md shadow-red-600"
          onClick={handleClear}
        >
          AC
        </button>
        <button
          className="rounded-lg text-cyan-400 font-extrabold bg-transparent py-2 border-4 border-pink-600   hover:bg-cyan-400 hover:text-pink-600 hover:border-white text-xl  shadow-md shadow-pink-600"
          onClick={handleDel}
        >
          bksp
        </button>
        <button
          className="rounded-lg text-cyan-400 font-extrabold bg-transparent py-2 border-4 border-pink-600   hover:bg-cyan-400 hover:text-pink-600 hover:border-white text-xl  shadow-md shadow-pink-600"
          onClick={handlePer}
        >
          %
        </button>
        <button
          className="rounded-lg text-cyan-400 font-extrabold bg-transparent py-2 border-4 border-pink-600   hover:bg-cyan-400 hover:text-pink-600 hover:border-white text-xl  shadow-md shadow-pink-600"
          onClick={handleClick}
        >
          +
        </button>
        <button
          className="rounded-lg text-cyan-400 font-extrabold bg-transparent py-2 border-4 border-pink-600   hover:bg-cyan-400 hover:text-pink-600 hover:border-white text-xl  shadow-md shadow-pink-600"
          onClick={handleClick}
        >
          7
        </button>
        <button
          className="rounded-lg text-cyan-400 font-extrabold bg-transparent py-2 border-4 border-pink-600   hover:bg-cyan-400 hover:text-pink-600 hover:border-white text-xl  shadow-md shadow-pink-600"
          onClick={handleClick}
        >
          8
        </button>
        <button
          className="rounded-lg text-cyan-400 font-extrabold bg-transparent py-2 border-4 border-pink-600   hover:bg-cyan-400 hover:text-pink-600 hover:border-white text-xl  shadow-md shadow-pink-600"
          onClick={handleClick}
        >
          9
        </button>
        <button
          className="rounded-lg text-cyan-400 font-extrabold bg-transparent py-2 border-4 border-pink-600   hover:bg-cyan-400 hover:text-pink-600 hover:border-white text-xl  shadow-md shadow-pink-600"
          onClick={handleClick}
        >
          -
        </button>
        <button
          className="rounded-lg text-cyan-400 font-extrabold bg-transparent py-2 border-4 border-pink-600   hover:bg-cyan-400 hover:text-pink-600 hover:border-white text-xl  shadow-md shadow-pink-600"
          onClick={handleClick}
        >
          4
        </button>
        <button
          className="rounded-lg text-cyan-400 font-extrabold bg-transparent py-2 border-4 border-pink-600   hover:bg-cyan-400 hover:text-pink-600 hover:border-white text-xl  shadow-md shadow-pink-600"
          onClick={handleClick}
        >
          5
        </button>
        <button
          className="rounded-lg text-cyan-400 font-extrabold bg-transparent py-2 border-4 border-pink-600   hover:bg-cyan-400 hover:text-pink-600 hover:border-white text-xl  shadow-md shadow-pink-600"
          onClick={handleClick}
        >
          6
        </button>
        <button
          className="rounded-lg text-cyan-400 font-extrabold bg-transparent py-2 border-4 border-pink-600   hover:bg-cyan-400 hover:text-pink-600 hover:border-white text-xl  shadow-md shadow-pink-600"
          onClick={handleClick}
        >
          *
        </button>
        <button
          className="rounded-lg text-cyan-400 font-extrabold bg-transparent py-2 border-4 border-pink-600   hover:bg-cyan-400 hover:text-pink-600 hover:border-white text-xl  shadow-md shadow-pink-600"
          onClick={handleClick}
        >
          1
        </button>
        <button
          className="rounded-lg text-cyan-400 font-extrabold bg-transparent py-2 border-4 border-pink-600   hover:bg-cyan-400 hover:text-pink-600 hover:border-white text-xl  shadow-md shadow-pink-600"
          onClick={handleClick}
        >
          2
        </button>
        <button
          className="rounded-lg text-cyan-400 font-extrabold bg-transparent py-2 border-4 border-pink-600   hover:bg-cyan-400 hover:text-pink-600 hover:border-white text-xl  shadow-md shadow-pink-600"
          onClick={handleClick}
        >
          3
        </button>
        <button
          className="rounded-lg text-cyan-400 font-extrabold bg-transparent py-2 border-4 border-pink-600   hover:bg-cyan-400 hover:text-pink-600 hover:border-white text-xl  shadow-md shadow-pink-600"
          onClick={handleClick}
        >
          /
        </button>
        <button
          className="rounded-lg text-cyan-400 font-extrabold bg-transparent py-2 border-4 border-pink-600   hover:bg-cyan-400 hover:text-pink-600 hover:border-white text-xl  shadow-md shadow-pink-600"
          onClick={handleClick}
        >
          0
        </button>
        <button
          className="rounded-lg text-cyan-400 font-extrabold bg-transparent py-2 border-4 border-pink-600   hover:bg-cyan-400 hover:text-pink-600 hover:border-white text-xl  shadow-md shadow-pink-600"
          onClick={handleClick}
        >
          00
        </button>
        <button
          className="rounded-lg text-cyan-400 font-extrabold g-transparent py-2 border-4 border-pink-600 hover:bg-cyan-400 hover:text-pink-600 hover:border-white text-xl  shadow-md shadow-pink-600"
          onClick={handleClick}
        >
          .
        </button>
        <button
          className="rounded-lg text-yellow-400 font-extrabold bg-transparent py-2 border-4 border-yellow-400 hover:bg-yellow-400 hover:text-violet-950 hover:border-white text-xl  shadow-md shadow-yellow-400"
          onClick={handleResult}
        >
          =
        </button>
      </div>
      <p className="bg-white font-extrabold mt-3 rounded-xl">{er}</p>
    </main>
  );
}

export default Main;