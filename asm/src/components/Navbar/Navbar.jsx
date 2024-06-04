import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import profile from '../../assets/profile.png';
const Navbar = () => {
  const { user, LogOut } = useAuth();

  const handleLogOut = () => {
    LogOut()
      .then()
      .catch((err) => console.log(err.message));
  };
  const navOptions = (
    <>
      {" "}
      <li className="">
        <NavLink to="/">Home</NavLink>
      </li>
      <li><NavLink to='/products'>Products</NavLink></li>
      <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
    </>
  );
  return (
    <div className="navbar bg-gray-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm space-y-1 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl">ASM</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="profile"
                  src={profile}
                  // src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to='/profile' className="justify-between">Profile</Link>
              </li>
             
              <li>
                <a onClick={handleLogOut}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link to={"/login"} className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
