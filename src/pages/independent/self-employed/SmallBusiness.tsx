import React from 'react';

const SmallBusiness = () => {
  return (
    <div className="min-h-screen bg-mint-light pt-24 pb-12 px-4">
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-8 text-primary text-center">
            עוסק זעיר
          </h1>

          <section className="content-box">
            <p className="text-gray-700 leading-relaxed">עוסק זעיר הוא סיווג חדש שהוגדר על ידי רשות המסים במסגרת רפורמה שנועדה להקל על עסקים קטנים בישראל.</p>
            <p className="text-gray-700 leading-relaxed">סיווג זה מאפשר לעצמאים עם מחזור עסקאות שנתי של עד 120,000 ₪ ליהנות מהקלות משמעותיות, כגון:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li><strong>פטור מהגשת דו"ח שנתי (טופס 1301):</strong> במקום זאת, נדרש דיווח מקוצר של מחזור ההכנסות השנתי.</li>
              <li><strong>הכרה אוטומטית בהוצאות בשיעור של 30% מהמחזור:</strong> ללא צורך בהצגת קבלות או תיעוד הוצאות בפועל.</li>
              <li><strong>פטור מתשלום מקדמות מס הכנסה:</strong> התשלום מתבצע בסוף השנה, בהתאם לדיווח.</li>
            </ul>
          </section>

          <section className="content-box">
            <p className="text-gray-700 leading-relaxed"><strong>ההגדרה של "עוסק זעיר" מתייחסת למס הכנסה בלבד!</strong> במסגרת מע"מ, קיימת ההגדרה של "עוסק פטור", המתייחסת לעוסקים שמחזור העסקאות השנתי שלהם אינו עולה על התקרה שנקבעה בחוק (120,000 ₪ נכון לשנת 2024) והם פטורים מגביית מע"מ מלקוחותיהם. חשוב לציין שההגדרות של "עוסק זעיר" ו"עוסק פטור" נפרדות, וייתכן שעוסק יוגדר כ"עוסק פטור" במע"מ וכ"עוסק זעיר" במס הכנסה, או רק באחת מהן, בהתאם לעמידתו בתנאים הנדרשים.</p>
            <p className="text-gray-700 leading-relaxed">מי שיכול להירשם כ"עוסק זעיר" במס הכנסה הם עצמאים (עוסק פטור או עוסק מורשה) שמחזור העסקאות השנתי שלהם אינו עולה על 120,000 ₪. גם בעלי מקצועות חופשיים כמו עורכי דין, רואי חשבון ומהנדסים, שמחויבים להירשם כעוסק מורשה, יכולים להיחשב כעוסק זעיר במקביל.</p>
          </section>

          <section className="content-box">
            <h2 className="text-xl font-semibold text-primary mb-4">תנאים נוספים להגדרת עוסק זעיר</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>העסק אינו מעסיק עובדים.</li>
              <li>העוסק אינו בעל שליטה בחברה.</li>
              <li>לא יותר מ-25% מהכנסות העסק מתקבלות ממי שהיה מעסיקו של העוסק במהלך שלוש שנות המס הקודמות.</li>
              <li>לא יותר מ-25% מההכנסות מתקבלות מקרוב משפחה.</li>
              <li>העוסק חייב לנהל פנקסים קבילים.</li>
              <li>כל הכנסת העסק חייבת להיות מיגיעה אישית של העוסק.</li>
              <li>הכנסת העסק לא יכולה להיות מיוחסת מ"תאגיד שקוף".</li>
              <li>אם מחזור העסקאות השנתי עולה על 120,000 ₪, העוסק יאבד את מעמדו כ"עוסק זעיר" ויידרש להגיש דו"ח שנתי מלא ולהתנהל בהתאם לחובות החלות על עוסקים רגילים.</li>
            </ul>
          </section>

          <section className="content-box">
            <p className="text-gray-700 leading-relaxed">הרישום מתבצע באופן מקוון דרך אתר רשות המסים.</p>
            <p className="text-gray-700 leading-relaxed">הרפורמה נועדה לפשט את ההתנהלות מול רשויות המס עבור עסקים קטנים, להפחית את הנטל הבירוקרטי ולאפשר להם להתמקד בפעילות העסקית. חשוב לציין כי הרפורמה נכנסה לתוקף בנובמבר 2024 ותחול על שנת המס 2025 ואילך.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SmallBusiness;
