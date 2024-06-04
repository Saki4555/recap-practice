import { useContext } from "react";
import { DataContext } from "../providers/DataProvider";

const useData = () => {
  return useContext(DataContext);
};

export default useData;
