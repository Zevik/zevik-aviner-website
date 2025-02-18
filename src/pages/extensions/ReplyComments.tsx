
import React from 'react';

const ReplyComments = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-transparent p-8 pt-16 md:pt-20">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        
        {/* סקציה 1 */}
        <section className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">מכונת התגובות - ReplyComments</h1>
          <p className="text-xl mt-4 text-gray-600">תגובות לכל התגובות בכל פוסט שתבחרו</p>
        </section>

        {/* סקציה 2 */}
        <section className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-primary">איך התוסף עובד</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li className="p-2 bg-white/50 rounded-lg">בחרו את הפוסט הרצוי.</li>
            <li className="p-2 bg-white/50 rounded-lg">רשמו את התגובות הרצויות.</li>
            <li className="p-2 bg-white/50 rounded-lg">התוסף יכתוב תגובות לכל התגובות, אחת אחרי השניה.</li>
          </ol>
        </section>

        {/* סקציה 3 */}
        <section className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-primary">למה ReplyComments?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="p-2 bg-white/50 rounded-lg flex items-center">
              <strong className="text-primary ml-2">חיסכון בזמן:</strong>
              להגיב למאות תגובות בלחיצת כפתור במקום שעות של עבודה!
            </li>
            <li className="p-2 bg-white/50 rounded-lg flex items-center">
              <strong className="text-primary ml-2">מניעת חסימות:</strong>
              מגדירים את התוסף לעבוד בקצב איטי למנוע השעיה ע"י פייסבוק
            </li>
            <li className="p-2 bg-white/50 rounded-lg flex items-center">
              <strong className="text-primary ml-2">גמישות מקסימלית:</strong>
              התאמת התגובות והקצב לצרכים שלנו
            </li>
          </ul>
        </section>

        {/* סקציה 4 */}
        <section className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-sm text-center">
          <h2 className="text-2xl font-semibold mb-4 text-primary">ReplyComments בפעולה</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-64 md:h-96 rounded-lg"
              src="https://www.youtube.com/embed/4WYeRXCdE_o"
              title="ReplyComments Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* סקציה 5 */}
        <section className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-sm text-center">
          <h2 className="text-2xl font-semibold mb-4 text-primary">התקנה בדפדפן הכרום</h2>
          <p className="mb-6 text-gray-700">התקינו את התוסף בקליק אחד</p>
          <a
            href="https://chromewebstore.google.com/detail/replyallcomments/nndlamggeoglkbnpgipbhciechdnbpcg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 shadow-sm hover:shadow-md"
          >
            התקינו את התוסף
          </a>
        </section>

        {/* סקציה 6 */}
        <section className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-sm text-center">
          <h2 className="text-2xl font-semibold mb-4 text-primary">עלות חודשית: ₪299</h2>
          <div className="space-y-2 text-gray-700">
            <p className="p-2 bg-white/50 rounded-lg">ביטול בכל עת</p>
            <p className="p-2 bg-white/50 rounded-lg">ללא התחייבות</p>
          </div>
        </section>

        {/* סקציה 7 - צור קשר */}
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

        {/* סקציה 8 */}
        <section className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-primary">שאלות ותשובות נפוצות</h2>
          <div className="space-y-4">
            <details className="group">
              <summary className="cursor-pointer p-4 bg-white/50 rounded-lg flex items-center justify-between hover:bg-white/70 transition-colors">
                <span>שאלה: האם ניתן להגיב לכל פוסט בפייסבוק או רק לפוסטים שלי?</span>
              </summary>
              <p className="mt-2 p-4 bg-white/30 rounded-lg">תשובה: ניתן להגיב לכל פוסט, לא משנה אם אתם העלתם אותו או לא.</p>
            </details>

            <details className="group">
              <summary className="cursor-pointer p-4 bg-white/50 rounded-lg flex items-center justify-between hover:bg-white/70 transition-colors">
                <span>שאלה: האם ניתן להגיב לפוסטים בכל קבוצה גם שאני לא מנהל/ת?</span>
              </summary>
              <p className="mt-2 p-4 bg-white/30 rounded-lg">תשובה: כן.</p>
            </details>

            <details className="group">
              <summary className="cursor-pointer p-4 bg-white/50 rounded-lg flex items-center justify-between hover:bg-white/70 transition-colors">
                <span>שאלה: האם התוסף יגיב לאותה תגובה פעמיים?</span>
              </summary>
              <p className="mt-2 p-4 bg-white/30 rounded-lg">תשובה: התוסף יגיב רק לתגובות שאין להם שום תגובה. אם יש להם כבר תגובה, לא משנה מי כתב אותה, התוסף לא יגיב. ישנה אפשרות נוספת, להגדיר שהתוסף יגיב לכל משתמש רק פעם אחת, ואז התוסף יגיב לכולם, לא משנה אם יש להם תגובה או לא.</p>
            </details>

            <details className="group">
              <summary className="cursor-pointer p-4 bg-white/50 rounded-lg flex items-center justify-between hover:bg-white/70 transition-colors">
                <span>שאלה: האם יש סכנה שפייסבוק יחסום אותי?</span>
              </summary>
              <p className="mt-2 p-4 bg-white/30 rounded-lg">תשובה: אנחנו לא נתקלנו מעולם במקרה כזה. הדבר היחיד שעלול לקרות הוא השעייה זמנית (לכמה שעות) לפעולה הספציפית של תגובות בפייסבוק. שאר הפעולות לא יושעו, וגם זה נדיר ביותר, ובשביל זה אנחנו מגדירים הפסקות בהגדרות התוסף.</p>
            </details>

            <details className="group">
              <summary className="cursor-pointer p-4 bg-white/50 rounded-lg flex items-center justify-between hover:bg-white/70 transition-colors">
                <span>שאלה: האם המחשב שלי צריך להיות דלוק?</span>
              </summary>
              <p className="mt-2 p-4 bg-white/30 rounded-lg">תשובה: התוסף פועל על דפדפן הכרום שלכם ועליו להיות פתוח. אם תסגרו את דפדפן הכרום שעליו פועל התוסף או שתכבו את המחשב, התוסף יפסיק לפעול עד שתדליקו את המחשב.</p>
            </details>

            <details className="group">
              <summary className="cursor-pointer p-4 bg-white/50 rounded-lg flex items-center justify-between hover:bg-white/70 transition-colors">
                <span>שאלה: האם ניתן להגיב בכל שפה?</span>
              </summary>
              <p className="mt-2 p-4 bg-white/30 rounded-lg">תשובה: כן.</p>
            </details>

            <details className="group">
              <summary className="cursor-pointer p-4 bg-white/50 rounded-lg flex items-center justify-between hover:bg-white/70 transition-colors">
                <span>שאלה: איך ומתי ניתן לבטל את המנוי?</span>
              </summary>
              <p className="mt-2 p-4 bg-white/30 rounded-lg">תשובה: המנוי הוא חודשי והוא מתחדש מדי חודש באותו היום שבו התחלתם את המנוי. ניתן לפנות אלי עד 24 שעות לפני חידוש המנוי על מנת לבטלו.</p>
            </details>

            <details className="group">
              <summary className="cursor-pointer p-4 bg-white/50 rounded-lg flex items-center justify-between hover:bg-white/70 transition-colors">
                <span>שאלה: מה ההמלצה לכמות ולקצב תגובות על ידי התוסף?</span>
              </summary>
              <p className="mt-2 p-4 bg-white/30 rounded-lg">תשובה: ההמלצה שלי היא להגיב עד כ-100 תגובות ביום, עם הפרש זמן של כ-2-3 דקות בין התגובות.</p>
            </details>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ReplyComments;
