export const ImageComponent = (e) => {
  return (
    <div>
      <img
        style={{
          width: 400,
          height: 400,
          objectFit: "contain",
        }}
        src={e.link}
        alt="image"
      />
      <p>{e.name}</p>
      <p>{e.age}</p>
      <p>{e.ratio}</p>
    </div>
  );
};
