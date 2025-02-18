
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isCommunitiesOpen, setIsCommunitiesOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 fixed w-full z-50 animate-slideIn" dir="rtl">
      <div className="classic-container">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8 space-x-reverse">
            <Link to="/" className="font-serif text-xl font-medium order-first">
              לוגו
            </Link>
            <Link to="/" className="nav-link">
              דף הבית
            </Link>
            <div className="relative group"
                 onMouseEnter={() => setIsCommunitiesOpen(true)}
                 onMouseLeave={() => setIsCommunitiesOpen(false)}>
              <button className="nav-link">
                עולם הקהילות
              </button>
              {isCommunitiesOpen && (
                <div className="absolute top-full right-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] animate-fadeIn" dir="rtl">
                  <Link to="/communities/shaming" 
                        className="block px-4 py-2 hover:bg-gray-100 text-right">
                    שיימינג
                  </Link>
                </div>
              )}
            </div>
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
