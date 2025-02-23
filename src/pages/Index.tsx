
import { Facebook, Globe, Users, BookOpen, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "עולם הקהילות",
    description: "כל מה שצריך לדעת על ניהול קהילות",
    icon: Globe,
    link: "/communities/insights",
    color: "bg-green-50",
  },
  {
    title: "תוספים לפייסבוק",
    description: "כלים שימושיים לניהול בפייסבוק",
    icon: Facebook,
    link: "/extensions/gmac",
    color: "bg-green-50",
  },
  {
    title: "עצמאים ועצמאיות",
    description: "מדריכים וטיפים לניהול עסק",
    icon: Users,
    link: "/independent/small-business",
    color: "bg-green-50",
  },
  {
    title: "מאמרים",
    description: "תוכן מקצועי ומעמיק",
    icon: BookOpen,
    link: "/articles/why-not-haredim",
    color: "bg-green-50",
  },
  {
    title: "כתבות",
    description: "חדשות ועדכונים שוטפים",
    icon: FileText,
    link: "/posts",
    color: "bg-green-50",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="classic-section bg-gradient-to-b from-secondary/30 to-transparent">
        <div className="classic-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
            קהילות, אוטומציות ובינה מלאכותית
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            מאמרים, טיפים, תוכנות וסדנאות
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="classic-section">
        <div className="classic-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            התוכן שלנו
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link 
                key={category.title}
                to={category.link}
                className={`content-box ${category.color} hover:scale-105 transition-all duration-300 animate-fadeIn`}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="flex items-center gap-4">
                  <category.icon className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles Grid */}
      <section className="classic-section bg-accent/20">
        <div className="classic-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            מאמרים אחרונים
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link 
              to="/ai/era"
              className="content-box bg-white hover:scale-105 transition-all duration-300 animate-fadeIn"
            >
              <div className="aspect-video bg-gray-100 rounded-md mb-4"></div>
              <h3 className="text-xl font-bold">עידן הבינה המלאכותית</h3>
              <p className="text-gray-600">האם אנחנו באמת מבינים את גודל השינוי שעומד בפתח?</p>
            </Link>
            <Link 
              to="/ai/job-market"
              className="content-box bg-white hover:scale-105 transition-all duration-300 animate-fadeIn"
            >
              <div className="aspect-video bg-gray-100 rounded-md mb-4"></div>
              <h3 className="text-xl font-bold">השלכות AI על שוק התעסוקה</h3>
              <p className="text-gray-600">מה צופים המחקרים העדכניים ביותר לגבי עתיד התעסוקה?</p>
            </Link>
            <Link 
              to="/communities/insights"
              className="content-box bg-white hover:scale-105 transition-all duration-300 animate-fadeIn"
            >
              <div className="aspect-video bg-gray-100 rounded-md mb-4"></div>
              <h3 className="text-xl font-bold">תובנות בניהול קהילות</h3>
              <p className="text-gray-600">איך מנהלים קהילה מצליחה בעידן הדיגיטלי?</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
