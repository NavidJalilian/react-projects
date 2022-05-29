import React from "react";

export default function Test() {
  const [name, setName] = React.useState(false);

  return (
    <div>
      {name ? <h1>true</h1> : <h1>false</h1>}
      <button className="submit-btn" onClick={()=>set}>toggle</button>
    </div>
  );
}
