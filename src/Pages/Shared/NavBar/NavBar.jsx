import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";



const NavBar = () => {

  const {user,logOut}=useContext(AuthContext);
  const handleLogOut=()=>{
    logOut()
    .then(()=>{
      localStorage.removeItem('car-access-token')
    })
    .catch(error=>console.log(error))
  }

    const navItems =<>
        <li><Link className="font-bold" to='/'>Home</Link></li>
        <li><Link className="font-bold" to='/doctors'>Doctors</Link></li>
        <li><Link className="font-bold" to='/clinics'>clinics</Link></li>
        <li><Link className="font-bold" to="/medicines">Medicines</Link></li>
        <li><Link className="font-bold" to='/clinics'>clinics</Link></li>
    </>

  return (
    <div className="navbar bg-base-100 h-24 mb-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           {navItems}
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost text-xl"><img className="bg-auto" src={logo}></img></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        {
          user?.email? <Link to='/checkouts'  className="btn btn-outline btn-secondary">Appoinment Details</Link>:
          <Link to='/login' className="btn btn-outline btn-secondary">Book Appoinment</Link>
        }
        {
          user?.email ? 
        <button className="btn btn-outline btn-primary" onClick={handleLogOut}><Link>Log Out</Link></button>
        :<button className="btn btn-outline btn-primary"><Link to='/login'>Log In</Link></button>
        }
      </div>
    </div>
  );
};

export default NavBar;
