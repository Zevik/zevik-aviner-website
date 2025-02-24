
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface Tool {
  name: string;
  url: string;
  description: string;
  tags: string[];
  price: string;
}

const tools: Tool[] = [
  {
    name: "Bing Image Creator",
    url: "https://www.bing.com/create",
    description: "מבוסס על טכנולוגיית DALL-E, מאפשר יצירת תמונות מגוונות",
    tags: ["image", "text", "Free"],
    price: "שימוש חינמי, מוגבל בכמות"
  },
  {
    name: "DALL-E 3",
    url: "https://openai.com/dall-e-3",
    description: "איכות גבוהה, אינטגרציה עם ChatGPT, מתאים למרתחי",
    tags: ["image", "text", "Paid"],
    price: "מחיר מבוסס קרדיטים (כ-2$)"
  },
  {
    name: "Midjourney",
    url: "https://www.midjourney.com",
    description: "כלי מוביל ליצירת תמונות ברזולוציה גבוהה וטקסטורות מגוונות",
    tags: ["image", "Paid"],
    price: "מנוי בסיסי החל מ-10$ לחודש"
  },
  {
    name: "Stable Diffusion",
    url: "https://stability.ai",
    description: "מבוסס קוד פתוח, מגיע גם כממשק טכני",
    tags: ["image", "open-source", "Free"],
    price: "קוד פתוח לשימוש מקומי ללא תשלום"
  }
];

const AITools = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Extract unique tags
  const uniqueTags = Array.from(new Set(tools.flatMap(tool => tool.tags)));

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-transparent pt-24 pb-12 px-4">
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">כלי בינה מלאכותית</h1>
        
        {/* Tags filter */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">סינון לפי תגיות:</h2>
          <div className="flex flex-wrap gap-2">
            {uniqueTags.map(tag => (
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
