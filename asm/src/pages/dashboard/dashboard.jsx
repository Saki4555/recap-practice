import { useState } from "react";
import AddProduct from "./AddProduct";
import MyProducts from "./MyProducts";

const Dashboard = () => {
  const items = ["Home", "Add Product", "My Products"];
  const [active, setActive] = useState(items[0]);


  const content =
    active === "Home" ? (
      <div>Home</div>
    ) : active === "Add Product" ? (
      <AddProduct></AddProduct>
    ) : (
      <MyProducts></MyProducts>
    );
  return (
    <div className="flex min-h-[calc(100vh-70px)]">
      <div className="bg-red-200 w-1/4">
        <ul className="space-y-2">
          {" "}
          {items.map((item, idx) => (
            <li
              className={`cursor-pointer ${active === items[idx] ? "text-gray-500" : ""} `}
              key={item}
              onClick={() => setActive(items[idx])}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-purple-200 w-3/4  flex justify-center items-center">{content}</div>
    </div>
  );
};

export default Dashboard;
