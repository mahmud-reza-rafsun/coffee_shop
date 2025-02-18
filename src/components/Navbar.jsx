import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow bg-amber-50 sticky top-0 z-50">
      <div className="navbar flex justify-between items-center max-w-3xl lg:max-w-6xl mx-auto">
        <div className="navbar-start">
          <Link to="/" className="font-semibold text-2xl">
            Coffee Shop
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 font-semibold">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/coffee">Coffee</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </ul>
        </div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box absolute right-0 z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/coffee">Coffee</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
