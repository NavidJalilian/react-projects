import { ButtonProps } from "../typesTs/type";

export default function Button({ onClickHandler, type,children }: ButtonProps) {
  return (
    <>
      <button
        type={type}
        onClick={onClickHandler}
        className="bg-pink-500 text-white
         active:bg-pink-600 font-bold capitalize text-xs
          px-4 py-2 rounded shadow hover:shadow-2xl  
          outline-offset-2 focus:outline-pink-400  
          mr-1 mb-1 ease-linear transition-all duration-150"
      >
        
        {children}
      </button>
    </>
  );
}
