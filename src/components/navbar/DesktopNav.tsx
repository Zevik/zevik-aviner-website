import { Link } from "react-router-dom";
import NavDropdown from "./NavDropdown";

interface DesktopNavProps {
  isCommunitiesOpen: boolean;
  isExtensionsOpen: boolean;
  isArticlesOpen: boolean;
  isIndependentOpen: boolean;
  onCommunitiesEnter: () => void;
  onCommunitiesLeave: () => void;
  onExtensionsEnter: () => void;
  onExtensionsLeave: () => void;
  onArticlesEnter: () => void;
  onArticlesLeave: () => void;
  onIndependentEnter: () => void;
  onIndependentLeave: () => void;
}

const DesktopNav = ({
  isCommunitiesOpen,
  isExtensionsOpen,
  isArticlesOpen,
  isIndependentOpen,
  onCommunitiesEnter,
  onCommunitiesLeave,
  onExtensionsEnter,
  onExtensionsLeave,
  onArticlesEnter,
  onArticlesLeave,
  onIndependentEnter,
  onIndependentLeave,
}: DesktopNavProps) => {
  const communityLinks = [
    { to: "/communities/shaming", label: "שיימינג" },
    { to: "/communities/legal", label: "אחריות משפטית" },
    { to: "/communities/insights", label: "תובנות וניהול" },
    { to: "/communities/virtual-synagogue", label: "בית הכנסת הווירטואלי" },
    { to: "/communities/virtual-square", label: "גשרים דיגיטליים" },
    { to: "/communities/monetization", label: "מוניטיזציה למנהלי קבוצות" },
    { to: "/communities/marketing-writing", label: "כתיבה שיווקית" },
  ];

  const extensionLinks = [
    { to: "/extensions/gmac", label: "GMAC" },
    { to: "/extensions/groups-monitoring", label: "GroupsMonitoring" },
    { to: "/extensions/reply-comments", label: "ReplyComments" },
  ];

  const articleLinks = [
    { to: "/articles/why-not-haredim", label: "למה אסור לכתוב 'חרדים'?" },
    { to: "/articles/war-on-stereotypical-language", label: "מלחמה בשפה סטריאוטיפית" },
    { to: "/articles/the-haredim", label: "אז מי הם באמת החרדים?" },
  ];

  const independentLinks = [
    { to: "/independent/small-business", label: "עוסק זעיר" },
    { to: "/independent/deposit-fund", label: "קרן השתלמות" },
    { to: "/independent/cash-fund", label: "קרן כספית" },
    { to: "/independent/practical-guide-global-contract", label: "חוזה גלובלי" },
    { to: "/independent/worker-employer-relations", label: "יחסי עובד-מעביד" },
    { to: "/independent/self-employed-in-israel", label: "עצמאים בישראל" },
  ];

  return (
    <div className="hidden md:flex items-center space-x-8 space-x-reverse">
      <Link to="/" className="nav-link">
        דף הבית
      </Link>
      
      <div className="relative group"
           onMouseEnter={onCommunitiesEnter}
           onMouseLeave={onCommunitiesLeave}>
        <button className="nav-link">
          עולם הקהילות
        </button>
        <NavDropdown isOpen={isCommunitiesOpen} links={communityLinks} />
      </div>

      <div className="relative group"
           onMouseEnter={onExtensionsEnter}
           onMouseLeave={onExtensionsLeave}>
        <button className="nav-link">
          תוספים ואוטומציות
        </button>
        <NavDropdown isOpen={isExtensionsOpen} links={extensionLinks} />
      </div>

      <div className="relative group"
           onMouseEnter={onArticlesEnter}
           onMouseLeave={onArticlesLeave}>
        <button className="nav-link">
          מאמרים
        </button>
        <NavDropdown isOpen={isArticlesOpen} links={articleLinks} />
      </div>

      <div className="relative group"
           onMouseEnter={onIndependentEnter}
           onMouseLeave={onIndependentLeave}>
        <button className="nav-link">
          עצמאים ועצמאיות
        </button>
        <NavDropdown isOpen={isIndependentOpen} links={independentLinks} />
      </div>

      <Link to="/about" className="nav-link">
        אודות
      </Link>
      
      <Link to="/contact" className="nav-link">
        צור קשר
      </Link>
    </div>
  );
};

export default DesktopNav;
