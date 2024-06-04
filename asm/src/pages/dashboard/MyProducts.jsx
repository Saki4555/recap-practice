import useAuth from "../../hooks/useAuth";
import useData from "../../hooks/useData";
import MyProductCard from "./MyProductCard";
import UpdateProduct from "./UpdateProduct";

const MyProducts = () => {
  const { user } = useAuth();

  const {productsData, whatToShow, dataLoading, setWhatToShow } = useData();
  console.log(whatToShow);

  

 if(dataLoading) return <div className="text-8xl">Loading</div>
  return whatToShow ? (
    <UpdateProduct></UpdateProduct>
  ) : (
    <div className="space-y-2">
      {productsData
        .filter((item) => item?.sellerEmail === user?.email)
        .map((product) => (
          <MyProductCard
            key={product._id}
            product={product}
            setWhatToShow={setWhatToShow}
          ></MyProductCard>
        ))}
    </div>
  );
};

export default MyProducts;
