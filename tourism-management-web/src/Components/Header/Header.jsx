/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import "./header.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosLogIn } from "react-icons/io";
import { AuthContext } from "../../Utilities/AuthContextProvider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // eslint-disable-next-line no-unused-vars

    const navigate = useNavigate()
    const handleLogOut = () => {

        logOut()
            .then(() => {
                toast.success("Successfully logged out");

                navigate('/');
            })
            .catch(error => {

                toast.error(error.message);
            });
    }


    const navigation = (
        <div
            className="flex lg:flex-row flex-col gap-10 items-start p-4 lg:p-0 lg:items-center"
            id="navigation"
        >
            <NavLink to="/">
                <a>
                    <li>Home</li>
                </a>
            </NavLink>
            <NavLink to="/allSpot">
                <a>
                    <li>All Tourists Spots</li>
                </a>
            </NavLink>
            <NavLink to="/login">
                <a>
                    <li>Sign In</li>
                </a>
            </NavLink>
            <NavLink to="/register">
                <a>
                    <li>Register</li>
                </a>
            </NavLink>
            <NavLink to="/addTourists">
                <a>
                    <li>Add Tourists Spot</li>
                </a>
            </NavLink>
        </div>
    );
    const AuthenticatedDropdown = ({ user, handleLogOut }) => (
        <div className="dropdown dropdown-end">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
            >
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src={
                            user
                                ? user.photoURL
                                : <img className="w-[100px] border-2 border-primaryPurple rounded-full" src="https://i.ibb.co/nC23FQB/Screenshot-2024-04-15-at-15-53-08.png"></img>
                        }
                    />
                </div>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
                <li className="pt-2 pb-2">
                    <span>{user.displayName}</span>
                    <a className="justify-between text-xs">{user.email}</a>
                </li>
                <li>
                    <button
                        onClick={handleLogOut}
                        className="pt-1 pb-1 pr-2 pl-2 bg-red-500 w-[70px] text-xs mt-2 ml-3 text-center rounded-full text-white "
                    >
                        Log Out
                    </button>
                </li>
            </ul>
        </div>
    );

    const UnauthenticatedDropdown = () => (
        <div className="dropdown dropdown-end flex items-center gap-2 justify-center text-sm font-bold rounded-full p-3 bg-primaryPurple w-[120px] text-primaryWhite ">
            <IoIosLogIn></IoIosLogIn>
            <Link to="/login">
                <button >
                    Sign In
                </button>
            </Link>
        </div>
    );

    return (
        <div className="navbar bg-primaryWhite    relative mx-auto p-3 z-20   ">
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
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navigation}
                    </ul>
                </div>
                <Link to="/">
                    <img
                        alt="logo"
                        src="https://i.ibb.co/fSzys6C/logo2.png"
                        className=""
                    />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navigation}</ul>
            </div>
            
            <div className="navbar-end">
            <label className="flex cursor-pointer gap-2 mr-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </label>
                {user ? (
                    <AuthenticatedDropdown user={user} handleLogOut={handleLogOut} />
                ) : (
                    <UnauthenticatedDropdown />
                )}
            </div>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Header;
