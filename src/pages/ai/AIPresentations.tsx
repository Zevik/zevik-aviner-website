const AIPresentations = () => {
  return (
    <div className="min-h-screen bg-mint-light pt-24 pb-12 px-4">
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-8 text-primary text-center">
            יצירת מצגות בעזרת בינה מלאכותית
          </h1>
          
          {[
            {
              title: "Gamma",
              description: "יצירת מצגות אוטומטית מטקסט בשפה חופשית, ממשק אינטואיטיבי, תבניות מותאמות אישית ושיתוף פעולה בזמן אמת. תומך בעברית ליצירת תוכן ועיצוב.",
              pricing: "גרסה חינמית זמינה ללא הגבלה. גרסת פרימיום עולה כ-8$ לחודש עם תכונות מתקדמות נוספות."
            },
            {
              title: "Canva (Magic Write)",
              description: "כלי עיצוב מתקדם עם תבניות למצגות, הצעות עיצוב אוטומטיות ושילוב מולטימדיה. תומך בטקסט ובעיצובים בעברית.",
              pricing: "גרסה חינמית זמינה עם תבניות בסיסיות ותכונות מוגבלות. גרסת Pro עולה כ-120$ לשנה."
            },
            {
              title: "Microsoft PowerPoint עם Copilot/Designer",
              description: "יצירת מצגות אוטומטית מטקסט, הצעות עיצוב חכמות ושילוב גרפיקה ותמונות באיכות גבוהה. תמיכה מלאה בטקסט ובעיצוב בעברית.",
              pricing: "זמין כחלק ממנוי Microsoft 365 (כולל גרסת ניסיון). עלות המנוי השנתי היא כ-30$ לחודש בתשלום שנתי מראש."
            },
            {
              title: "Google Slides עם Gemini AI",
              description: "יצירת שקפים אוטומטית, סיכום תוכן ושכתוב טקסטים בעזרת AI. תומך בטקסט ובעיצוב בעברית.",
              pricing: "זמין בחינם כחלק מ-Google Workspace (כולל חשבונות Gmail רגילים). גרסאות עסקיות מתקדמות יותר זמינות בתשלום."
            },
            {
              title: "Beautiful.ai",
              description: "התאמות עיצוב אוטומטיות, פריסות דינמיות ושמירה על מראה מקצועי ללא צורך במיומנויות עיצוב מיוחדות. תמיכה חלקית בטקסט בעברית (מתאים בעיקר לעיצוב חזותי).",
              pricing: "גרסה חינמית זמינה עם מגבלות על פיצ'רים מתקדמים. תוכנית Pro עולה כ-12$ לחודש."
            },
            {
              title: "Slidesgo",
              description: "אלפי תבניות מותאמות אישית, כולל אפשרויות התאמה אישית לתוכן ולעיצוב. תומך בטקסט ובעיצובים פשוטים בעברית.",
              pricing: "גרסה חינמית כוללת גישה לתבניות בסיסיות ועדכונים שוטפים. גרסת פרימיום עולה כ-7.5$ לחודש עם גישה לתבניות נוספות."
            },
            {
              title: "Simplified AI",
              description: "יצירת שקופיות מרהיבות עם אלמנטים חזותיים מותאמים אישית ושיתוף פעולה בזמן אמת בין משתמשים שונים. תומך בטקסט ובעיצוב בעברית.",
              pricing: "גרסה חינמית זמינה עם פונקציות בסיסיות לשימוש אישי או צוותי. תוכניות בתשלום מתחילות מ-12$ לחודש עם תכונות מתקדמות יותר."
            }
          ].map((item, index) => (
            <section key={index} className="content-box">
              <h2 className="text-xl font-semibold text-primary">{item.title}</h2>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
              <p className="text-gray-700 leading-relaxed mt-2">עלויות: {item.pricing}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIPresentations;
