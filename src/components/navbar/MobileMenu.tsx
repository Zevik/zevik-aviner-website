
import { Link } from "react-router-dom";
import MobileNavItem from "./MobileNavItem";

interface MobileMenuProps {
  isOpen: boolean;
  isCommunitiesOpen: boolean;
  isExtensionsOpen: boolean;
  isArticlesOpen: boolean;
  isIndependentOpen: boolean;
  onToggleCommunities: () => void;
  onToggleExtensions: () => void;
  onToggleArticles: () => void;
  onToggleIndependent: () => void;
  onCloseMenu: () => void;
}

const MobileMenu = ({
  isOpen,
  isCommunitiesOpen,
  isExtensionsOpen,
  isArticlesOpen,
  isIndependentOpen,
  onToggleCommunities,
  onToggleExtensions,
  onToggleArticles,
  onToggleIndependent,
  onCloseMenu,
}: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white border-t border-gray-200 animate-fadeIn">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <MobileNavItem to="/" label="דף הבית" onClick={onCloseMenu} />
        
        <MobileNavItem 
          label="עולם הקהילות"
          onClick={onToggleCommunities}
          isSubmenu={true}
        >
          {isCommunitiesOpen && (
            <>
              <MobileNavItem to="/communities/shaming" label="שיימינג" onClick={onCloseMenu} />
              <MobileNavItem to="/communities/legal" label="אחריות משפטית" onClick={onCloseMenu} />
              <MobileNavItem to="/communities/insights" label="תובנות וניהול" onClick={onCloseMenu} />
              <MobileNavItem to="/communities/virtual-synagogue" label="בית הכנסת הווירטואלי" onClick={onCloseMenu} />
              <MobileNavItem to="/communities/virtual-square" label="כיכר השוק הווירטואלית" onClick={onCloseMenu} />
              <MobileNavItem to="/communities/monetization" label="מוניטיזציה למנהלי קבוצות" onClick={onCloseMenu} />
              <MobileNavItem to="/communities/marketing-writing" label="כתיבה שיווקית" onClick={onCloseMenu} />
            </>
          )}
        </MobileNavItem>

        <MobileNavItem 
          label="תוספים ואוטומציות"
          onClick={onToggleExtensions}
          isSubmenu={true}
        >
          {isExtensionsOpen && (
            <>
              <MobileNavItem to="/extensions/gmac" label="GMAC" onClick={onCloseMenu} />
              <MobileNavItem to="/extensions/groups-monitoring" label="GroupsMonitoring" onClick={onCloseMenu} />
              <MobileNavItem to="/extensions/reply-comments" label="ReplyComments" onClick={onCloseMenu} />
            </>
          )}
        </MobileNavItem>

        <MobileNavItem 
          label="מאמרים"
          onClick={onToggleArticles}
          isSubmenu={true}
        >
          {isArticlesOpen && (
            <>
              <MobileNavItem to="/articles/why-not-haredim" label="למה אסור לכתוב 'חרדים'?" onClick={onCloseMenu} />
              <MobileNavItem to="/articles/war-on-stereotypical-language" label="מלחמה בשפה סטריאוטיפית" onClick={onCloseMenu} />
              <MobileNavItem to="/articles/the-haredim" label="אז מי הם באמת החרדים?" onClick={onCloseMenu} />
            </>
          )}
        </MobileNavItem>

        <MobileNavItem 
          label="עצמאים ועצמאיות"
          onClick={onToggleIndependent}
          isSubmenu={true}
        >
          {isIndependentOpen && (
            <>
              <MobileNavItem to="/independent/small-business" label="עוסק זעיר" onClick={onCloseMenu} />
              <MobileNavItem to="/independent/deposit-fund" label="קרן השתלמות" onClick={onCloseMenu} />
            </>
          )}
        </MobileNavItem>

        <MobileNavItem to="/about" label="אודות" onClick={onCloseMenu} />
        <MobileNavItem to="/contact" label="צור קשר" onClick={onCloseMenu} />
      </div>
    </div>
  );
};

export default MobileMenu;
