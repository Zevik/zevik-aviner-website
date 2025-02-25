
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import MobileNavItem from "./MobileNavItem";

interface MobileMenuProps {
  isOpen: boolean;
  isCommunitiesOpen: boolean;
  isExtensionsOpen: boolean;
  isArticlesOpen: boolean;
  isIndependentOpen: boolean;
  isAIOpen: boolean;
  isNotesOpen: boolean;
  onToggleCommunities: () => void;
  onToggleExtensions: () => void;
  onToggleArticles: () => void;
  onToggleIndependent: () => void;
  onToggleAI: () => void;
  onToggleNotes: () => void;
  onCloseMenu: () => void;
}

interface NotePage {
  path: string;
  menuTitle: string;
  pageTitle: string;
  content: string;
}

const fetchNotePages = async (): Promise<NotePage[]> => {
  const SHEET_ID = "1A931tSblDQ_1IXJWKInL8bQIYCDkE7kREnWjTJ2Q25k";
  const SHEET_NAME = "notes";
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(SHEET_NAME)}`;
  
  const response = await fetch(url);
  const text = await response.text();
  const jsonText = text.match(/google\.visualization\.Query\.setResponse\(([\s\S]*?)\);/)[1];
  const json = JSON.parse(jsonText);

  return json.table.rows.slice(1).map((row: any) => ({
    path: row.c[0]?.v || "",
    menuTitle: row.c[1]?.v || "",
    pageTitle: row.c[2]?.v || "",
    content: row.c[3]?.v || ""
  }));
};

const MobileMenu = ({
  isOpen,
  isCommunitiesOpen,
  isExtensionsOpen,
  isArticlesOpen,
  isIndependentOpen,
  isAIOpen,
  isNotesOpen,
  onToggleCommunities,
  onToggleExtensions,
  onToggleArticles,
  onToggleIndependent,
  onToggleAI,
  onToggleNotes,
  onCloseMenu,
}: MobileMenuProps) => {
  const { data: notePages = [] } = useQuery({
    queryKey: ['notes-pages'],
    queryFn: fetchNotePages
  });

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
              <MobileNavItem to="/communities/virtual-square" label="גשרים דיגיטליים" onClick={onCloseMenu} />
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
              <MobileNavItem to="/articles/thoughts" label="מחשבות" onClick={onCloseMenu} />
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
              <MobileNavItem to="/ai/tools" label="כלים שימושיים" onClick={onCloseMenu} />
              <MobileNavItem to="/ai/job-market" label="שוק התעסוקה" onClick={onCloseMenu} />
              <MobileNavItem to="/ai/era" label="העידן המלאכותי" onClick={onCloseMenu} />
            </>
          )}
        </MobileNavItem>

        <MobileNavItem 
          label="פתקים"
          onClick={onToggleNotes}
          isSubmenu={true}
        >
          {isNotesOpen && (
            <>
              {notePages.map(page => (
                <MobileNavItem 
                  key={page.path}
                  to={`/notes/${page.path}`}
                  label={page.menuTitle}
                  onClick={onCloseMenu}
                />
              ))}
            </>
          )}
        </MobileNavItem>

        <MobileNavItem to="/about" label="אודות" onClick={onCloseMenu} />
      </div>
    </div>
  );
};

export default MobileMenu;
