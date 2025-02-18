
import React from 'react';

const Gmac = () => {
  return (
    <div className="min-h-screen bg-secondary/20 overflow-x-hidden p-4">
      <div className="w-full max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-lg overflow-hidden">
        
        {/* סקציה 1 */}
        <section className="mb-6 text-center">
          <h1 className="text-3xl font-bold mb-2 text-primary">GMAC - שומר התשובות לשאלות הכניסה לקבוצה</h1>
          <p className="mb-4">התוסף הפופולרי למנהלי ומנהלות קבוצות פייסבוק</p>
        </section>

        {/* סקציה 2 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-primary">איך התוסף עובד</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>התקנה פשוטה בלחיצת כפתור</li>
            <li>יופיעו כפתורים חדשים בפייסבוק שלכם מעל כפתורי אישורי החברות</li>
            <li>בלחיצת כפתור תוכלו לאסוף את כל התשובות לגוגלשיטס</li>
          </ol>
        </section>

        {/* סקציה 3 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-primary">למה GMAC?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>חיסכון בזמן:</strong> איסוף אוטומטי של כל התשובות בלחיצת כפתור</li>
            <li><strong>פעולה מהירה:</strong> שמירת המידע באופן מיידי וללא עיכובים</li>
            <li><strong>גיבוי מושלם:</strong> כל המידע נשמר בגוגל שיטס באופן מאובטח</li>
          </ul>
        </section>

        {/* סקציה 4 */}
        <section className="mb-6 text-center">
          <h2 className="text-2xl font-semibold mb-2 text-primary">ראו את GMAC בפעולה</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <iframe
              className="w-full h-64 md:h-96"
              src="https://www.youtube.com/embed/mLnXlkmy84Q"
              title="GMAC Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* סקציה 5 */}
        <section className="mb-6 text-center">
          <h2 className="text-2xl font-semibold mb-2 text-primary">איך מתקינים בקלות?</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <iframe
              className="w-full h-64 md:h-96"
              src="https://www.youtube.com/embed/-yxpUam5LRA"
              title="GMAC Installation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* סקציה 6 */}
        <section className="mb-6 text-center">
          <h2 className="text-2xl font-semibold mb-2 text-primary">התקנה בדפדפן הכרום</h2>
          <p className="mb-4">התקינו את התוסף בקליק אחד</p>
          <a
            href="https://chromewebstore.google.com/detail/gmac-%E2%80%94-group-answers-coll/omefdeapnicniondiefejngddkjikegn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            התקינו את התוסף
          </a>
        </section>

        {/* סקציה 7 */}
        <section className="mb-6 text-center">
          <h2 className="text-2xl font-semibold mb-2 text-primary">עלות חודשית: ₪35</h2>
          <p className="mb-2">5 ימי ניסיון ללא עלות</p>
          <p className="mb-2">ביטול בכל עת</p>
          <p className="mb-4">ללא התחייבות</p>
        </section>

        {/* סקציה 8 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-primary">שאלות ותשובות נפוצות</h2>
          <div className="space-y-4">
            <details className="rounded border bg-gray-100 p-2">
              <summary className="cursor-pointer">שאלה: האם ניתן להשתמש אם התוסף עבור כמה קבוצות שאני מנהל/ת?</summary>
              <p className="mt-2">תשובה: כן. ובנוסף, עבור כל קבוצה התוסף יצור קובץ נפרד שאליו ישמרו הנתונים.</p>
            </details>
            <details className="rounded border bg-gray-100 p-2">
              <summary className="cursor-pointer">שאלה: האם התשובות נאספות באופן אוטומטי לחלוטין?</summary>
              <p className="mt-2">תשובה: לא. יש לאסוף את הנתונים בכל פעם לפני שמאשרים את בקשות ההצטרפות לקבוצה, על ידי לחיצה על כפתור Collect.</p>
            </details>
            <details className="rounded border bg-gray-100 p-2">
              <summary className="cursor-pointer">שאלה: אם לוחצים על Collect כמה פעמים, האם הנתונים יופיעו בקובץ כמה פעמים?</summary>
              <p className="mt-2">תשובה: לא. הנתונים נאספים פעם אחת על מנת לא ליצור כפילויות, אלא אם כן אחת התשובות השתנתה ואז הנתונים ירשמו מחדש.</p>
            </details>
            <details className="rounded border bg-gray-100 p-2">
              <summary className="cursor-pointer">שאלה: מה יקרה אם אשנה את שאלות הכניסה לקבוצה?</summary>
              <p className="mt-2">תשובה: התוסף יצור עמודות חדשות בגוגלשיטס עם כותרות השאלות החדשות, וירשום את התשובות המתאימות תחתיהן.</p>
            </details>
            <details className="rounded border bg-gray-100 p-2">
              <summary className="cursor-pointer">שאלה: האם הנתונים שאספתי יכולים ללכת לאיבוד לאחר סיום המנוי?</summary>
              <p className="mt-2">תשובה: לא! הנתונים נשמרים בגוגלשיטס ששייך למנוי, תחת חשבון הגוגל, ותמיד ניתן למצוא אותו ב: https://drive.google.com</p>
            </details>
            <details className="rounded border bg-gray-100 p-2">
              <summary className="cursor-pointer">שאלה: אם אני מבטל/ת את התוסף לאחר 4 ימים, האם יהיה לי חיוב כלשהוא?</summary>
              <p className="mt-2">תשובה: לא! יש 5 ימי ניסיון ללא עלות וללא התחייבות, וניתן לבטל את המנוי לפני היום החמישי ללא כל חיוב.</p>
            </details>
            <details className="rounded border bg-gray-100 p-2">
              <summary className="cursor-pointer">שאלה: לאן ישלחו החשבוניות?</summary>
              <p className="mt-2">תשובה: החשבוניות נשלחות באופן אוטומטי לאימייל שאיתו נרשמתם שזהו אותו אימייל של חשבון הכרום תחתיו התקנתם את התוסף. לא ניתן להחליף את האימייל לקבלת חשבונית ללא החלפה של חשבון הכרום שעליו התוסף מותקן ותחתיו חשבון הפייסבוק שלכם פעיל.</p>
            </details>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Gmac;
