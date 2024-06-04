import MyContainer from "../../components/MyContainer";
import useData from "../../hooks/useData";
import ProductCard from "./ProductCard";

const Products = () => {
  const { productsData } = useData();
  console.log(productsData);
  return (
    <MyContainer>
      <div className="grid py-16 grid-cols-1 lg:grid-cols-3 gap-10">
        {productsData.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </MyContainer>
  );
};

export default Products;
