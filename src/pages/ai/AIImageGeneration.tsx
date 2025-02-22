const AIImageGeneration = () => {
  return (
    <div className="min-h-screen bg-mint-light pt-24 pb-12 px-4">
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-8 text-primary text-center">
            יצירת תמונות מטקסט בעזרת בינה מלאכותית
          </h1>
          
          {[
            {
              title: "Bing Image Creator",
              description: "מבוסס על טכנולוגיית DALL-E, מאפשר יצירת תמונות מטקסט בחינם דרך מנוע החיפוש של Bing.",
              pricing: "חינם לשימוש, מוגבל במספר היצירות היומיות."
            },
            {
              title: "DALL-E 3",
              description: "איכות גבוהה, אינטגרציה עם ChatGPT, מתאים למתחילים ומתקדמים.",
              pricing: "זמין למשתמשי ChatGPT Plus (20$ לחודש) או Enterprise."
            },
            {
              title: "Midjourney",
              description: "כלי מוביל ליצירת תמונות ברזולוציה גבוהה ובסגנונות מגוונים, דורש מיומנות בהנדסת פרומפטים.",
              pricing: "החל מ-10 לחודש למנוי בסיסי, עד 120 לחודש למנוי Pro."
            },
            {
              title: "Stable Diffusion",
              description: "מבוסס קוד פתוח, גמיש מאוד ומתאים למשתמשים טכניים.",
              pricing: "חינם לשימוש עצמאי, תשלום עבור שירותים מסחריים מבוססי Stable Diffusion."
            },
            {
              title: "Ideogram",
              description: "מצטיין בשילוב טקסט בתמונות, לוגואים וטיפוגרפיה.",
              pricing: "מציע גרסה חינמית מוגבלת, תוכניות בתשלום החל מ-8$ לחודש."
            },
            {
              title: "RunwayML",
              description: "כלי מקצועי עם פיצ'רים מתקדמים לעריכה ויצירה.",
              pricing: "החל מ-15 לחודש למנוי בסיסי, עד 95 לחודש למנוי Pro."
            },
            {
              title: "NightCafe",
              description: "מתאים למתחילים בזכות ממשק פשוט ותמיכה בסגנונות שונים.",
              pricing: "מציע גרסה חינמית מוגבלת, תוכניות בתשלום החל מ-9.99$ לחודש."
            },
            {
              title: "Leonardo.AI",
              description: "כלי חדשני עם אפשרויות מתקדמות לבניית מודלים ודמויות עקביות.",
              pricing: "גרסה חינמית עם 150 קרדיטים יומיים, תוכניות בתשלום החל מ-10$ לחודש."
            },
            {
              title: "Flux",
              description: "כלי חזק במיוחד ליצירת דמויות עקביות ומודלים מותאמים אישית.",
              pricing: "מציע גרסה חינמית מוגבלת, תוכניות בתשלום החל מ-10$ לחודש."
            },
            {
              title: "DreamStudio (Stable Diffusion)",
              description: "גרסה ידידותית למשתמש של Stable Diffusion עם ממשק מבוסס דפדפן.",
              pricing: "מציע קרדיטים חינמיים בהתחלה, תשלום לפי שימוש לאחר מכן."
            },
            {
              title: "BlueWillow",
              description: "אלטרנטיבה חינמית ל-Midjourney, נגיש דרך Discord.",
              pricing: "חינם לשימוש ללא הגבלה."
            },
            {
              title: "Playground AI",
              description: "מאפשר יצירת 1,000 תמונות ביום בחינם עם מגוון סגנונות מבוססי Stable Diffusion.",
              pricing: "גרסה חינמית נדיבה, תוכניות בתשלום זמינות לשימוש מסחרי."
            },
            {
              title: "StarryAI",
              description: "כלי פשוט ונוח לשימוש שמציע יצירת תמונות ייחודיות.",
              pricing: "מציע גרסה חינמית מוגבלת, תוכניות בתשלום החל מ-9.99$ לחודש."
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

export default AIImageGeneration;
