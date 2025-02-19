
import React from 'react';

const SelfEmployedInIsrael: React.FC = () => {
  return (
    <div className="min-h-screen bg-mint-light pt-24 pb-12 px-4">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h1 className="text-3xl font-bold mb-8 text-primary text-center">עצמאים בישראל</h1>
        
        <div className="content-box">
          <h2 className="text-xl font-semibold text-primary mb-4">סיווגים במע"מ</h2>
          <table className="w-full text-sm bg-white rounded-lg overflow-hidden">
            <thead className="bg-primary/10">
              <tr>
                <th className="py-2 px-4 text-right">קריטריון</th>
                <th className="py-2 px-4 text-right">עוסק פטור</th>
                <th className="py-2 px-4 text-right">עוסק מורשה</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">תקרת הכנסות למע"מ</td>
                <td className="border px-4 py-2">עד 120,000 ₪</td>
                <td className="border px-4 py-2">ללא הגבלה</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">חיוב מע"מ</td>
                <td className="border px-4 py-2">פטור מגביית מע"מ</td>
                <td className="border px-4 py-2">חייב בגביית מע"מ</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">דיווח למע"מ</td>
                <td className="border px-4 py-2">פטור מדיווחים שוטפים</td>
                <td className="border px-4 py-2">חודשי/ דו-חודשי</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">קיזוז מע"מ תשומות</td>
                <td className="border px-4 py-2">לא יכול לקזז</td>
                <td className="border px-4 py-2">יכול לקזז</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="content-box">
          <h2 className="text-xl font-semibold text-primary mb-4">סיווג במס הכנסה (עוסק זעיר)</h2>
          <table className="w-full text-sm bg-white rounded-lg overflow-hidden">
            <thead className="bg-primary/10">
              <tr>
                <th className="py-2 px-4 text-right">קריטריון</th>
                <th className="py-2 px-4 text-right">פרטים</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">תקרת הכנסות</td>
                <td className="border px-4 py-2">עד 120,000 ₪</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">הוצאות מוכרות</td>
                <td className="border px-4 py-2">30% מההכנסות באופן אוטומטי (למעט ביטוח לאומי שמחייב הצגת קבלות)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">דיווח למס הכנסה</td>
                <td className="border px-4 py-2">פטור מדוח שנתי מלא</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">מי יכול להצטרף</td>
                <td className="border px-4 py-2">כל עוסק (פטור או מורשה) שהכנסתו עד 120,000 ₪</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="content-box">
          <h2 className="text-xl font-semibold text-primary mb-4">חיוב ביטוח לאומי (זהה לכולם)</h2>
          <table className="w-full text-sm bg-white rounded-lg overflow-hidden">
            <thead className="bg-primary/10">
              <tr>
                <th className="py-2 px-4 text-right">קריטריון</th>
                <th className="py-2 px-4 text-right">פרטים</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">חיוב</td>
                <td className="border px-4 py-2">חייב בתשלום</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">מדרגות</td>
                <td className="border px-4 py-2">5.97% עד 75,216 ₪ לשנה, 17.83% מעל</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="content-box bg-accent/10 rounded-lg">
          <h2 className="text-xl font-semibold text-primary mb-4">הערות חשובות</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>כל עוסק (פטור או מורשה) שהכנסתו השנתית עד 120,000 ₪ יכול לבחור במסלול עוסק זעיר במס הכנסה</li>
            <li>הבחירה להיות עוסק זעיר לא משפיעה על הסיווג במע"מ</li>
          </ul>
          
          <div className="mt-6">
            <h3 className="font-bold mb-2">עוסק שבחר במסלול זעיר:</h3>
            <ul className="list-disc list-inside mr-4 space-y-1">
              <li>נהנה מ-30% הוצאות אוטומטיות (למעט ביטוח לאומי)</li>
              <li>חייב להציג קבלות עבור תשלומי ביטוח לאומי כדי להכיר בהן כהוצאה</li>
              <li>פטור מדוח שנתי מלא למס הכנסה</li>
            </ul>
          </div>
          
          <div className="mt-4">
            <h3 className="font-bold mb-2">עוסק שלא בחר במסלול זעיר:</h3>
            <ul className="list-disc list-inside mr-4 space-y-1">
              <li>מדווח על הוצאות לפי קבלות</li>
              <li>חייב בדוח שנתי מלא למס הכנסה</li>
            </ul>
          </div>
        </div>

        <div className="content-box bg-accent/10 rounded-lg">
          <h2 className="text-xl font-semibold text-primary mb-4">הוצאות מוכרות והטבות מס חשובות</h2>
          
          <div className="mb-4">
            <h3 className="font-bold mb-2">קרן השתלמות:</h3>
            <ul className="list-disc list-inside mr-4 space-y-1">
              <li>הוצאה מוכרת: עד 4.5% מהרווח השנתי (מקסימום 11,925 ₪)</li>
              <li>פטור ממס רווחי הון: על הפקדות עד 20,520 ₪ בשנה</li>
              <li>חשוב: הפטור ממס רווחי הון לא תלוי בגובה ההכנסה</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">קרן פנסיה:</h3>
            <ul className="list-disc list-inside mr-4 space-y-1">
              <li>זיכוי מס: 35% מההפקדה המוכרת</li>
              <li>הוצאה מוכרת: עד 16.5% מהרווח השנתי</li>
              <li>תקרת הפקדה מוכרת: 34,488 ₪ בשנה</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfEmployedInIsrael;
