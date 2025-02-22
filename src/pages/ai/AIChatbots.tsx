const AIChatbots = () => {
  return (
    <div className="min-h-screen bg-mint-light pt-24 pb-12 px-4">
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-8 text-primary text-center">
            צ'אטים של בינה מלאכותית
          </h1>
          
          {[
            {
              title: "Copilot - קופיילוט",
              developer: "GitHub ו-OpenAI",
              description: "עוזר כתיבת קוד מבוסס בינה מלאכותית, המשולב בעורכי קוד כמו Visual Studio Code, המסייע למפתחים לכתוב קוד במהירות וביעילות.",
              pricing: "גרסה חינמית מוגבלת למפתחים פרטיים, גרסה בתשלום: $10 לחודש למשתמש יחיד, $19 לחודש לעסקים."
            },
            {
              title: "ChatGPT - צ'אט-GPT",
              developer: "OpenAI",
              description: "מודל שיחה מתקדם המאפשר קבלת תשובות לשאלות, יצירת תוכן והסברים. זמין בגרסת Pro עם יכולות GPT-4.",
              pricing: "גרסה חינמית בסיסית, גרסת Pro: $20 לחודש עם גישה ל-GPT-4 ותכונות מתקדמות."
            },
            {
              title: "DeepSeek - דיפסיק",
              developer: "DeepSeek",
              description: "פלטפורמת חיפוש מבוססת בינה מלאכותית המתמקדת במידע מעמיק ומדויק, עם דגש על חיפוש מקיף וניתוח תוכן.",
              pricing: "גישה חינמית ללא הגבלות שימוש, מודל עסקי עתידי טרם הוכרז."
            },
            {
              title: "Gemini - ג'מיניי",
              developer: "Google",
              description: "צ'אטבוט מבוסס בינה מלאכותית של גוגל, המשולב עם שירותי Google Workspace, המציע אינטגרציה עמוקה עם כלי גוגל ושירותים מקוונים.",
              pricing: "גרסה חינמית בסיסית, גרסת Gemini Advanced: $20 לחודש, כולל גישה למודל המתקדם ביותר."
            },
            {
              title: "Le Chat - לה צ'אט",
              developer: "לא פורסם במלואם",
              description: "מודל שיחה מבוסס AI המיועד לשימושים אישיים ועסקיים, עם דגש על שיחה טבעית וחוויית משתמש חלקה (מידע נוסף מוגבל).",
              pricing: "מידע מוגבל זמין לגבי מבנה התמחור."
            },
            {
              title: "Qwen - קוון",
              developer: "Alibaba",
              description: "מודל שפה מתקדם מבית Alibaba, המותאם לשימושים עסקיים וארגוניים, ומשלב יכולות ניתוח מתקדמות ותובנות שוק.",
              pricing: "גישה חינמית לגרסת הצ'אט הבסיסית, מודל עסקי מלא לשימושים מסחריים טרם הוכרז."
            },
            {
              title: "Google AI Studio - גוגל AI סטודיו",
              developer: "Google",
              description: "פלטפורמה לפיתוח מודלים של למידת מכונה ובינה מלאכותית, המיועדת למפתחים וחוקרים המעוניינים ליצור פתרונות AI מתקדמים.",
              pricing: "גישה חינמית למפתחים עם מגבלות על כמות השימוש, תוכניות בתשלום לשימוש נרחב יותר טרם הוכרזו."
            },
            {
              title: "Grok - גרוק",
              developer: "xAI (חברת בת של X, לשעבר Twitter)",
              description: "עוזר בינה מלאכותית חדשני המתמקד באינטגרציה עם רשת X (לשעבר Twitter) וכלים נוספים, המיועד לסביבת עבודה דינמית ומחוברת. הצ'אטבוט מציע גישה לנתונים בזמן אמת ומאופיין בסגנון תקשורת שנון והומוריסטי.",
              pricing: "זמין למנויי X Premium Plus בעלות של $22 לחודש, גרסה מוגבלת זמינה למשתמשי X חינמיים, המאפשרת עד 10 שאילתות טקסט כל שעתיים ויצירת 3 תמונות בכל פעם."
            },
            {
              title: "Claude - קלוד",
              developer: "Anthropic",
              description: "מודל שיחה מתקדם המדגיש את נושאי הבטיחות והשקיפות, המיועד לשימושים אישיים ועסקיים כאחד, עם יכולות ניתוח והבנה עמוקות.",
              pricing: "גרסה חינמית בסיסית, גרסת Claude Pro: $20 לחודש, מספקת גישה מורחבת ותכונות נוספות."
            },
            {
              title: "Perplexity - פרפלקסיטי",
              developer: "Perplexity AI",
              description: "עוזר חיפוש מבוסס בינה מלאכותית, המספק תשובות מבוססות מקורות אמינים ומדויקים לשאלות המשתמש, תוך דגש על הצגת מידע מקיף ומעודכן.",
              pricing: "גרסה חינמית בסיסית, גרסת Pro: $20 לחודש, מספקת גישה למודלים מתקדמים ותכונות נוספות."
            },
          ].map((item, index) => (
            <section key={index} className="content-box">
              <h2 className="text-xl font-semibold text-primary">{item.title}</h2>
              <p className="text-gray-600 font-medium">מפתח: {item.developer}</p>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
              <p className="text-gray-700 leading-relaxed mt-2">עלויות: {item.pricing}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIChatbots;
