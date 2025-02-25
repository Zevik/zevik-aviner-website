
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";

interface Article {
  title: string;
  content: string;
  tags: string[];
}

// Fetch articles from Google Sheets without API key
const fetchArticles = async (): Promise<Article[]> => {
  const SHEET_ID = "1A931tSblDQ_1IXJWKInL8bQIYCDkE7kREnWjTJ2Q25k";
  const SHEET_NAME = "articles";
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(SHEET_NAME)}`;
  
  const response = await fetch(url);
  const text = await response.text();
  const jsonText = text.match(/google\.visualization\.Query\.setResponse\(([\s\S]*?)\);/)[1];
  const json = JSON.parse(jsonText);

  return json.table.rows.slice(1).map((row: any) => ({
    title: row.c[0]?.v || "",
    content: row.c[1]?.v || "",
    tags: (row.c[2]?.v || "").split(",").map((tag: string) => tag.trim()).filter(Boolean)
  }));
};

// Fetch tags from Google Sheets without API key
const fetchTags = async (): Promise<string[]> => {
  const SHEET_ID = "1A931tSblDQ_1IXJWKInL8bQIYCDkE7kREnWjTJ2Q25k";
  const SHEET_NAME = "article_tags";
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(SHEET_NAME)}`;
  
  const response = await fetch(url);
  const text = await response.text();
  const jsonText = text.match(/google\.visualization\.Query\.setResponse\(([\s\S]*?)\);/)[1];
  const json = JSON.parse(jsonText);

  return json.table.rows.slice(1).map((row: any) => row.c[0]?.v).filter(Boolean);
};

const Thoughts = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const { data: articles = [], isLoading: isLoadingArticles } = useQuery({
    queryKey: ['articles'],
    queryFn: fetchArticles
  });

  const { data: tags = [], isLoading: isLoadingTags } = useQuery({
    queryKey: ['article_tags'],
    queryFn: fetchTags
  });

  // Filter articles based on selected tags
  const filteredArticles = articles.filter(article => 
    selectedTags.length === 0 || selectedTags.some(tag => article.tags.includes(tag))
  );

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  if (isLoadingArticles || isLoadingTags) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-transparent pt-24 pb-12 px-4 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-transparent pt-24 pb-12 px-4">
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">מחשבות</h1>
        
        {/* Tags filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer text-sm"
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map(article => (
            <div key={article.title} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col">
              <h3 className="text-xl font-bold mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.content}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {article.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Thoughts;
