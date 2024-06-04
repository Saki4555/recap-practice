import toast from "react-hot-toast";
import { deleteProductFromDb } from "../../api/apiHandler";
import backpack from "../../assets/backpack.jpeg";
import useData from "../../hooks/useData";
const MyProductCard = ({ product, setWhatToShow }) => {
  const { setToUpdate, setReRender } = useData();

  const handleDelete = () => {
    deleteProductFromDb(product._id).then((resData) => {
      console.log(resData);
      toast.success("Deleted Successfully");
      setReRender(prev => !prev)
    });
  };

  return (
    <div className="flex bg-gray-300 shadow-2xl border border-gray-400 gap-10 p-2 pr-6 h-20 w-[500px]">
      <img src={backpack} alt="" />
      <div className="text-sm font-semibold">
        <p>{product?.productName}</p>
        <p>$ {product?.price}</p>
        <p>Brand: {product?.brand}</p>
      </div>

      <div className="flex flex-col gap-2 ml-auto justify-center">
        <button
          onClick={() => {
            setToUpdate(product);
            setWhatToShow(true);
          }}
          className="btn btn-sm btn-primary"
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          className="btn btn-sm  btn-error text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyProductCard;
