
import React from 'react';

const PracticalGuideGlobalContract: React.FC = () => {
  return (
    <div className="min-h-screen bg-mint-light pt-24 pb-12 px-4">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h1 className="text-3xl font-bold mb-8 text-primary text-center">מדריך מעשי להעסקה בחוזה גלובלי</h1>
        
        <div className="content-box">
          <h2 className="text-xl font-semibold text-primary mb-4">עקרונות יסוד</h2>
          <p>חוזה גלובלי הוא הסכם המגדיר שכר חודשי קבוע הכולל את כל מרכיבי התגמול. המדריך הזה יעזור לכם ליישם אותו נכון ולהימנע מסיכונים משפטיים.</p>
        </div>
        
        <div className="content-box">
          <h2 className="text-xl font-semibold text-primary mb-4">דרישות חוקיות בסיסיות</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>השכר הגלובלי חייב לעמוד בדרישות שכר המינימום לפי חוק</li>
            <li>חובה לנהל רישום מדויק של שעות העבודה (חובה חוקית)</li>
            <li>חובה להפריד בבירור בין שכר הבסיס לבין תשלום עבור שעות נוספות</li>
            <li>יש להגדיר מספר מקסימלי של שעות נוספות בחוזה</li>
          </ol>
        </div>
        
        <div className="content-box">
          <h2 className="text-xl font-semibold text-primary mb-4">מה חייב להיות בחוזה</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>הגדרה ברורה של שכר הבסיס למשרה מלאה (ממוצע של 182 שעות חודשיות, משתנה לפי החודש הספציפי)</li>
            <li>פירוט מדויק של השעות הנוספות המקסימליות המותרות והתשלום עבורן</li>
            <li>רשימה של כל התוספות הכלולות בשכר (נסיעות, הבראה, בונוסים)</li>
            <li>הגדרת תנאים סוציאליים (פנסיה, קרן השתלמות)</li>
            <li>מנגנון להתחשבנות במקרה של חריגה משמעותית בשעות העבודה</li>
            <li>תנאים לעדכון החוזה (בהסכמת שני הצדדים)</li>
          </ol>
        </div>
        
        <div className="content-box">
          <h2 className="text-xl font-semibold text-primary mb-4">איך לחשב נכון את השכר הגלובלי</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>קביעת שכר בסיס הוגן למשרה (לא פחות משכר מינימום)</li>
            <li>חישוב שעות נוספות לפי יום עבודה (לא לפי חודש):
              <ul className="list-disc list-inside mr-6 mt-2 space-y-1">
                <li>שעתיים ראשונות ביום: 125% משכר הבסיס</li>
                <li>מהשעה השלישית ואילך באותו יום: 150% משכר הבסיס</li>
              </ul>
            </li>
            <li>הוספת תוספות קבועות (נסיעות, הבראה)</li>
            <li>חישוב ההפרשות הסוציאליות על הרכיבים הפנסיוניים</li>
          </ol>
        </div>
        
        <div className="content-box">
          <h2 className="text-xl font-semibold text-primary mb-4">מה אסור לעשות</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>להגדיר שכר גלובלי ללא פירוט מרכיביו</li>
            <li>לכלול תשלום עבור שעות נוספות בלתי מוגבלות</li>
            <li>להימנע מתיעוד שעות העבודה בפועל (זו הפרה של החוק)</li>
            <li>לשלם פחות משכר מינימום</li>
            <li>לשנות את תנאי החוזה ללא הסכמת העובד</li>
            <li>להסתיר את אופן חישוב השכר והזכויות מהעובד</li>
          </ol>
        </div>
        
        <div className="content-box">
          <h2 className="text-xl font-semibold text-primary mb-4">בקרה ומעקב</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>ניהול רישום יומי מדויק של שעות העבודה (חובה חוקית)</li>
            <li>בדיקה חודשית של התאמה בין השכר המשולם לעבודה בפועל</li>
            <li>בדיקות תקופתיות לוודא עמידה בחוקי העבודה</li>
            <li>תיעוד מסודר של כל השינויים והעדכונים</li>
            <li>מעקב אחר השינויים בשכר המינימום והתאמת השכר בהתאם</li>
          </ol>
        </div>
        
        <div className="content-box">
          <h2 className="text-xl font-semibold text-primary mb-4">סימני אזהרה שדורשים טיפול מיידי</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>עבודה קבועה מעבר לשעות שהוגדרו בחוזה</li>
            <li>חריגה ממכסת השעות הנוספות המוסכמת</li>
            <li>תלונות עובדים על שחיקה</li>
            <li>אי בהירות בתלושי השכר</li>
            <li>חוסר תיעוד של שעות העבודה</li>
          </ul>
        </div>
        
        <div className="content-box">
          <h2 className="text-xl font-semibold text-primary mb-4">המלצות מעשיות</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>היוועצו עם עורך דין בניסוח החוזה הראשוני</li>
            <li>הקפידו על שקיפות מלאה מול העובד</li>
            <li>נהלו מערכת מסודרת לרישום שעות עבודה</li>
            <li>בצעו בדיקות תקופתיות של עמידה בחוקי העבודה</li>
            <li>שמרו על תקשורת פתוחה עם העובדים לגבי היקפי העבודה</li>
            <li>תעדו כל שינוי או חריגה באופן מסודר</li>
          </ol>
        </div>
        
        <div className="content-box">
          <h2 className="text-xl font-semibold text-primary mb-4">סיכום</h2>
          <p>העסקה בחוזה גלובלי יכולה להיות יעילה ונוחה לשני הצדדים, אך מחייבת ניהול קפדני, עמידה בדרישות החוק והוגנות. המפתח להצלחה הוא שקיפות, תיעוד מסודר ובחינה תקופתית של ההסדר.</p>
        </div>
      </div>
    </div>
  );
};

export default PracticalGuideGlobalContract;
