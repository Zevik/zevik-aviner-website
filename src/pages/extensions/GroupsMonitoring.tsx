import React from 'react';

const GroupsMonitoring = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-transparent p-8 pt-16 md:pt-20">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        
        {/* סקציה 1 */}
        <section className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">סורקת קבוצות מוצאת לקוחות - GroupsMonitoring</h1>
          <p className="text-xl mt-4 text-gray-600">הכלי החזק ביותר לניטור קבוצות פייסבוק, עבור עסקים ונותני שירות</p>
        </section>

        {/* סקציה 2 */}
        <section className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-primary">איך התוסף עובד</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li className="p-2 bg-white/50 rounded-lg">בחרו את מילות החיפוש ואת הקבוצות שתרצו.</li>
            <li className="p-2 bg-white/50 rounded-lg">התוסף יסרוק את הקבוצות 24/7 במקומכם.</li>
            <li className="p-2 bg-white/50 rounded-lg">כל פוסט רלוונטי יועבר ישירות ל- GoogleSheets שלכם.</li>
            <li className="p-2 bg-white/50 rounded-lg">התראות חכמות: קבלו עדכון למייל על כל פוסט חדש.</li>
          </ol>
        </section>

        {/* סקציה 3 */}
        <section className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-primary">למה GroupsMonitoring?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="p-2 bg-white/50 rounded-lg flex items-center">
              <strong className="text-primary ml-2">חיסכון בזמן:</strong>
              שבועות של חיפוש הופכות לדקות
            </li>
            <li className="p-2 bg-white/50 rounded-lg flex items-center">
              <strong className="text-primary ml-2">פעולה מהירה:</strong>
              לא מפספסים אף הזדמנות עסקית
            </li>
            <li className="p-2 bg-white/50 rounded-lg flex items-center">
              <strong className="text-primary ml-2">גיבוי מושלם:</strong>
              אוטומציה חכמה הטכנולוגיה עובדת בשבילכם 24/7
            </li>
          </ul>
        </section>

        {/* סקציה 4 */}
        <section className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-sm text-center">
          <h2 className="text-2xl font-semibold mb-4 text-primary">GroupsMonitoring בפעולה</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-64 md:h-96 rounded-lg"
              src="https://www.youtube.com/embed/-geuXKKxWSg"
              title="GroupsMonitoring Demo"
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
            href="https://chromewebstore.google.com/detail/groupsmonitoring/hhkacbdgmmhlbfkfmlddnbaimkopgibk?authuser=0&hl=en-GB"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 shadow-sm hover:shadow-md"
          >
            התקינו את התוסף
          </a>
        </section>

        {/* סקציה 6 */}
        <section className="bg-white/40 backdrop-blur-sm p-8 rounded-lg shadow-sm text-center">
          <h2 className="text-2xl font-semibold mb-4 text-primary">עלות חודשית: ₪349</h2>
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
                <span>שאלה: האם ניתן לסרוק כל קבוצה?</span>
              </summary>
              <p className="mt-2 p-4 bg-white/30 rounded-lg">תשובה: אכן, ניתן לסרוק כל קבוצה. על מנת לסרוק קבוצה פרטית יש להצטרף אליה.</p>
            </details>

            <details className="group">
              <summary className="cursor-pointer p-4 bg-white/50 rounded-lg flex items-center justify-between hover:bg-white/70 transition-colors">
                <span>שאלה: האם ניתן לבחור כמה מילות חיפוש שאני רוצה?</span>
              </summary>
              <p className="mt-2 p-4 bg-white/30 rounded-lg">תשובה: וודאי. וגם ניתן לבחור ולהגדיר מילים שונות עבור כל קבוצה. תוכלו לעשות הגדרות חיפוש חכמות כולל ביטוי מדויק או גמיש, צירופי מילים, הוצאת מילים ועוד.</p>
            </details>

            <details className="group">
              <summary className="cursor-pointer p-4 bg-white/50 rounded-lg flex items-center justify-between hover:bg-white/70 transition-colors">
                <span>שאלה: עם איזה פרופיל פייסבוק התוסף משתמש לסריקה?</span>
              </summary>
              <p className="mt-2 p-4 bg-white/30 rounded-lg">תשובה: התוסף סורק את הקבוצות בעזרת פרופיל הפייסבוק שמחובר בדפדפן הכרום ולכן ניתן לבחור כל פרופיל פייסבוק וכן להחליף אותו בכל עת.</p>
            </details>

            <details className="group">
              <summary className="cursor-pointer p-4 bg-white/50 rounded-lg flex items-center justify-between hover:bg-white/70 transition-colors">
                <span>שאלה: האם ניתן לשנות את הקבוצות ואת מילות החיפוש מתי שאני רוצה?</span>
              </summary>
              <p className="mt-2 p-4 bg-white/30 rounded-lg">תשובה: כן! כל ההגדרות נמצאות בגליון גוגלשיטס שלך, שנמצא אצלך.</p>
            </details>

            <details className="group">
              <summary className="cursor-pointer p-4 bg-white/50 rounded-lg flex items-center justify-between hover:bg-white/70 transition-colors">
                <span>שאלה: האם יש סכנה שפייסבוק יחסום אותי?</span>
              </summary>
              <p className="mt-2 p-4 bg-white/30 rounded-lg">תשובה: אנחנו לא נתקלנו מעולם במקרה כזה. הדבר היחיד שעלול לקרות הוא השעייה זמנית (לכמה שעות) לפעולה הספציפית של פתיחת קבוצת פייסבוק. שאר הפעולות, כמו למשל לגלול בפיד ולכתוב לא יושעו, וגם זה נדיר ביותר וקורה רק אם סורקים ללא הפסקות, ובשביל זה אנחנו מגדירים הפסקות בהגדרות התוסף.</p>
            </details>

            <details className="group">
              <summary className="cursor-pointer p-4 bg-white/50 rounded-lg flex items-center justify-between hover:bg-white/70 transition-colors">
                <span>שאלה: האם המחשב שלי צריך להיות דלוק?</span>
              </summary>
              <p className="mt-2 p-4 bg-white/30 rounded-lg">תשובה: התוסף פועל על דפדפן הכרום שלכם ועליו להיות פתוח. אם תסגרו את דפדפן הכרום שעליו פועל התוסף או שתכבו את המחשב, התוסף יפסיק לפעול עד שתדליקו את המחשב. ישנה אפשרות להפעיל את התוכנה על מחשב מרוחק, שלי, שפועל 24/7, בתוספת של 100 ש"ח לחודש.</p>
            </details>

            <details className="group">
              <summary className="cursor-pointer p-4 bg-white/50 rounded-lg flex items-center justify-between hover:bg-white/70 transition-colors">
                <span>שאלה: האם ההתראות מגיעות אלינו מיד עם פרסום הפוסט בקבוצה?</span>
              </summary>
              <p className="mt-2 p-4 bg-white/30 rounded-lg">תשובה: ההתראות אינן מיידיות, משום שלוקח זמן להשלים סבב סריקות וצריך גם זמני המתנה, ולכן עבור פוסט שעלה לקבוצה יתכן ונקבל התראה תוך כמה דקות, או לאחר שעה ויותר, תלוי במספר הקבוצות שאנו סורקים ובהגדרות שלנו.</p>
            </details>

            <details className="group">
              <summary className="cursor-pointer p-4 bg-white/50 rounded-lg flex items-center justify-between hover:bg-white/70 transition-colors">
                <span>שאלה: האם אפשר למחוק שורות מהגוגלשיטס עם התוצאות?</span>
              </summary>
              <p className="mt-2 p-4 bg-white/30 rounded-lg">תשובה: הפוסטים שמופיעים בגוגלשיטס משמשים עבור התוסף על מנת שלא ירשום אותם בשנית כשיתקל בהם. מחיקה של שורות מהגוגלשיטס תגרום לרישום חוזר עבור אותם פוסטים במידה ויימצאו בתחום הזמן שהגדרנו לחיפוש.</p>
            </details>
          </div>
        </section>

      </div>
    </div>
  );
};

export default GroupsMonitoring;
