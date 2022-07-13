import { useState } from "react";
import { InputProps } from "../typesTs/type";

export default function Input({ placeholder, onChangeHandler }: InputProps) {
  const [value, setValue] = useState("");

  onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="capitalize mx-auto container p-1 relative flex w-full flex-wrap items-stretch mb-3">
      <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300  rounded text-base items-center justify-center w-8 pl-3 py-3"></span>
      <input
        value={value}
        type="text"
        placeholder={placeholder}
        className=" capitalize px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10"
        onChange={onChangeHandler}
      />
    </div>
  );
}
