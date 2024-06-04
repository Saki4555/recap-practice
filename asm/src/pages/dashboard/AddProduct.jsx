import toast from "react-hot-toast";
import { addProductToDb } from "../../api/apiHandler";
import useAuth from "../../hooks/useAuth";

const AddProduct = () => {
    const { user } = useAuth();


  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const price = form.price.value;
    const brand = form.brand.value;
    const sellerEmail = user?.email;
    const product = { productName, price, brand, sellerEmail };

    addProductToDb(product)
      .then((resData) => {
        console.log(resData);
        toast.success("Product added successfully");
        form.reset();
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-md">
      <form onSubmit={handleAddProduct}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Product Name</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            id="name"
            name="productName"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Image</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            name="image"
            defaultValue="product-image.jpg"
            // readOnly
            disabled
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Price
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="number"
            id="price"
            name="price"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Brand</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            id="confirm-password"
            name="brand"
            required
          />
        </div>
        <div>
          <button
            className="w-full bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
