import { EMAIL, PHONE_DISPLAY, mailHref, telHref } from "../config";
import { LegalBlock, LegalLayout } from "./LegalLayout";

export function AccessibilityStatement() {
  return (
    <LegalLayout title="הצהרת נגישות · Заявление о доступности">
      <LegalBlock lang="he" dir="rtl">
        <h1 className="text-3xl font-extrabold tracking-tight text-navy">הצהרת נגישות</h1>
        <p className="mt-3 text-sm font-semibold text-steel">עודכן: 29 בספטמבר 2026</p>
        <p className="mt-4 leading-relaxed text-steel">
          ארקדי וינר מעניק ליווי והכנה לטסט השנתי לרכב בכרמיאל. השירות מיועד גם לאנשים עם מוגבלות, ואני
          פועל להתאים את האתר ואת אופן מתן השירות בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות
          נגישות לשירות), התשע״ג–2013, ולתקן הישראלי ת״י 5568 המבוסס על הנחיות WCAG 2.0 ברמה AA.
        </p>
        <h2 className="mt-8 text-xl font-extrabold text-navy">התאמות באתר</h2>
        <ul className="mt-3 list-disc space-y-2 ps-5 leading-relaxed text-steel">
          <li>מבנה כותרות, קישור דילוג לתוכן וניווט באמצעות מקלדת.</li>
          <li>סימון מיקוד ברור, טקסט חלופי לתמונות משמעותיות ושמות נגישים לכפתורים.</li>
          <li>תפריט נגישות: ניגודיות גבוהה, מצב כהה, הגדלה והקטנה של הטקסט, הדגשת קישורים ומיקוד, עצירת אנימציות וגופן מערכת קריא.</li>
          <li>ההעדפות נשמרות במכשיר של המבקר ואינן נשלחות לשרת.</li>
        </ul>
        <h2 className="mt-8 text-xl font-extrabold text-navy">נגישות פיזית של השירות</h2>
        <p className="mt-3 leading-relaxed text-steel">
          אין משרד קהל קבוע שכתובתו פורסמה באתר. הפגישה, הבדיקה המוקדמת והליווי לטסט נקבעים מראש בכרמיאל.
          אם דרושה התאמה — גישה בלי מדרגות, זמן נוסף, ליווי של אדם מטעמכם, הסבר בעל פה או כל צורך אחר —
          נא לציין זאת כבר בפנייה. אתאם מקום ואופן מפגש שמתחשבים בבקשה, ככל שהדבר מעשי.
        </p>
        <h2 className="mt-8 text-xl font-extrabold text-navy">מגבלות ידועות</h2>
        <p className="mt-3 leading-relaxed text-steel">
          איור רישיון הרכב באתר הוא המחשה גרפית ולא מסמך רשמי. חלק מהפרטים הקטנים בתוכו אינם מיועדים
          לקריאה. אם משהו באתר אינו נגיש, אשמח לקבל פירוט ולתקן.
        </p>
        <h2 className="mt-8 text-xl font-extrabold text-navy">רכז נגישות</h2>
        <p className="mt-3 leading-relaxed text-steel">
          ארקדי וינר
          <br />
          דוא״ל: <a className="font-semibold text-navy underline" href={mailHref()}>{EMAIL}</a>
          <br />
          טלפון: <a className="font-semibold text-navy underline" href={telHref()}>{PHONE_DISPLAY}</a>
        </p>
      </LegalBlock>

      <LegalBlock lang="ru" dir="ltr">
        <h2 className="text-3xl font-extrabold tracking-tight text-navy">Заявление о доступности</h2>
        <p className="mt-3 text-sm font-semibold text-steel">Обновлено: 29 сентября 2026</p>
        <p className="mt-4 leading-relaxed text-steel">
          Аркадий Винер помогает с подготовкой и прохождением годового техосмотра в Кармиэле. Сайт и сам
          порядок услуги я стараюсь делать доступными в соответствии с израильскими правилами равных прав
          людей с ограниченными возможностями (адаптация услуг, 2013) и стандартом ת״י 5568, который
          опирается на WCAG 2.0 уровня AA.
        </p>
        <h3 className="mt-8 text-xl font-extrabold text-navy">Что уже есть на сайте</h3>
        <ul className="mt-3 list-disc space-y-2 ps-5 leading-relaxed text-steel">
          <li>Заголовки, ссылка «к содержанию» и управление с клавиатуры.</li>
          <li>Заметный фокус, подписи к значимым картинкам и понятные названия кнопок.</li>
          <li>Меню «נגישות»: высокий контраст, тёмная тема, размер текста, подсветка ссылок и фокуса, отключение анимации, простой системный шрифт.</li>
          <li>Эти настройки хранятся только в вашем браузере и никуда не отправляются.</li>
        </ul>
        <h3 className="mt-8 text-xl font-extrabold text-navy">Как проходит встреча</h3>
        <p className="mt-3 leading-relaxed text-steel">
          Постоянного офиса с опубликованным адресом на сайте нет. Осмотр, консультация и сопровождение
          на тест назначаются заранее в Кармиэле. Если нужен вход без ступеней, больше времени, человек
          рядом или объяснение вслух — напишите об этом сразу. Я подберу место и формат встречи, насколько
          это реально организовать.
        </p>
        <h3 className="mt-8 text-xl font-extrabold text-navy">Ограничения</h3>
        <p className="mt-3 leading-relaxed text-steel">
          Картинка ришион рехев на главной — иллюстрация, а не официальный документ. Мелкий текст на ней
          не рассчитан на чтение. Если какая-то часть сайта неудобна, напишите — поправлю.
        </p>
        <h3 className="mt-8 text-xl font-extrabold text-navy">Контакт по вопросам доступности</h3>
        <p className="mt-3 leading-relaxed text-steel">
          Аркадий Винер (Arkady Viner)
          <br />
          Почта: <a className="font-semibold text-navy underline" href={mailHref()}>{EMAIL}</a>
          <br />
          Телефон: <a className="font-semibold text-navy underline" href={telHref()}>{PHONE_DISPLAY}</a>
        </p>
      </LegalBlock>
    </LegalLayout>
  );
}
