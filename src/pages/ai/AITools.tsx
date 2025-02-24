
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";

interface Tool {
  name: string;
  url: string;
  description: string;
  tags: string[];
  price: string;
}

// Fetch tools from Google Sheets
const fetchTools = async (): Promise<Tool[]> => {
  const SHEET_ID = "1A931tSblDQ_1IXJWKInL8bQIYCDkE7kREnWjTJ2Q25k";
  const TOOLS_RANGE = "tools!A2:E";
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${TOOLS_RANGE}?key=${import.meta.env.VITE_GOOGLE_SHEETS_API_KEY}`
  );
  const data = await response.json();
  return data.values?.map((row: string[]) => ({
    name: row[0] || "",
    url: row[1] || "",
    description: row[2] || "",
    tags: (row[3] || "").split(",").map(tag => tag.trim()).filter(Boolean),
    price: row[4] || ""
  })) || [];
};

// Fetch tags from Google Sheets
const fetchTags = async (): Promise<string[]> => {
  const SHEET_ID = "1A931tSblDQ_1IXJWKInL8bQIYCDkE7kREnWjTJ2Q25k";
  const TAGS_RANGE = "tags!A2:A";
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${TAGS_RANGE}?key=${import.meta.env.VITE_GOOGLE_SHEETS_API_KEY}`
  );
  const data = await response.json();
  return data.values?.map((row: string[]) => row[0]).filter(Boolean) || [];
};

const AITools = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const { data: tools = [], isLoading: isLoadingTools } = useQuery({
    queryKey: ['tools'],
    queryFn: fetchTools
  });

  const { data: tags = [], isLoading: isLoadingTags } = useQuery({
    queryKey: ['tags'],
    queryFn: fetchTags
  });

  // Filter tools based on selected tags
  const filteredTools = tools.filter(tool => 
    selectedTags.length === 0 || selectedTags.some(tag => tool.tags.includes(tag))
  );

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  if (isLoadingTools || isLoadingTags) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-transparent pt-24 pb-12 px-4 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-transparent pt-24 pb-12 px-4">
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">כלי בינה מלאכותית</h1>
        
        {/* Tags filter */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">סינון לפי תגיות:</h2>
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

        {/* Tools grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map(tool => (
            <div key={tool.name} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {tool.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="text-sm text-gray-500 mb-4">
                מחיר: {tool.price}
              </div>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
              >
                למידע נוסף
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AITools;
