export const Name = (props) => {
  return (
    <div
      style={{
        backgroundColor: "violet",
        margin: "40px",
        borderRadius: "5px",
        width: "80px",
        color: "black",
      }}
    >
      name : {props.name}
    </div>
  );
};
