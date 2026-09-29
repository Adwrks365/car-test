import { EMAIL, PHONE_DISPLAY, mailHref, telHref } from "../config";
import { LegalBlock, LegalLayout } from "./LegalLayout";

export function TermsOfUse() {
  return (
    <LegalLayout title="תנאי שימוש · Условия использования">
      <LegalBlock lang="he" dir="rtl">
        <h1 className="text-3xl font-extrabold tracking-tight text-navy">תנאי שימוש</h1>
        <p className="mt-3 text-sm font-semibold text-steel">עודכן: 29 בספטמבר 2026</p>
        <p className="mt-4 leading-relaxed text-steel">
          השימוש באתר ובפנייה לארקדי וינר מהווים הסכמה לתנאים אלה. השירות הוא ייעוץ פרטי, הכנת הרכב
          וליווי לטסט השנתי בכרמיאל. האתר אינו תחנת רישוי, אינו מחליף את משרד התחבורה, וארקדי אינו פועל
          כאן כעובד או כנציג של קומפיטסט.
        </p>
        <h2 className="mt-8 text-xl font-extrabold text-navy">היקף השירות</h2>
        <ul className="mt-3 list-disc space-y-2 ps-5 leading-relaxed text-steel">
          <li>בדיקה מקדימה וייעוץ: מה עלול למנוע מעבר בטסט ומה כדאי לסדר לפני כן.</li>
          <li>הכנה לקראת הדרישות המקובלות של הטסט, בהיקף שסוכם מראש.</li>
          <li>ליווי ביום הטסט או טיפול בהגעה במקומכם, אם סוכם כך.</li>
        </ul>
        <p className="mt-3 leading-relaxed text-steel">
          אין כאן התחייבות שהרכב יעבור את הטסט. התוצאה תלויה במצב הרכב, במסמכים ובהחלטת תחנת הרישוי.
          תיקון במוסך, חלקים ואגרות רשמיות אינם כלולים אלא אם סוכמו בנפרד ובכתב או בהודעה.
        </p>
        <h2 className="mt-8 text-xl font-extrabold text-navy">האחריות של הפונה</h2>
        <p className="mt-3 leading-relaxed text-steel">
          יש למסור פרטים נכונים על הרכב, על מועד הטסט ועל תקלות ידועות. אין להשתמש באתר כדי להטעות תחנת
          רישוי או להסתיר ליקוי בטיחותי.
        </p>
        <h2 className="mt-8 text-xl font-extrabold text-navy">הגבלת אחריות</h2>
        <p className="mt-3 leading-relaxed text-steel">
          המידע באתר הוא הסבר כללי ואינו תחליף לבדיקה של הרכב שלכם. לא אשא באחריות לנזק עקיף, לאובדן
          רווח, לקנס או לכישלון בטסט שנבעו ממצב הרכב, מחלקי צד שלישי או מגורם מחוץ לשירות שסוכם. אחריות
          לשירות שסוכם בפועל מוגבלת, ככל שהדין מתיר, לסכום ששולם עבור אותו שירות.
        </p>
        <h2 className="mt-8 text-xl font-extrabold text-navy">האתר</h2>
        <p className="mt-3 leading-relaxed text-steel">
          אין להעתיק את הטקסטים והעיצוב לשימוש מסחרי בלי רשות. ייתכנו הפסקות זמניות באתר. על התנאים חל
          הדין הישראלי, ובית המשפט המוסמך במחוז הצפון, בכפוף לזכות צרכן שאינה ניתנת לוויתור.
        </p>
        <p className="mt-3 leading-relaxed text-steel">
          שאלות: <a className="font-semibold text-navy underline" href={mailHref()}>{EMAIL}</a>,{" "}
          <a className="font-semibold text-navy underline" href={telHref()}>{PHONE_DISPLAY}</a>.
        </p>
      </LegalBlock>

      <LegalBlock lang="ru" dir="ltr">
        <h2 className="text-3xl font-extrabold tracking-tight text-navy">Условия использования</h2>
        <p className="mt-3 text-sm font-semibold text-steel">Обновлено: 29 сентября 2026</p>
        <p className="mt-4 leading-relaxed text-steel">
          Заходя на сайт и обращаясь к Аркадию Винеру, вы соглашаетесь с этими условиями. Услуга —
          частная консультация, подготовка автомобиля и сопровождение на годовом тесте в Кармиэле. Сайт
          не является станцией лицензирования и не заменяет Министерство транспорта. Аркадий не выступает
          здесь сотрудником или представителем Компитест.
        </p>
        <h3 className="mt-8 text-xl font-extrabold text-navy">Что входит в услугу</h3>
        <ul className="mt-3 list-disc space-y-2 ps-5 leading-relaxed text-steel">
          <li>Предварительный осмотр и консультация: что может помешать пройти тест и что лучше закрыть заранее.</li>
          <li>Подготовка к обычным требованиям теста в том объёме, о котором договорились.</li>
          <li>Сопровождение в день теста или прохождение процедуры за вас, если это отдельно согласовано.</li>
        </ul>
        <p className="mt-3 leading-relaxed text-steel">
          Прохождение теста не гарантируется. Результат зависит от состояния машины, документов и решения
          станции. Ремонт в мастерской, запчасти и официальные сборы не входят в услугу, пока об этом не
          договорились отдельно сообщением.
        </p>
        <h3 className="mt-8 text-xl font-extrabold text-navy">Что нужно от вас</h3>
        <p className="mt-3 leading-relaxed text-steel">
          Сообщайте верные данные об автомобиле, сроке теста и известных неисправностях. Сайтом нельзя
          пользоваться, чтобы ввести станцию в заблуждение или скрыть опасный дефект.
        </p>
        <h3 className="mt-8 text-xl font-extrabold text-navy">Ограничение ответственности</h3>
        <p className="mt-3 leading-relaxed text-steel">
          Тексты на сайте — общее объяснение, а не осмотр именно вашей машины. Я не отвечаю за косвенный
          ущерб, упущенную выгоду, штраф или непройденный тест, если причина в состоянии автомобиля,
          работе третьих лиц или в чём-то за рамками согласованной услуги. Ответственность за фактически
          оказанную услугу, насколько это допускает закон, ограничена суммой, уплаченной за неё.
        </p>
        <h3 className="mt-8 text-xl font-extrabold text-navy">Сайт</h3>
        <p className="mt-3 leading-relaxed text-steel">
          Тексты и оформление нельзя копировать для коммерческого использования без разрешения. Сайт может
          быть временно недоступен. К условиям применяется право Израиля; споры — суды Северного округа,
          без ущемления неотменяемых прав потребителя.
        </p>
        <p className="mt-3 leading-relaxed text-steel">
          Вопросы: <a className="font-semibold text-navy underline" href={mailHref()}>{EMAIL}</a>,{" "}
          <a className="font-semibold text-navy underline" href={telHref()}>{PHONE_DISPLAY}</a>.
        </p>
      </LegalBlock>
    </LegalLayout>
  );
}
