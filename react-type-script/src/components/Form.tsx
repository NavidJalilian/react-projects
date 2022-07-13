import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
export default function Form() {
  const [value, setValue] = useState("");
  const [isVisble, setIsVisble] = useState(false);

  function onClickHandler() {
    setIsVisble(!isVisble);
  }
  function onChangeHandler (e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.currentTarget);
    setValue(e.target.value);
    
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input
          value={value}
          setValue={setValue}
          placeholder="search"
          onChangeHandler={onChangeHandler}
        />
        <Button onClickHandler={onClickHandler} type={"submit"} >
          generate
        </Button>
        {isVisble && <div>{value}</div>}
      </form>
    </>
  );
}
