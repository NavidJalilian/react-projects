import { useState } from "react";
import "./App.css";

const sayMyname: (name: string, year: number) => string = (name, year) => {
  return `My name is ${name} and I was born in ${year}`;
};
function App() {
  return (
    <div className="App    h-screen">
      <h4 className="text-gray-900 text-center pt-5 text-2xl uppercase">
        working
      </h4>
      <Input placeholder="search" />
      {/* call to action btn */}
      <Button />
      <Paragraph />
    </div>
  );
}

export default App;

function Input({ placeholder }: { placeholder: string }) {
  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    console.log("changed");
    console.log(e.target.offsetParent);
  }
  return (
    <div className="capitalize mx-auto container p-1 relative flex w-full flex-wrap items-stretch mb-3">
      <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300  rounded text-base items-center justify-center w-8 pl-3 py-3"></span>
      <input
        type="text"
        placeholder={placeholder}
        className=" capitalize px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10"
        onChange={onChangeHandler}
      />
    </div>
  );
}

function Button() {
  const [name, setName] = useState("");
  function clickHandler(e: React.MouseEvent<HTMLButtonElement>) {
    setName(sayMyname("John", 2020));
    if (name !== "") setName("");
  }

  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold capitalize text-xs px-4 py-2 rounded shadow hover:shadow-md  outline-offset-2 focus:outline-pink-400  mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={clickHandler}
      >
        {!name ? "  say My name" : "lie ?"}
      </button>
      {name && <Paragraph text={name} />}
    </>
  );
}

function Paragraph({ text }: { text?: string }) {
  return (
    <>
      <p className="text-base  leading-relaxed mt-0 mb-0 text-pink-800">
        {text}
      </p>
      <footer className="block text-pink-600">
        - Someone famous in <cite>Source Title</cite>
      </footer>
    </>
  );
}
