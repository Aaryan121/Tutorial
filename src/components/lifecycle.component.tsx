import React, { useEffect, useState } from "react";
import Card from "./card";

function Lifecycle() {
  const [data, setData] = useState(null);

  const getData = async () => {
    //get method
    const apiData = await fetch("https://fakestoreapi.com/products");
    const jsonData = await apiData.json();

    setData(jsonData);
    console.log(jsonData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="wrapper">
      {data?.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
}

export default Lifecycle;
