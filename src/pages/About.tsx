import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-transparent p-8 pt-16 md:pt-20">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        
        {/* כותרת ראשית */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">זאביק אבינר</h1>
          <p className="text-xl mt-4 text-gray-600">יועץ ומומחה ליצירת וניהול קהילות בפייסבוק</p>
        </section>

        {/* מי אני */}
        <section className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-primary">מי אני</h2>
          <p className="text-gray-700 leading-relaxed">
            כמנהל הרשתות החברתיות הגדולות של ירושלים, אני מביא עמי ניסיון עשיר בבניית והובלת קהילות משמעותיות. 
            אני מאמין שהכוח האמיתי של הרשתות החברתיות טמון ביכולתן ליצור חיבורים אנושיים, לבנות גשרים בין אנשים, 
            ולהפוך רעיונות למציאות דרך כוחה של הקהילה.
          </p>
        </section>

        {/* האג'נדה שלי */}
        <section className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-primary">האג'נדה שלי</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["קהילה", "סובלנות", "זהות", "שייכות", "שיתוף", "תמיכה"].map((value) => (
              <div key={value} className="bg-white/50 p-4 rounded-lg text-center text-primary font-medium hover:bg-primary hover:text-white transition-colors duration-300">
                {value}
              </div>
            ))}
          </div>
        </section>

        {/* רקע אקדמי */}
        <section className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-primary">רקע אקדמי</h2>
          <ul className="space-y-3">
            {[
              "לימודים תורניים גבוהים",
              "לימודי הוראה",
              "תואר ראשון + שני בכימיה",
              "לימודי פסיכודרמה",
              "פסיכולוגיה והנחיית קבוצות"
            ].map((item) => (
              <li key={item} className="flex items-center bg-white/50 p-3 rounded-lg">
                <span className="text-primary ml-2">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* ניסיון בניהול קבוצות */}
        <section className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-primary">ניסיון בניהול קבוצות</h2>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              ניסיוני כולל גישורים רבים ומוצלחים בין עסקים ללקוחות, שכנים ואנשים פרטיים. נסיון רב בניהול וגישור קונפליקטים קבוצתיים, תוך יצירת פתרונות יצירתיים ובני-קיימא.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-white/50 p-4 rounded-lg">
                <h3 className="text-primary font-semibold mb-2">קשרים וחיבורים</h3>
                <p className="text-gray-600">קשרים ענפים עם עמותות, ארגונים, מחלקות עירייה ומינהלים קהילתיים</p>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h3 className="text-primary font-semibold mb-2">סיוע קהילתי</h3>
                <p className="text-gray-600">קישורים וחיבורים רבים לסיוע למשפחות וליחידים נזקקים</p>
              </div>
            </div>
          </div>
        </section>

        {/* תהליכים חברתיים */}
        <section className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-primary">תהליכים חברתיים</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            אני מביא הבנה מעמיקה של תהליכים קבוצתיים וקהילתיים, תוך שימוש בכלים מעולם הפסיכולוגיה והנחיית קבוצות. 
            ניסיוני כולל פיתוח ויישום תיאוריות ושיטות חדשניות לניהול קבוצות, תוך התמקדות ביצירת מרחב מכיל ומכבד לכל חברי הקהילה.
          </p>
          <div className="bg-white/50 p-4 rounded-lg mt-4">
            <h3 className="text-primary font-semibold mb-2">תחומי התמחות</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>טיפול בתופעות שיימינג ואלימות מילולית</li>
              <li>מניעת גזענות ויצירת שיח מכבד</li>
              <li>ניהול סקרים חברתיים ועירוניים</li>
              <li>יצירת מרחב ביטוי לכל גווני האוכלוסייה</li>
            </ul>
          </div>
        </section>

        {/* כלים טכנולוגיים */}
        <section className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-primary">חדשנות טכנולוגית</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            מתוך הבנת הפוטנציאל העצום הטמון בניהול קבוצות פייסבוק, פיתחתי מגוון כלים טכנולוגיים המסייעים למנהלי קהילות להגיע לתוצאות מיטביות:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/50 p-4 rounded-lg">
              <h3 className="text-primary font-semibold mb-2">פיתוח כלים</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• תוספי כרום מתקדמים</li>
                <li>• כלי אוטומציה</li>
                <li>• מערכות ניהול תוכן</li>
              </ul>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <h3 className="text-primary font-semibold mb-2">אסטרטגיות דיגיטליות</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• שיטות לקידום ויראלי</li>
                <li>• ניהול רשימות דיוור</li>
                <li>• אינטגרציה עם צ'אט בוטים</li>
              </ul>
            </div>
          </div>
        </section>

        {/* צור קשר */}
        <section className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-sm text-center">
          <h2 className="text-2xl font-semibold mb-4 text-primary">צרו קשר</h2>
          <div className="flex flex-col items-center space-y-4">
            <a
              href="https://wa.me/972546609385"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 shadow-sm hover:shadow-md w-48"
            >
              ליצירת קשר בוואטסאפ
            </a>
            <a
              href="mailto:fb.tools.zevik@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 shadow-sm hover:shadow-md w-48"
            >
              ליצירת קשר באימייל
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
