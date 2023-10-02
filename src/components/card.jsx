import { useContext } from "react";
import { AppContext } from "../App";

const Card = () => {
  const contextData = useContext(AppContext);

  console.log(contextData);

  return (
    <div>
      {contextData.count}
      <button onClick={() => contextData.setCount((prev) => prev + 1)}>
        Click
      </button>
    </div>
  );
};

export default Card;
