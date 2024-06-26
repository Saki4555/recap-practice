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
      <div className="bg-indigo-950 text-white text-lg font-semibold w-1/4 flex flex-col justify-center items-center">
        <ul className="space-y-2">
          {" "}
          {items.map((item, idx) => (
            <li
              className={`cursor-pointer ${active === items[idx] ? "text-gray-400" : ""} `}
              key={item}
              onClick={() => setActive(items[idx])}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-teal-300 w-3/4  flex justify-center items-center">{content}</div>
    </div>
  );
};

export default Dashboard;
