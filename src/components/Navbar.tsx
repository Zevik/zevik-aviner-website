
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isCommunitiesOpen, setIsCommunitiesOpen] = useState(false);
  const [isExtensionsOpen, setIsExtensionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isCommunitiesOpen) setIsCommunitiesOpen(false);
    if (isExtensionsOpen) setIsExtensionsOpen(false);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 fixed w-full z-50 animate-slideIn" dir="rtl">
      <div className="classic-container">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="order-last">
            <img 
              src="/lovable-uploads/b739aeaa-923a-4308-b50c-0f8bbfa3289a.png" 
              alt="זבינק לוגו" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
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
                  <Link to="/communities/legal" 
                        className="block px-4 py-2 hover:bg-gray-100 text-right">
                    אחריות משפטית
                  </Link>
                  <Link to="/communities/insights" 
                        className="block px-4 py-2 hover:bg-gray-100 text-right">
                    תובנות וניהול
                  </Link>
                </div>
              )}
            </div>
            <div className="relative group"
                 onMouseEnter={() => setIsExtensionsOpen(true)}
                 onMouseLeave={() => setIsExtensionsOpen(false)}>
              <button className="nav-link">
                תוספים ואוטומציות
              </button>
              {isExtensionsOpen && (
                <div className="absolute top-full right-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] animate-fadeIn" dir="rtl">
                  <Link to="/extensions/gmac" 
                        className="block px-4 py-2 hover:bg-gray-100 text-right">
                    GMAC
                  </Link>
                  <Link to="/extensions/groups-monitoring" 
                        className="block px-4 py-2 hover:bg-gray-100 text-right">
                    GroupsMonitoring
                  </Link>
                  <Link to="/extensions/reply-comments" 
                        className="block px-4 py-2 hover:bg-gray-100 text-right">
                    ReplyComments
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

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-primary hover:text-primary/80 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="תפריט"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 animate-fadeIn">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-2 text-primary hover:bg-gray-100 rounded-md"
                onClick={toggleMobileMenu}
              >
                דף הבית
              </Link>
              <div>
                <button 
                  onClick={() => setIsCommunitiesOpen(!isCommunitiesOpen)}
                  className="w-full px-3 py-2 text-primary hover:bg-gray-100 rounded-md text-right"
                >
                  עולם הקהילות
                </button>
                {isCommunitiesOpen && (
                  <div className="pr-6 mt-2 space-y-1">
                    <Link 
                      to="/communities/shaming" 
                      className="block px-3 py-2 text-primary hover:bg-gray-100 rounded-md"
                      onClick={toggleMobileMenu}
                    >
                      שיימינג
                    </Link>
                    <Link 
                      to="/communities/legal" 
                      className="block px-3 py-2 text-primary hover:bg-gray-100 rounded-md"
                      onClick={toggleMobileMenu}
                    >
                      אחריות משפטית
                    </Link>
                    <Link 
                      to="/communities/insights" 
                      className="block px-3 py-2 text-primary hover:bg-gray-100 rounded-md"
                      onClick={toggleMobileMenu}
                    >
                      תובנות וניהול
                    </Link>
                  </div>
                )}
              </div>
              <div>
                <button 
                  onClick={() => setIsExtensionsOpen(!isExtensionsOpen)}
                  className="w-full px-3 py-2 text-primary hover:bg-gray-100 rounded-md text-right"
                >
                  תוספים ואוטומציות
                </button>
                {isExtensionsOpen && (
                  <div className="pr-6 mt-2 space-y-1">
                    <Link 
                      to="/extensions/gmac" 
                      className="block px-3 py-2 text-primary hover:bg-gray-100 rounded-md"
                      onClick={toggleMobileMenu}
                    >
                      GMAC
                    </Link>
                    <Link 
                      to="/extensions/groups-monitoring" 
                      className="block px-3 py-2 text-primary hover:bg-gray-100 rounded-md"
                      onClick={toggleMobileMenu}
                    >
                      GroupsMonitoring
                    </Link>
                    <Link 
                      to="/extensions/reply-comments" 
                      className="block px-3 py-2 text-primary hover:bg-gray-100 rounded-md"
                      onClick={toggleMobileMenu}
                    >
                      ReplyComments
                    </Link>
                  </div>
                )}
              </div>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-primary hover:bg-gray-100 rounded-md"
                onClick={toggleMobileMenu}
              >
                אודות
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-primary hover:bg-gray-100 rounded-md"
                onClick={toggleMobileMenu}
              >
                צור קשר
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
