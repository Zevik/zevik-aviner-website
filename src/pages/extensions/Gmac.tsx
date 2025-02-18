
import React from 'react';

const Gmac = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-transparent p-8">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        
        {/* סקציה 1 - כותרת ראשית */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">GMAC - שומר התשובות לשאלות הכניסה לקבוצה</h1>
          <p className="text-xl mt-4 text-gray-600">התוסף הפופולרי למנהלי ומנהלות קבוצות פייסבוק</p>
        </section>

        {/* סקציה 2 - איך התוסף עובד */}
        <section className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-primary">איך התוסף עובד</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li className="p-2 bg-white/50 rounded-lg">התקנה פשוטה בלחיצת כפתור</li>
            <li className="p-2 bg-white/50 rounded-lg">יופיעו כפתורים חדשים בפייסבוק שלכם מעל כפתורי אישורי החברות</li>
            <li className="p-2 bg-white/50 rounded-lg">בלחיצת כפתור תוכלו לאסוף את כל התשובות לגוגלשיטס</li>
          </ol>
        </section>

        {/* סקציה 3 - למה GMAC */}
        <section className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-primary">למה GMAC?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="p-2 bg-white/50 rounded-lg flex items-center">
              <strong className="text-primary ml-2">חיסכון בזמן:</strong>
              איסוף אוטומטי של כל התשובות בלחיצת כפתור
            </li>
            <li className="p-2 bg-white/50 rounded-lg flex items-center">
              <strong className="text-primary ml-2">פעולה מהירה:</strong>
              שמירת המידע באופן מיידי וללא עיכובים
            </li>
            <li className="p-2 bg-white/50 rounded-lg flex items-center">
              <strong className="text-primary ml-2">גיבוי מושלם:</strong>
              כל המידע נשמר בגוגל שיטס באופן מאובטח
            </li>
          </ul>
        </section>

        {/* סקציה 4 - וידאו הדגמה */}
        <section className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-sm text-center">
          <h2 className="text-2xl font-semibold mb-4 text-primary">ראו את GMAC בפעולה</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-64 md:h-96 rounded-lg"
              src="https://www.youtube.com/embed/mLnXlkmy84Q"
              title="GMAC Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* סקציה 5 - וידאו התקנה */}
        <section className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-sm text-center">
          <h2 className="text-2xl font-semibold mb-4 text-primary">איך מתקינים בקלות?</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-64 md:h-96 rounded-lg"
              src="https://www.youtube.com/embed/-yxpUam5LRA"
              title="GMAC Installation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* סקציה 6 - התקנה */}
        <section className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-sm text-center">
          <h2 className="text-2xl font-semibold mb-4 text-primary">התקנה בדפדפן הכרום</h2>
          <p className="mb-6 text-gray-700">התקינו את התוסף בקליק אחד</p>
          <a
            href="https://chromewebstore.google.com/detail/gmac-%E2%80%94-group-answers-coll/omefdeapnicniondiefejngddkjikegn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 shadow-sm hover:shadow-md"
          >
            התקינו את התוסף
          </a>
        </section>

        {/* סקציה 7 - עלות */}
        <section className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-sm text-center">
          <h2 className="text-2xl font-semibold mb-4 text-primary">עלות חודשית: ₪35</h2>
          <div className="space-y-2 text-gray-700">
            <p className="p-2 bg-white/50 rounded-lg">5 ימי ניסיון ללא עלות</p>
            <p className="p-2 bg-white/50 rounded-lg">ביטול בכל עת</p>
            <p className="p-2 bg-white/50 rounded-lg">ללא התחייבות</p>
          </div>
        </section>

        {/* סקציה 8 - שאלות ותשובות */}
        <section className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-primary">שאלות ותשובות נפוצות</h2>
          <div className="space-y-4">
            <details className="group">
              <summary className="cursor-pointer p-4 bg-white/50 rounded-lg flex items-center justify-between hover:bg-white/70 transition-colors">
                <span>האם ניתן להשתמש אם התוסף עבור כמה קבוצות שאני מנהל/ת?</span>
              </summary>
              <p className="mt-2 p-4 bg-white/30 rounded-lg">כן. ובנוסף, עבור כל קבוצה התוסף יצור קובץ נפרד שאליו ישמרו הנתונים.</p>
            </details>
            
            <details className="group">
              <summary className="cursor-pointer p-4 bg-white/50 rounded-lg flex items-center justify-between hover:bg-white/70 transition-colors">
                <span>האם התשובות נאספות באופן אוטומטי לחלוטין?</span>
              </summary>
              <p className="mt-2 p-4 bg-white/30 rounded-lg">לא. יש לאסוף את הנתונים בכל פעם לפני שמאשרים את בקשות ההצטרפות לקבוצה, על ידי לחיצה על כפתור Collect.</p>
            </details>

            <details className="group">
              <summary className="cursor-pointer p-4 bg-white/50 rounded-lg flex items-center justify-between hover:bg-white/70 transition-colors">
                <span>אם לוחצים על Collect כמה פעמים, האם הנתונים יופיעו בקובץ כמה פעמים?</span>
              </summary>
              <p className="mt-2 p-4 bg-white/30 rounded-lg">לא. הנתונים נאספים פעם אחת על מנת לא ליצור כפילויות, אלא אם כן אחת התשובות השתנתה ואז הנתונים ירשמו מחדש.</p>
            </details>

            <details className="group">
              <summary className="cursor-pointer p-4 bg-white/50 rounded-lg flex items-center justify-between hover:bg-white/70 transition-colors">
                <span>מה יקרה אם אשנה את שאלות הכניסה לקבוצה?</span>
              </summary>
              <p className="mt-2 p-4 bg-white/30 rounded-lg">התוסף יצור עמודות חדשות בגוגלשיטס עם כותרות השאלות החדשות, וירשום את התשובות המתאימות תחתיהן.</p>
            </details>

            <details className="group">
              <summary className="cursor-pointer p-4 bg-white/50 rounded-lg flex items-center justify-between hover:bg-white/70 transition-colors">
                <span>האם הנתונים שאספתי יכולים ללכת לאיבוד לאחר סיום המנוי?</span>
              </summary>
              <p className="mt-2 p-4 bg-white/30 rounded-lg">לא! הנתונים נשמרים בגוגלשיטס ששייך למנוי, תחת חשבון הגוגל, ותמיד ניתן למצוא אותו ב: https://drive.google.com</p>
            </details>

            <details className="group">
              <summary className="cursor-pointer p-4 bg-white/50 rounded-lg flex items-center justify-between hover:bg-white/70 transition-colors">
                <span>אם אני מבטל/ת את התוסף לאחר 4 ימים, האם יהיה לי חיוב כלשהוא?</span>
              </summary>
              <p className="mt-2 p-4 bg-white/30 rounded-lg">לא! יש 5 ימי ניסיון ללא עלות וללא התחייבות, וניתן לבטל את המנוי לפני היום החמישי ללא כל חיוב.</p>
            </details>

            <details className="group">
              <summary className="cursor-pointer p-4 bg-white/50 rounded-lg flex items-center justify-between hover:bg-white/70 transition-colors">
                <span>לאן ישלחו החשבוניות?</span>
              </summary>
              <p className="mt-2 p-4 bg-white/30 rounded-lg">החשבוניות נשלחות באופן אוטומטי לאימייל שאיתו נרשמתם שזהו אותו אימייל של חשבון הכרום תחתיו התקנתם את התוסף. לא ניתן להחליף את האימייל לקבלת חשבונית ללא החלפה של חשבון הכרום שעליו התוסף מותקן ותחתיו חשבון הפייסבוק שלכם פעיל.</p>
            </details>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Gmac;
