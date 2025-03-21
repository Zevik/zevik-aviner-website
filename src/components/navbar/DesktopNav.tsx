
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import NavDropdown from "./NavDropdown";

interface DesktopNavProps {
  isCommunitiesOpen: boolean;
  isExtensionsOpen: boolean;
  isArticlesOpen: boolean;
  isIndependentOpen: boolean;
  isAIOpen: boolean;
  isNotesOpen: boolean;
  onCommunitiesEnter: () => void;
  onCommunitiesLeave: () => void;
  onExtensionsEnter: () => void;
  onExtensionsLeave: () => void;
  onArticlesEnter: () => void;
  onArticlesLeave: () => void;
  onIndependentEnter: () => void;
  onIndependentLeave: () => void;
  onAIEnter: () => void;
  onAILeave: () => void;
  onNotesEnter: () => void;
  onNotesLeave: () => void;
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

const DesktopNav = ({
  isCommunitiesOpen,
  isExtensionsOpen,
  isArticlesOpen,
  isIndependentOpen,
  isAIOpen,
  isNotesOpen,
  onCommunitiesEnter,
  onCommunitiesLeave,
  onExtensionsEnter,
  onExtensionsLeave,
  onArticlesEnter,
  onArticlesLeave,
  onIndependentEnter,
  onIndependentLeave,
  onAIEnter,
  onAILeave,
  onNotesEnter,
  onNotesLeave,
}: DesktopNavProps) => {
  const { data: notePages = [] } = useQuery({
    queryKey: ['notes-pages'],
    queryFn: fetchNotePages
  });

  const noteLinks = notePages.map(page => ({
    to: `/notes/${page.path}`,
    label: page.menuTitle
  }));

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
    { to: "/articles/language-of-stereotypes", label: "שפת הסטריאוטיפים" },
    { to: "/articles/sugar", label: "סוכר וערך גליקמי" },
  ];

  const independentLinks = [
    { to: "/independent/small-business", label: "עוסק זעיר" },
    { to: "/independent/deposit-fund", label: "קרן השתלמות" },
    { to: "/independent/cash-fund", label: "קרן כספית" },
    { to: "/independent/practical-guide-global-contract", label: "חוזה גלובלי" },
    { to: "/independent/worker-employer-relations", label: "יחסי עובד-מעביד" },
    { to: "/independent/self-employed-in-israel", label: "עצמאים בישראל" },
    { to: "/independent/end-employment", label: "סיום העסקה" },
  ];

  const aiLinks = [
    { to: "/ai/tools", label: "כלים שימושיים" },
    { to: "/ai/job-market", label: "שוק התעסוקה" },
    { to: "/ai/era", label: "העידן המלאכותי" },
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

      <div className="relative group"
           onMouseEnter={onAIEnter}
           onMouseLeave={onAILeave}>
        <button className="nav-link">
          בינה מלאכותית
        </button>
        <NavDropdown isOpen={isAIOpen} links={aiLinks} />
      </div>

      <div className="relative group"
           onMouseEnter={onNotesEnter}
           onMouseLeave={onNotesLeave}>
        <button className="nav-link">
          פתקים
        </button>
        <NavDropdown isOpen={isNotesOpen} links={noteLinks} />
      </div>

      <Link to="/about" className="nav-link">
        אודות
      </Link>
    </div>
  );
};

export default DesktopNav;
