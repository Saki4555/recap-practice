const ProductCard = ({product}) => {
    console.log(product);
  return (
    <div className="card card-compact w-64 mx-auto lg:w-80 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.productName}</h2>
        <p>Price: ${product.price}</p>
        <p>Brand: {product.brand}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
