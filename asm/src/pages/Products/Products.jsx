import useData from "../../hooks/useData";


const Products = () => {
    const { productsData} = useData();
    console.log(productsData);
    return (
        <div>
            
        </div>
    );
};

export default Products;