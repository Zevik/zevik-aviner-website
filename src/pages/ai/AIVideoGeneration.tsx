const AIVideoGeneration = () => {
  return (
    <div className="min-h-screen bg-mint-light pt-24 pb-12 px-4">
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-8 text-primary text-center">
            יצירת סרטונים מטקסט (או מתמונה) בעזרת בינה מלאכותית
          </h1>
          
          {[
            {
              title: "Kling AI",
              description: "יצירת וידאו מטקסט ותמונה באיכות HD (1080p), כולל תנועות טבעיות ואנימציות מתקדמות.",
              pricing: "גרסה חינמית נדיבה, גרסאות בתשלום מתחילות מ-$29 לחודש."
            },
            {
              title: "Hailuo AI Minimax",
              description: "יצירת וידאו מטקסט או תמונה, כולל תנועות מצלמה טבעיות ואנימציות מקצועיות.",
              pricing: "גרסה חינמית מוגבלת, מחירי הגרסאות בתשלום לא פורסמו באופן רשמי."
            },
            {
              title: "RunwayML",
              description: "כלי לעריכת וידאו מבוסס AI, כולל יצירת סצנות מונפשות מטקסט.",
              pricing: "גרסה חינמית מוגבלת, תוכניות בתשלום מתחילות מ-$15 לחודש."
            },
            {
              title: "Pictory",
              description: "ממיר טקסט לווידאו באופן אוטומטי, כולל שילוב כתוביות ותמונות.",
              pricing: "גרסה חינמית מוגבלת, תוכניות בתשלום מתחילות מ-$19 לחודש."
            },
            {
              title: "Powtoon",
              description: "יצירת סרטוני אנימציה והסבר עם שילוב טקסט, תמונות ורקעים מעוצבים.",
              pricing: "גרסה חינמית נדיבה, תוכניות בתשלום מתחילות מ-$20 לחודש."
            },
            {
              title: "Animoto",
              description: "כלי פשוט ליצירת סרטונים מטקסט עם מאגר מדיה מובנה ותבניות מוכנות מראש.",
              pricing: "גרסה חינמית מוגבלת, תוכניות בתשלום מתחילות מ-$16 לחודש."
            },
            {
              title: "Elai.io",
              description: "ממיר טקסט לווידאו עם אווטארים מותאמים אישית ודיבוב אוטומטי ב-65+ שפות.",
              pricing: "גרסה חינמית מוגבלת, תוכניות בתשלום מתחילות מ-$23 לחודש."
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

export default AIVideoGeneration;
