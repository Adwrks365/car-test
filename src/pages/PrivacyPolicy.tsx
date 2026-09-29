import { EMAIL, PHONE_DISPLAY, mailHref, telHref } from "../config";
import { LegalBlock, LegalLayout } from "./LegalLayout";

export function PrivacyPolicy() {
  return (
    <LegalLayout title="מדיניות פרטיות · Политика конфиденциальности">
      <LegalBlock lang="he" dir="rtl">
        <h1 className="text-3xl font-extrabold tracking-tight text-navy">מדיניות פרטיות</h1>
        <p className="mt-3 text-sm font-semibold text-steel">עודכן: 29 בספטמבר 2026</p>
        <p className="mt-4 leading-relaxed text-steel">
          האתר מציג את שירות ההכנה והליווי לטסט השנתי של ארקדי וינר בכרמיאל. אין באתר חשבון משתמש ואין
          מסד נתונים של לקוחות בשרת שלי.
        </p>
        <h2 className="mt-8 text-xl font-extrabold text-navy">מה נמסר כשפונים</h2>
        <ul className="mt-3 list-disc space-y-2 ps-5 leading-relaxed text-steel">
          <li>טופס «заявка» באתר אינו נשלח לשרת. לחיצה על השליחה פותחת את WhatsApp עם הטקסט שהקלדתם: שם, טלפון, פרטי רכב והערה.</li>
          <li>שיחה או הודעה ל־{PHONE_DISPLAY} ול־WhatsApp מגיעות אליי ישירות. את תוכן השיחה שומרות WhatsApp / Meta לפי המדיניות שלהן, וגם במכשיר שלי ובמכשיר שלכם.</li>
          <li>פנייה בדוא״ל אל {EMAIL} נשמרת בתיבת הדואר שלי כדי שאוכל לענות ולתאם שירות.</li>
        </ul>
        <h2 className="mt-8 text-xl font-extrabold text-navy">צדדים שלישיים</h2>
        <p className="mt-3 leading-relaxed text-steel">
          האתר טוען גופנים מ־Google Fonts. הבקשה הזו עשויה לחשוף לגוגל את כתובת ה־IP ופרטי הדפדפן. קישור
          למפה פותח את Google Maps. כפתור WhatsApp פותח שירות של Meta. איני מוכר פרטים ואיני מעביר רשימות
          תפוצה.
        </p>
        <h2 className="mt-8 text-xl font-extrabold text-navy">עוגיות ו־Google Analytics</h2>
        <p className="mt-3 leading-relaxed text-steel">
          נכון למועד העדכון האתר אינו מטמיע את Google Analytics ואינו מציב עוגיות מדידה משלו. העדפות תפריט
          הנגישות נשמרות ב־localStorage בדפדפן שלכם בלבד ואינן נשלחות אליי. אם בעתיד אוסיף כלי מדידה, אעדכן
          כאן מה נאסף (למשל עמודים שנצפו, מכשיר משוער, מקור ההגעה), לאיזו מטרה, ואיך אפשר לחסום עוגיות
          בהגדרות הדפדפן או בהרחבה לחסימת מעקב. עוגיות חיוניות, אם יופיעו, ישמשו רק כדי שהאתר יפעל.
        </p>
        <h2 className="mt-8 text-xl font-extrabold text-navy">שמירה ובקשות</h2>
        <p className="mt-3 leading-relaxed text-steel">
          אין לי מאגר לקוחות באתר. התכתבות ב־WhatsApp ובדוא״ל נשמרת כל עוד היא נחוצה לתיאום השירות ולמענה
          לפנייה. אפשר לבקש למחוק התכתבות ישנה או לשאול איזה מידע קיבלתי: {EMAIL} או {PHONE_DISPLAY}.
        </p>
      </LegalBlock>

      <LegalBlock lang="ru" dir="ltr">
        <h2 className="text-3xl font-extrabold tracking-tight text-navy">Политика конфиденциальности</h2>
        <p className="mt-3 text-sm font-semibold text-steel">Обновлено: 29 сентября 2026</p>
        <p className="mt-4 leading-relaxed text-steel">
          Сайт рассказывает об услуге Аркадия Винера: подготовка и сопровождение на годовом техосмотре в
          Кармиэле. Учётных записей нет, и на моём сервере не хранится база клиентов.
        </p>
        <h3 className="mt-8 text-xl font-extrabold text-navy">Какие данные вы передаёте</h3>
        <ul className="mt-3 list-disc space-y-2 ps-5 leading-relaxed text-steel">
          <li>Форма заявки ничего не отправляет на сервер сайта. Кнопка открывает WhatsApp и подставляет имя, телефон, автомобиль и комментарий.</li>
          <li>Звонок и переписка на {PHONE_DISPLAY} попадают ко мне. Текст чата обрабатывает WhatsApp / Meta по своим правилам и остаётся в переписке на наших устройствах.</li>
          <li>Письмо на {EMAIL} хранится в почте, чтобы я мог ответить и договориться об услуге.</li>
        </ul>
        <h3 className="mt-8 text-xl font-extrabold text-navy">Другие сервисы</h3>
        <p className="mt-3 leading-relaxed text-steel">
          Шрифты загружаются с Google Fonts: Google может увидеть IP и данные браузера. Ссылка на карту
          открывает Google Maps. Кнопка WhatsApp открывает сервис Meta. Списки контактов я не продаю и не
          передаю для рассылок.
        </p>
        <h3 className="mt-8 text-xl font-extrabold text-navy">Файлы cookie и Google Analytics</h3>
        <p className="mt-3 leading-relaxed text-steel">
          На дату этой политики сайт не подключает Google Analytics и не ставит собственные аналитические
          cookie. Настройки меню доступности лежат в localStorage вашего браузера и мне не отправляются.
          Если позже появится счётчик посещений, здесь будет написано, что именно собирается (просмотренные
          страницы, тип устройства, источник перехода), зачем, и как отключить cookie в браузере или
          блокировщиком трекеров. Служебные cookie, если они понадобятся, будут только для работы сайта.
        </p>
        <h3 className="mt-8 text-xl font-extrabold text-navy">Сколько это хранится</h3>
        <p className="mt-3 leading-relaxed text-steel">
          Отдельной клиентской базы на сайте нет. Переписка в WhatsApp и почте остаётся, пока она нужна,
          чтобы ответить и оказать услугу. Можно попросить удалить старую переписку или уточнить, что я от
          вас получил: <a className="font-semibold text-navy underline" href={mailHref()}>{EMAIL}</a> или{" "}
          <a className="font-semibold text-navy underline" href={telHref()}>{PHONE_DISPLAY}</a>.
        </p>
      </LegalBlock>
    </LegalLayout>
  );
}
