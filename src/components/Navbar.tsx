
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 fixed w-full z-50 animate-slideIn">
      <div className="classic-container">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-serif text-xl font-medium">
            לוגו
          </Link>
          <div className="flex space-x-8 rtl:space-x-reverse">
            <Link to="/" className="nav-link">
              דף הבית
            </Link>
            <Link to="/about" className="nav-link">
              אודות
            </Link>
            <Link to="/contact" className="nav-link">
              צור קשר
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
