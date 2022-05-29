import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import Test from "./Test";
const getLocsaStorage = () => {
  const list = localStorage.getItem("list");
  return list ? JSON.parse(localStorage.getItem("list")) : [];
};
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocsaStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  const removeAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      //display alert
      setAlert({ show: true, msg: "Enter item first !", type: "danger" });
    } else if (name && isEditing) {
      //deal with edit
      setList(
        list.map((item) => {
          return item.id === editId ? { ...item, title: name } : item;
        })
      );
      setName("");
      setIsEditing(null);
      setEditId(false);
      setAlert({ show: true, msg: "Item edited !", type: "success" });
    } else {
      //show alert
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
      setAlert({ show: true, msg: "item added to the list", type: "success" });
    }
  }

  function clearList() {
    if (list.length === 0) {
      setAlert({ show: true, msg: "nothing to delete", type: "danger" });
      return;
    }
    setList([]);
    setAlert({ show: true, msg: "empty list", type: "success" });
    setList([]);
  }

  function removeItem(id) {
    //remove item from list
    const newList = list.filter((item) => item.id !== id);
    setAlert({
      show: true,
      msg: "item removed from the list",
      type: "success",
    });
    setList(newList);
  }

  function editItem(id) {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(specificItem.title);
  }

  return (
    <section className="section-center">
      <form
        action=""
        method=""
        className="grocery-form"
        onSubmit={handleSubmit}
      >
        {alert.show && (
          <Alert {...alert} removeAlert={removeAlert} list={list} />
        )}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            placeholder="e.g eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "update" : "add"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <h1 className="center">hello</h1>
        <List list={list} removeItem={removeItem} editItem={editItem} />
        {list.length > 0 && (
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        )}
      </div>
    </section>
  );
}

export default App;
