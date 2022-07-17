import { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { monsterApi } from "../typesTs/type";
import Card from "./Card";

function fetchingEmojies(url: string): Promise<monsterApi> {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
}

export default function Form() {
  const [value, setValue] = useState("");
  const [monster, setMonster] = useState<monsterApi>([]);

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  useEffect(() => {
    fetchingEmojies("https:jsonplaceholder.typicode.com/users").then((data) =>
      setMonster(data)
    );
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
        <div className="grid grid-cols-5 gap-5 px-4">
          {monster && monster.map((item) => <Card key={item.id} {...item} />)}
        </div>
      </form>
    </>
  );
}
