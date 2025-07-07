// import React from "react";

// function BuggyComponent() {
//     throw new Error("I crashed!");

//     return <div>This will not render</div>;
// }

// export default BuggyComponent;


import React, { useState } from "react";

function BuggyComponent() {
  const [crash, setCrash] = useState(false);

  if (crash) {
    throw new Error("I crashed!");
  }

  return (
    <div>
      <p>This component is working.</p>
      <button onClick={() => setCrash(true)}>Crash me</button>
    </div>
  );
}

export default BuggyComponent;
