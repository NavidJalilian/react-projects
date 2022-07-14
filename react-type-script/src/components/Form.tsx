import { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { ApiEmojy } from "../typesTs/type";
export default function Form() {
  const [value, setValue] = useState("");
  const [isVisble, setIsVisble] = useState(false);
  const [emojies, setEmojies] = useState({});

  function onClickHandler() {
    setIsVisble(!isVisble);
  }
  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.currentTarget);
    setValue(e.target.value);
  }
  useEffect(() => {
    const fetchData = () => {
      try {
        fetch("https://emojihub.herokuapp.com/api/random")
          .then((response) => response.json())
          .then((quotes) => setEmojies({ ...quotes }))
          console.log(emojies)
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input
          value={value}
          setValue={setValue}
          placeholder="search"
          onChangeHandler={onChangeHandler}
        />
        <Button onClickHandler={onClickHandler} type={"submit"}>
          generate
        </Button>
        {isVisble && <div>{value}</div>}
      </form>
    </>
  );
}
