import toast from "react-hot-toast";
import { updateProductToDb } from "../../api/apiHandler";
import useData from "../../hooks/useData";

const UpdateProduct = () => {
  const { toUpdate, setWhatToShow,reRender, setReRender } = useData();
  console.log(reRender);


  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const price = form.price.value;
    const brand = form.brand.value;
    const sellerEmail = toUpdate?.sellerEmail;
    const UpdatedProduct = {
      id: toUpdate?._id,
      productName,
      price,
      brand,
      sellerEmail,
    };

    updateProductToDb(UpdatedProduct)
      .then((resData) => {
        console.log(resData);
        toast.success("Updated Successfully");
        setReRender((prev) => !prev)
        setWhatToShow(false);
        form.reset();
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-md">
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Product Name</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            type="text"
            id="name"
            name="productName"
            defaultValue={toUpdate?.productName}
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
            id="password"
            name="price"
            defaultValue={toUpdate?.price}
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
            defaultValue={toUpdate?.brand}
            required
          />
        </div>
        <div>
          <button
            className="w-full bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
