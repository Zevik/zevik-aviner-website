
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="classic-container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">לוגו</h3>
            <p className="text-gray-600">
              טקסט תיאור קצר של האתר או העסק שלך יכול להופיע כאן.
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
              <Link to="/contact" className="block text-gray-600 hover:text-primary transition-colors">
                צור קשר
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">צור קשר</h3>
            <div className="space-y-2 text-gray-600">
              <p>טלפון: 123-456-789</p>
              <p>אימייל: info@example.com</p>
              <p>כתובת: רחוב הדוגמה 123, תל אביב</p>
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
