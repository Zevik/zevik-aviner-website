import React from 'react';

const EndEmployment: React.FC = () => {
  return (
    <div className="min-h-screen bg-mint-light pt-24 pb-12 px-4">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h1 className="text-3xl font-bold mb-8 text-primary text-center">מדריך מעשי לסיום העסקת עובד - צ'קליסט למעסיק</h1>
        
        <div className="content-box">
          <h2 className="text-xl font-semibold text-primary mb-4">צעד 1: לפני הפיטורים</h2>
          
          <h3 className="text-lg font-semibold mb-4">שימוע - חובה חוקית</h3>
          <ul className="list-disc list-inside mr-4 space-y-2">
            <li>זימון בכתב זמן סביר מראש (תלוי בנסיבות ומורכבות המקרה)</li>
            <li>פירוט הסיבות לשקילת הפיטורים בזימון</li>
            <li>יידוע העובד על זכותו להביא נציג מטעמו</li>
            <li>תיעוד מלא של השימוע בפרוטוקול</li>
            <li>מתן זכות תגובה אמיתית לעובד</li>
          </ul>
          
          <h3 className="text-lg font-semibold mb-4 mt-6">בדיקת מגבלות על פיטורים</h3>
          <ul className="list-disc list-inside mr-4 space-y-2">
            <li>עובדת בהריון (נדרש אישור משרד העבודה)</li>
            <li>חופשת לידה + 60 יום אחרי חזרה מחל"ת שבאה בעקבותיה</li>
            <li>מילואים או 30 יום אחרי</li>
            <li>חופשת מחלה</li>
            <li>חברות בוועד</li>
            <li>עובדים המוגנים בחוק הגנה על עובדים בשעת חירום</li>
          </ul>
        </div>

        <div className="content-box">
          <h2 className="text-xl font-semibold text-primary mb-4">צעד 2: הודעה על פיטורים</h2>
          
          <h3 className="text-lg font-semibold mb-4">הודעה מוקדמת - חובה חוקית</h3>
          <p className="mb-4 text-gray-700 leading-relaxed">לעובד במשכורת (חודשי):</p>
          <ul className="list-disc list-inside mr-4 space-y-2">
            <li>עד 6 חודשי עבודה: יום לכל חודש</li>
            <li>7-12 חודשים: 6 ימים + 2.5 ימים לכל חודש נוסף</li>
            <li>מעל שנה: חודש מלא</li>
          </ul>
          <p className="mb-4 text-gray-700 leading-relaxed">לעובד בשכר (שעתי/יומי):</p>
          <ul className="list-disc list-inside mr-4 space-y-2">
            <li>עד 12 חודשי עבודה: יום לכל חודש עבודה</li>
            <li>מעל שנה: 14 יום + יום נוסף לכל חודש נוסף, עד מקסימום חודש</li>
          </ul>
          
          <h3 className="text-lg font-semibold mb-4 mt-6">מסירת הודעת פיטורים</h3>
          <ul className="list-disc list-inside mr-4 space-y-2">
            <li>בכתב בלבד</li>
            <li>ציון תאריך סיום מדויק</li>
            <li>פירוט זכויות העובד</li>
            <li>אפשרות לוותר על תקופת ההודעה (בתשלום)</li>
          </ul>
        </div>
        
        <div className="content-box">
          <h2 className="text-xl font-semibold text-primary mb-4">צעד 3: חישוב תשלומים</h2>
          
          <h3 className="text-lg font-semibold mb-4">פיצויי פיטורים (אחרי שנה)</h3>
          <ul className="list-disc list-inside mr-4 space-y-2">
            <li>משכורת אחרונה × שנות עבודה</li>
            <li>כולל כל הרכיבים הקבועים</li>
            <li>תשלום תוך 15 יום מהסיום</li>
            <li>חל גם במקרי התפטרות מוצדקת:
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>הרעה מוחשית בתנאי העבודה</li>
                <li>מצב בריאותי</li>
                <li>טיפול בבן משפחה חולה</li>
              </ul>
            </li>
          </ul>
          
          <h3 className="text-lg font-semibold mb-4 mt-6">תשלומים נוספים</h3>
          <ul className="list-disc list-inside mr-4 space-y-2">
            <li>פדיון חופשה שלא נוצלה</li>
            <li>דמי הבראה יחסיים</li>
            <li>משכורת אחרונה מלאה</li>
            <li>הודעה מוקדמת (גם אם לא עבד)</li>
          </ul>
        </div>
        
        <div className="content-box">
          <h2 className="text-xl font-semibold text-primary mb-4">צעד 4: מסמכים נדרשים</h2>
          
          <h3 className="text-lg font-semibold mb-4">חובה למסור לעובד</h3>
          <ul className="list-disc list-inside mr-4 space-y-2">
            <li>טופס 161 לשחרור קופות</li>
            <li>מכתב שחרור לקרן פנסיה</li>
            <li>אישור תקופת העסקה</li>
            <li>טופס 106 (בסוף שנת מס)</li>
            <li>תלוש שכר אחרון מפורט</li>
          </ul>
        </div>
        
        <div className="content-box">
          <h2 className="text-xl font-semibold text-primary mb-4">הנחיות מיוחדות לתקופת חירום</h2>
          <ul className="list-disc list-inside mr-4 space-y-2">
            <li>איסור פיטורי עובדים מאזורי סיכון מוגדרים</li>
            <li>חובת החזרת עובדים שפוטרו/הוצאו לחל"ת בגלל המצב</li>
            <li>הגנות מיוחדות לעובדים שנפגעו ישירות מהמצב</li>
            <li>סנקציות מוחמרות על הפרת זכויות בתקופת חירום</li>
          </ul>
        </div>
        
        <div className="content-box">
          <h2 className="text-xl font-semibold text-primary mb-4">אזהרות חשובות</h2>
          <p className="text-gray-700 font-semibold">❌ אסור:</p>
          <ul className="list-disc list-inside mr-4 space-y-2">
            <li>לפטר ללא שימוע</li>
            <li>להתנות על זכויות בסיסיות</li>
            <li>לעכב תשלומים מעבר ל-15 יום</li>
            <li>לפטר מסיבות מפלות</li>
            <li>לפטר עובדים מוגנים ללא אישור</li>
            <li>להפר הגנות מיוחדות בתקופת חירום</li>
          </ul>
          
          <p className="text-gray-700 font-semibold mt-4">✅ חובה:</p>
          <ul className="list-disc list-inside mr-4 space-y-2">
            <li>לתעד הכל בכתב</li>
            <li>לשמור מסמכים 7 שנים</li>
            <li>לחשב זכויות במדויק</li>
            <li>לתת הזדמנות אמיתית בשימוע</li>
            <li>לוודא עמידה בהוראות החירום</li>
          </ul>
        </div>
        
        <div className="content-box">
          <h2 className="text-xl font-semibold text-primary mb-4">סיום העסקה בהסכמה</h2>
          <p className="text-gray-700 leading-relaxed">אופציה מומלצת כשאפשר:</p>
          <ul className="list-disc list-inside mr-4 space-y-2">
            <li>הסכם פרישה מוסכם</li>
            <li>ויתור הדדי על תביעות (למעט זכויות קוגנטיות)</li>
            <li>הסדרת כל התשלומים מראש</li>
            <li>תנאי פרישה מוגדרים</li>
            <li>שמירה על זכויות בסיסיות שלא ניתן לוותר עליהן</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">⚠️ חשוב להדגיש: בכל מקרה של ספק או מורכבות, מומלץ להתייעץ עם עורך דין המתמחה בדיני עבודה.</p>
        </div>
      </div>
    </div>
  );
};

export default EndEmployment;
