import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  console.log(loading);
  const location = useLocation();

  if (loading)
    return (
      <div className="text-8xl text-gray-700 mx-auto mt-28 font-semibold">
        Loading....
      </div>
    );

  if (user) return children;
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
