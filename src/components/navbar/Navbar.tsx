
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useNavbar } from "./useNavbar";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const {
    isCommunitiesOpen,
    isExtensionsOpen,
    isArticlesOpen,
    isIndependentOpen,
    isAIOpen,
    isMobileMenuOpen,
    setIsCommunitiesOpen,
    setIsExtensionsOpen,
    setIsArticlesOpen,
    setIsIndependentOpen,
    setIsAIOpen,
    toggleMobileMenu,
  } = useNavbar();

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

          <DesktopNav
            isCommunitiesOpen={isCommunitiesOpen}
            isExtensionsOpen={isExtensionsOpen}
            isArticlesOpen={isArticlesOpen}
            isIndependentOpen={isIndependentOpen}
            isAIOpen={isAIOpen}
            onCommunitiesEnter={() => setIsCommunitiesOpen(true)}
            onCommunitiesLeave={() => setIsCommunitiesOpen(false)}
            onExtensionsEnter={() => setIsExtensionsOpen(true)}
            onExtensionsLeave={() => setIsExtensionsOpen(false)}
            onArticlesEnter={() => setIsArticlesOpen(true)}
            onArticlesLeave={() => setIsArticlesOpen(false)}
            onIndependentEnter={() => setIsIndependentOpen(true)}
            onIndependentLeave={() => setIsIndependentOpen(false)}
            onAIEnter={() => setIsAIOpen(true)}
            onAILeave={() => setIsAIOpen(false)}
          />

          <button 
            className="md:hidden p-2 text-primary hover:text-primary/80 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="תפריט"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <MobileMenu
          isOpen={isMobileMenuOpen}
          isCommunitiesOpen={isCommunitiesOpen}
          isExtensionsOpen={isExtensionsOpen}
          isArticlesOpen={isArticlesOpen}
          isIndependentOpen={isIndependentOpen}
          isAIOpen={isAIOpen}
          onToggleCommunities={() => setIsCommunitiesOpen(!isCommunitiesOpen)}
          onToggleExtensions={() => setIsExtensionsOpen(!isExtensionsOpen)}
          onToggleArticles={() => setIsArticlesOpen(!isArticlesOpen)}
          onToggleIndependent={() => setIsIndependentOpen(!isIndependentOpen)}
          onToggleAI={() => setIsAIOpen(!isAIOpen)}
          onCloseMenu={toggleMobileMenu}
        />
      </div>
    </nav>
  );
};

export default Navbar;
