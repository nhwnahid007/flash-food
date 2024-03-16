import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
const Navbar = () => {
    return (
        <div>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
      <li><a>Receips</a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
        
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Food Flash</a>
  </div>
  <div className="navbar-center lg:mr-24 hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Receips</a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
      
    </ul>
  </div>
  <div className="navbar-end space-x-3 md:mr-5">
  <label className="input w-[30%] pl-16 lg:w-full lg:pl-5 bg-[#150B2B0D] rounded-full  flex justify-center items-center lg:gap-2">

  <div className="text-2xl hidden md:flex font-bold"><CiSearch /></div>
 
  <input type="text" className="border-none" placeholder="Search" />
</label>
    <a className="btn rounded-full text-2xl bg-green-500"><CiUser /></a>
  </div>
</div> 
        </div>
    );
};

export default Navbar;