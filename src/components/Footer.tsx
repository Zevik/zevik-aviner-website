
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="classic-container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">על האתר</h3>
            <p className="text-gray-600">
              ניהול וייעוץ לקהילות דיגיטליות
            </p>
            <p className="text-gray-600 mt-2">
              כלים, אוטומציות, בינה מלאכותית, מאמרים וידע מקצועי לניהול קהילות
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">קישורים מהירים</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-600 hover:text-primary transition-colors">
                דף הבית
              </Link>
              <Link to="/about" className="block text-gray-600 hover:text-primary transition-colors">
                אודות
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">צור קשר</h3>
            <div className="space-y-2 text-gray-600">
              <p>
                וואטסאפ:{" "}
                <a 
                  href="https://wa.me/972546609385" 
                  className="text-primary hover:text-primary/80 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  054-6609385
                </a>
              </p>
              <p>
                אימייל:{" "}
                <a 
                  href="mailto:fb.tools.zevik@gmail.com"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  fb.tools.zevik@gmail.com
                </a>
              </p>
              <p>כתובת: ישראל</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} כל הזכויות שמורות</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
