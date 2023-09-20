// styledComponents , css modules , scss , css

// useState , useEffect

export const ProductList = (prop) => {
  return (
    <div className="test">
      <img
        style={{ width: 400, height: 500, objectFit: "cover" }}
        src={prop.products.image}
        alt="image"
      />
      <p>Name: {prop.products.name}</p>
      <p>Price: Rs.{prop.products.price}</p>
    </div>
  );
};
