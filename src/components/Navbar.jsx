import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar bg-base-100">
      <div className="cite-container flex justify-between items-center w-full mt-10">
        <Link to="/" className="btn btn-success normal-case text-xl">
          Where in the world?
        </Link>
        <button className=" bg-slate-200  py-3 px-6 text-black hover:bg-black hover:text-white transition">Click</button>
      </div>
    </header>
  );
}

export default Navbar;