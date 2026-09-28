export function Footer() {
  return (
    <footer className="bg-navy-deep pb-28 text-foam md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Аркадий · Техосмотр в Кармиэле</p>
        <p>Бывший главный эксперт и руководитель Компитест Кармиэль</p>
      </div>
    </footer>
  );
}
