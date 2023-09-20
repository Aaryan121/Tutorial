import React, { useEffect, useState } from "react";

function Lifecycle() {
  const [name, setName] = useState("");

  return (
    <>
      <div>{name}</div>
      <input onChange={(e) => setName(e.target.value)} />
    </>
  );
}

export default Lifecycle;
