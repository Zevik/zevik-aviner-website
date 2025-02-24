import { Link } from "react-router-dom";
import MobileNavItem from "./MobileNavItem";

interface MobileMenuProps {
  isOpen: boolean;
  isCommunitiesOpen: boolean;
  isExtensionsOpen: boolean;
  isArticlesOpen: boolean;
  isIndependentOpen: boolean;
  isAIOpen: boolean;
  onToggleCommunities: () => void;
  onToggleExtensions: () => void;
  onToggleArticles: () => void;
  onToggleIndependent: () => void;
  onToggleAI: () => void;
  onCloseMenu: () => void;
}

const MobileMenu = ({
  isOpen,
  isCommunitiesOpen,
  isExtensionsOpen,
  isArticlesOpen,
  isIndependentOpen,
  isAIOpen,
  onToggleCommunities,
  onToggleExtensions,
  onToggleArticles,
  onToggleIndependent,
  onToggleAI,
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
              <MobileNavItem to="/articles/language-of-stereotypes" label="שפת הסטריאוטיפים" onClick={onCloseMenu} />
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
              <MobileNavItem to="/independent/cash-fund" label="קרן כספית" onClick={onCloseMenu} />
              <MobileNavItem to="/independent/practical-guide-global-contract" label="חוזה גלובלי" onClick={onCloseMenu} />
              <MobileNavItem to="/independent/worker-employer-relations" label="יחסי עובד-מעביד" onClick={onCloseMenu} />
              <MobileNavItem to="/independent/self-employed-in-israel" label="עצמאים בישראל" onClick={onCloseMenu} />
              <MobileNavItem to="/independent/end-employment" label="סיום העסקה" onClick={onCloseMenu} />
            </>
          )}
        </MobileNavItem>

        <MobileNavItem 
          label="בינה מלאכותית"
          onClick={onToggleAI}
          isSubmenu={true}
        >
          {isAIOpen && (
            <>
              <MobileNavItem to="/ai/chatbots" label="צ'אטים" onClick={onCloseMenu} />
              <MobileNavItem to="/ai/tools" label="כלים שימושיים" onClick={onCloseMenu} />
              <MobileNavItem to="/ai/image-generation" label="יצירת תמונות" onClick={onCloseMenu} />
              <MobileNavItem to="/ai/video-generation" label="יצירת סרטונים" onClick={onCloseMenu} />
              <MobileNavItem to="/ai/presentations" label="יצירת מצגות" onClick={onCloseMenu} />
              <MobileNavItem to="/ai/development-tools" label="כלי פיתוח" onClick={onCloseMenu} />
              <MobileNavItem to="/ai/job-market" label="שוק התעסוקה" onClick={onCloseMenu} />
              <MobileNavItem to="/ai/era" label="העידן המלאכותי" onClick={onCloseMenu} />
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
