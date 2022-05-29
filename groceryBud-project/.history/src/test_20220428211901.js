import React from "react";

export default function Test() {
  const [isvisible, setIsVisible] = React.useState(false);

  return (
    <div>
      {isvisible ? <h1>true</h1> : <h1>false</h1>}
      <button className="submit-btn" onClick={()=>setIsVisible(n=>)}>toggle</button>
    </div>
  );
}
