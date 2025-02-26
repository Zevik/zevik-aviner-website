
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import NotFound from "@/pages/NotFound";

interface Page {
  path: string;
  menuTitle: string;
  pageTitle: string;
  content: string;
  image?: string;
}

const fetchPages = async (): Promise<Page[]> => {
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
    content: row.c[3]?.v || "",
    image: row.c[4]?.v || ""
  }));
};

const DynamicPageRoute = () => {
  const { noteId } = useParams();
  
  const { data: pages = [], isLoading } = useQuery({
    queryKey: ['notes-pages'],
    queryFn: fetchPages
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-transparent pt-24 pb-12 px-4 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  const page = pages.find(p => p.path === noteId);

  if (!page) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-transparent pt-24 pb-12 px-4">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">{page.pageTitle}</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="prose max-w-none">
            {page.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
            {page.image && (
              <img 
                src={page.image} 
                alt={page.pageTitle}
                className="w-full max-w-2xl mx-auto rounded-lg shadow-md mt-8"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicPageRoute;
