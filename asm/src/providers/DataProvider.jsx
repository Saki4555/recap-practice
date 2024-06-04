import { createContext, useEffect, useState } from "react";
import { getProductFromDb } from "../api/apiHandler";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [toUpdate, setToUpdate] = useState(null);
  const [whatToShow, setWhatToShow] = useState(false);
  const [reRender, setReRender] = useState(false);
  console.log(toUpdate);

  useEffect(() => {
    setDataLoading(true);
    getProductFromDb()
      .then((resData) => {
        console.log(resData);
        setProductsData(resData);
        setDataLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setDataLoading(false);
      });
  }, [reRender]);

  const productInfo = {
    productsData,
    dataLoading,
    toUpdate,
    setToUpdate,
    whatToShow,
    setWhatToShow,
    reRender,
    setReRender,
  };
  return (
    <DataContext.Provider value={productInfo}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
