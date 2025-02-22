
const AIJobMarket = () => {
  return (
    <div className="min-h-screen bg-mint-light pt-24 pb-12 px-4">
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-8 text-primary text-center">
            השלכות AI על שוק התעסוקה - עדכון ומסקנות מבוססות נתונים
          </h1>

          <section className="content-box">
            <h2 className="text-xl font-semibold text-primary">השפעות משמעותיות</h2>
            <h3 className="text-lg font-medium text-primary mt-4">דוח גולדמן זקס (2023)</h3>
            <ul className="list-disc list-inside mr-4 space-y-2 text-gray-700">
              <li>תחליף של 300 מיליון משרות מלאות עקב AI - מערכות בינה מלאכותית עשויות להיות מסוגלות לבצע את העבודה של 300 מיליון עובדים במשרה מלאה ברחבי העולם</li>
              <li>25% ממשימות העבודה בארה"ב ואירופה יבוצעו אוטומטית - רבע מכלל המשימות שנעשות כיום על ידי עובדים בארה"ב ובאירופה, יוכלו להתבצע על ידי תוכנות או מכונות אוטומטיות המבוססות על בינה מלאכותית</li>
              <li>צפי לצמיחה של 7% בתמ"ג העולמי בזכות עלייה בפרודוקטיביות - גולדמן זקס מאמינים שהשימוש בבינה מלאכותית יוביל לעלייה משמעותית בפריון העבודה, ולכן גם לצמיחה כלכלית גדולה יותר בכל העולם</li>
            </ul>

            <h3 className="text-lg font-medium text-primary mt-6">דוח הפורום הכלכלי העולמי (2025)</h3>
            <ul className="list-disc list-inside mr-4 space-y-2 text-gray-700">
              <li>צפי ליצירת 170 מיליון משרות חדשות מול אובדן 92 מיליון - הפורום הכלכלי העולמי צופה שעד שנת 2030, הבינה המלאכותית תוביל לא רק לאובדן משרות, אלא גם ליצירה של משרות חדשות בתחומים אחרים</li>
              <li>86% מהעסקים ישנו מודלים עסקיים עקב AI עד 2030 - רוב גדול של חברות וארגונים צפויים לשנות את דרך הפעולה שלהם, את המוצרים והשירותים שהם מציעים, ואת האופן שבו הם מרוויחים כסף</li>
            </ul>

            <h3 className="text-lg font-medium text-primary mt-6">מחקר PwC (2023)</h3>
            <ul className="list-disc list-inside mr-4 space-y-2 text-gray-700">
              <li>30% מהמשרות בעולם צפויות להיות אוטומטיות עד אמצע שנות ה-2030 - PwC מעריכים שתוך כעשור, כמעט שליש מהמשרות הקיימות היום יבוצעו על ידי מערכות אוטומטיות</li>
              <li>נשים בסיכון גבוה יותר בתחומים אדמיניסטרטיביים בשלבים הראשונים - המחקר מראה שנשים שעובדות בתפקידים משרדיים ומינהליים, נמצאות בסיכון גדול יותר לאבד את מקום עבודתן בשנים הקרובות</li>
            </ul>

            <h3 className="text-lg font-medium text-primary mt-6">מחקר McKinsey (2024)</h3>
            <ul className="list-disc list-inside mr-4 space-y-2 text-gray-700">
              <li>12 מיליון עובדים אמריקאים ייאלצו לשנות מקצוע עד 2030 - מקינזי מעריכים שמיליוני עובדים בארה"ב יצטרכו לרכוש מיומנויות חדשות ולעבור הסבה מקצועית</li>
              <li>תפקידים במשרד, שירות לקוחות וייצור - המושפעים העיקריים</li>
            </ul>
          </section>

          <section className="content-box">
            <h2 className="text-xl font-semibold text-primary">השפעות מתונות</h2>
            <h3 className="text-lg font-medium text-primary mt-4">מחקר MIT (2024)</h3>
            <ul className="list-disc list-inside mr-4 space-y-2 text-gray-700">
              <li>רק 23% מהמשרות החשופות ל-AI כדאיות כלכלית להחלפה מיידית - מחקר של MIT מצא שהרבה משרות אמנם יכולות טכנית להיות מוחלפות על ידי בינה מלאכותית, אבל מבחינה כלכלית זה לא תמיד משתלם לחברות לעשות את זה כרגע</li>
              <li>הקצב האיטי של אימוץ AI מאפשר הסתגלות הדרגתית - המחקר מרמז שהשינוי לא יקרה בבת אחת, אלא יהיה תהליך איטי יותר, מה שייתן לעובדים ולחברות יותר זמן להתכונן ולהסתגל</li>
            </ul>

            <h3 className="text-lg font-medium text-primary mt-6">דוח הבנק העולמי (2024)</h3>
            <p className="text-gray-700 leading-relaxed">
              השפעה מוגבלת על מדינות בעלות הכנסה נמוכה (26% מהמשרות) לעומת כלכלות מתקדמות (60%) - הבנק העולמי מציין שההשפעה של הבינה המלאכותית על שוק העבודה לא תהיה אחידה בכל העולם. במדינות עניות יותר, השינוי צפוי להיות פחות משמעותי מאשר במדינות עשירות
            </p>

            <h3 className="text-lg font-medium text-primary mt-6">דוח IMF (2024)</h3>
            <ul className="list-disc list-inside mr-4 space-y-2 text-gray-700">
              <li>40% מהמשרות בעולם יושפעו מ-AI, עם פערים בין מדינות - קרן המטבע הבינלאומית מעריכה ששיעור המשרות שיושפעו מבינה מלאכותית יהיה שונה ממדינה למדינה</li>
              <li>בכלכלות מתקדמות: 50% מהמשרות החשופות ייהנו משילוב AI, 50% בסיכון - במדינות עשירות, הקרן צופה תמונה מורכבת יותר: חצי מהמשרות שייחשפו לבינה מלאכותית, צפויות להשתפר בזכותה, וחצי אחר צפויות להיות בסכנה</li>
            </ul>
          </section>

          <section className="content-box">
            <h2 className="text-xl font-semibold text-primary">שינויים מבניים ואי-שוויון</h2>
            <h3 className="text-lg font-medium text-primary mt-4">דוח קרן המטבע הבינלאומית (2024)</h3>
            <ul className="list-disc list-inside mr-4 space-y-2 text-gray-700">
              <li>פערי שכר עלולים להתרחב עקב ירידה בביקוש לעובדים בעלי מיומנויות בסיסיות - הקרן מזהירה שהפערים בין העשירים לעניים עלולים לגדול</li>
              <li>נשים בסיכון גבוה יותר לאוטומציה בתחומים אדמיניסטרטיביים - הקרן שוב מדגישה שנשים עובדות יותר בתחומים שקל יותר להחליף בבינה מלאכותית</li>
            </ul>

            <h3 className="text-lg font-medium text-primary mt-6">מחקר אוניברסיטת אוקספורד (2023)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              תחרות מוגברת במקצועות יצירתיים (עיתונאות, משפטים) עקב AI - צפוי לחץ על שכר. גם מקצועות שנחשבו בעבר "בטוחים" מאוטומציה, כמו עיתונות ועריכת דין, צפויים להיות מושפעים. מערכות בינה מלאכותית מתחילות להיות מסוגלות לבצע גם עבודות יצירתיות, מה שעלול להגביר את התחרות על מקומות עבודה בתחומים אלו ולהוריד את השכר
            </p>

            <h3 className="text-lg font-medium text-primary mt-6">דוח Aura (2025)</h3>
            <p className="text-gray-700 leading-relaxed">
              גידול של 16,000 משרות AI באוקטובר 2024, במיוחד בתחומי הנדסה ובריאות. למרות החששות מאובדן משרות, יש גם צד חיובי: הבינה המלאכותית יוצרת משרות חדשות בתחומים שקשורים לפיתוח, יישום ותחזוקה של מערכות AI עצמן
            </p>
          </section>

          <section className="content-box">
            <h2 className="text-xl font-semibold text-primary">המלצות ומגמות עתידיות</h2>
            <h3 className="text-lg font-medium text-primary mt-4">סטנפורד (2025)</h3>
            <ul className="list-disc list-inside mr-4 space-y-2 text-gray-700">
              <li>דגש על AI כתומך בעובדים (Augmented Intelligence) - לא כמחליף. אוניברסיטת סטנפורד ממליצה להתייחס לבינה המלאכותית ככלי שיכול לעזור ולשפר את העבודה של בני אדם</li>
              <li>צורך בפיתוח מדיניות אתית לאימוץ AI בארגונים - סטנפורד קוראת לחברות וארגונים לקבוע כללים ברורים ומוסריים לגבי השימוש בבינה מלאכותית</li>
            </ul>

            <h3 className="text-lg font-medium text-primary mt-6">ארגון העבודה הבינלאומי (ILO)</h3>
            <ul className="list-disc list-inside mr-4 space-y-2 text-gray-700">
              <li>דרישה להשקעה מסיבית בהכשרות מקצועיות מותאמות AI - ארגון העבודה הבינלאומי טוען שהדרך להתמודד עם השינויים בשוק העבודה היא להשקיע הרבה כסף ומשאבים בהכשרה מקצועית של עובדים</li>
              <li>דיאלוג חברתי קריטי להפחתת אי-שוויון בתעסוקה - הארגון מדגיש שחשוב לנהל שיח ושיתוף פעולה בין ממשלות, מעסיקים ועובדים</li>
            </ul>

            <h3 className="text-lg font-medium text-primary mt-6">מגמת המיומנויות (2025)</h3>
            <ul className="list-disc list-inside mr-4 space-y-2 text-gray-700">
              <li>ביקוש גובר למומחי NLP, Machine Learning ו-Generative AI - בשוק העבודה העתידי, יהיה ביקוש גדול לאנשים שמתמחים בתחומים טכנולוגיים ספציפיים של בינה מלאכותית</li>
              <li>כישורים היברידיים (טכניים + אסטרטגיים) - מפתח לתעסוקה עתידית. חשוב שיהיו לעובדים גם כישורים "רכים" יותר, כמו חשיבה אסטרטגית ויכולת פתרון בעיות מורכבות</li>
            </ul>
          </section>

          <section className="content-box">
            <h2 className="text-xl font-semibold text-primary">מקורות</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>דוח גולדמן זקס (2023):</strong> <a href="https://www.bbc.com/news/technology-65102150" className="text-blue-600 hover:underline">BBC News</a></p>
              <p><strong>דוח הפורום הכלכלי העולמי (2025):</strong> <a href="https://aimagazine.com/articles/wef-report-the-impact-of-ai-driving-170m-new-jobs-by-2030" className="text-blue-600 hover:underline">AI Magazine</a></p>
              <p><strong>מחקר PwC (2023):</strong> <a href="https://www.nexford.edu/insights/how-will-ai-affect-jobs" className="text-blue-600 hover:underline">Nexford University</a></p>
              <p><strong>מחקר McKinsey (2024):</strong> <a href="https://www.businessinsider.com/jobs-at-risk-from-ai-replace-change-chatgpt-automation-study-2023-7" className="text-blue-600 hover:underline">Business Insider</a></p>
              <p><strong>מחקר MIT (2024):</strong> <a href="https://www.cnn.com/2024/01/22/tech/ai-labor-market-mit-study/index.html" className="text-blue-600 hover:underline">CNN</a></p>
              <p><strong>דוח הבנק העולמי (2024):</strong> <a href="https://blogs.worldbank.org/en/digital-development/tipping-the-scales--ai-s-dual-impact-on-developing-nations" className="text-blue-600 hover:underline">World Bank Blog</a></p>
              <p><strong>דוח IMF (2024):</strong> <a href="https://www.bbc.com/news/business-67977967" className="text-blue-600 hover:underline">BBC News</a></p>
              <p><strong>מחקר אוניברסיטת אוקספורד (2023):</strong> <a href="https://www.bbc.com/news/technology-65102150" className="text-blue-600 hover:underline">BBC News</a></p>
              <p><strong>דוח Aura (2025):</strong> <a href="https://blog.getaura.ai/ai-job-trends-2025" className="text-blue-600 hover:underline">Aura Blog</a></p>
              <p><strong>סטנפורד (2025):</strong> <a href="https://provost.stanford.edu/2025/01/09/report-of-the-ai-at-stanford-advisory-committee/" className="text-blue-600 hover:underline">Stanford Report</a></p>
              <p><strong>ארגון העבודה הבינלאומי (ILO):</strong> <a href="https://www.ilo.org/resource/news/ilo-director-general-calls-placing-decent-work-heart-automation-and-ai" className="text-blue-600 hover:underline">ILO News</a></p>
              <p><strong>מגמת המיומנויות (2025):</strong> <a href="https://blog.getaura.ai/ai-job-trends-2025" className="text-blue-600 hover:underline">Aura Blog</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AIJobMarket;
