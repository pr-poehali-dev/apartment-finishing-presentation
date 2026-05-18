import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const ACCENT = "#9A9A96";
const PORTFOLIO_IMAGE = "https://cdn.poehali.dev/projects/830044c3-63d5-4b40-9cea-c9639af22500/files/cd732ccd-02f4-47e0-a72b-4c98ea214f6d.jpg";
const LOGO_WHITE = "https://cdn.poehali.dev/projects/830044c3-63d5-4b40-9cea-c9639af22500/bucket/55e40c34-2198-4782-8615-21b1fb699e9b.png";

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
    >
      {children}
    </div>
  );
}

const services = [
  { num: "01", title: "Чистовая отделка", desc: "Штукатурные работы, шпаклёвка, покраска стен и потолков" },
  { num: "02", title: "Укладка плитки", desc: "Керамогранит, мозаика, декоративная плитка любой сложности" },
  { num: "03", title: "Напольные покрытия", desc: "Паркет, ламинат, наливные полы, ковролин" },
  { num: "04", title: "Натяжные потолки", desc: "Матовые, глянцевые, сатиновые, многоуровневые конструкции" },
  { num: "05", title: "Дизайнерская отделка", desc: "Декоративная штукатурка, фактурные покрытия, лофт-бетон" },
  { num: "06", title: "Комплексный ремонт", desc: "Под ключ — от демонтажа до финальной уборки" },
];

const steps = [
  { step: "01", title: "Замер и консультация", desc: "Выезжаем на объект, обсуждаем задачи, предлагаем решения" },
  { step: "02", title: "Смета и договор", desc: "Прозрачный расчёт без скрытых платежей, фиксированные сроки" },
  { step: "03", title: "Закупка материалов", desc: "Работаем с проверенными поставщиками, контролируем качество" },
  { step: "04", title: "Выполнение работ", desc: "Строгое соблюдение технологий, ежедневный отчёт клиенту" },
  { step: "05", title: "Сдача объекта", desc: "Принимаете работу, подписываем акт, даём гарантию" },
];

const advantages = [
  { icon: "Award", title: "10+ лет опыта", desc: "Работаем с 2014 года, за плечами — сотни завершённых проектов" },
  { icon: "Users", title: "Команда профессионалов", desc: "Только сертифицированные специалисты в штате, без субподрядчиков" },
  { icon: "Shield", title: "Гарантия на работы", desc: "Официальная гарантия на все виды работ до 3 лет по договору" },
  { icon: "Clock", title: "Соблюдение сроков", desc: "99% объектов сдаём в срок — это закреплено в договоре" },
  { icon: "FileText", title: "Прозрачная смета", desc: "Фиксированная цена без дополнительных платежей в процессе" },
  { icon: "Star", title: "Сотни клиентов", desc: "Более 80% заказчиков возвращаются к нам снова" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="bg-[#111110] text-[#E8E4DE] font-golos min-h-screen">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111110]/95 backdrop-blur-sm border-b border-[#2A2825]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <img src={LOGO_WHITE} alt="Леднев Строительная компания" className="h-8 w-auto brightness-0 invert" />
          <div className="hidden md:flex items-center gap-8">
            {[["about", "О нас"], ["services", "Услуги"], ["portfolio", "Портфолио"], ["advantages", "Преимущества"], ["process", "Процесс"], ["contacts", "Контакты"]].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-xs tracking-[0.15em] uppercase text-[#6B6560] hover:text-[#E8E4DE] transition-colors font-golos"
              >
                {label}
              </button>
            ))}
          </div>
          <button className="md:hidden text-[#E8E4DE]" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#111110] border-t border-[#2A2825] px-6 py-4 flex flex-col gap-4">
            {[["about", "О нас"], ["services", "Услуги"], ["portfolio", "Портфолио"], ["advantages", "Преимущества"], ["process", "Процесс"], ["contacts", "Контакты"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-left text-sm tracking-widest uppercase text-[#6B6560]">
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="pt-24 min-h-screen flex flex-col justify-center relative overflow-hidden">
        {/* фоновая текстура бетона */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 3px), repeating-linear-gradient(90deg, transparent, transparent 40px, #fff 40px, #fff 41px)" }}
        />
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-16 relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-8 animate-fade-in">
              <div className="w-8 h-px bg-[#9A9A96]" />
              <p className="text-xs tracking-[0.3em] uppercase text-[#9A9A96]">Строительная компания — Краснодар</p>
            </div>
            <h1 className="font-golos text-[clamp(2.8rem,7vw,6.5rem)] font-medium leading-[0.88] mb-8 animate-fade-in uppercase tracking-tight" style={{ animationDelay: "0.1s" }}>
              Строим.<br />
              <span className="text-[#9A9A96]">Отделываем.</span><br />
              Сдаём.
            </h1>
            <p className="text-[#6B6560] text-base leading-relaxed max-w-sm mb-10 animate-fade-in font-light" style={{ animationDelay: "0.2s" }}>
              Леднев — профессиональное строительство и отделка любой сложности. Более 10 лет на рынке, сотни завершённых объектов.
            </p>
            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <button
                onClick={() => scrollTo("contacts")}
                className="bg-[#9A9A96] text-[#111110] px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#ADADAA] transition-colors duration-300"
              >
                Связаться
              </button>
              <button
                onClick={() => scrollTo("portfolio")}
                className="border border-[#2A2825] text-[#E8E4DE] px-8 py-3.5 text-xs tracking-[0.2em] uppercase hover:border-[#9A9A96] hover:text-[#9A9A96] transition-colors duration-300"
              >
                Портфолио
              </button>
            </div>
          </div>
          <div className="relative animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <div className="aspect-[4/5] overflow-hidden">
              <img src={PORTFOLIO_IMAGE} alt="Объект после отделки" className="w-full h-full object-cover grayscale contrast-110" />
              {/* металлическая рамка */}
              <div className="absolute inset-0 border border-[#2A2825] pointer-events-none" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#9A9A96] text-[#111110] p-5">
              <p className="font-golos text-4xl font-bold">500+</p>
              <p className="text-xs tracking-[0.15em] uppercase mt-1 font-medium">Проектов</p>
            </div>
            {/* декоративный угол */}
            <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-[#9A9A96]" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#2A2825]" />
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 border-b border-[#2A2825]">
        <div className="max-w-6xl mx-auto px-6">
          <Section>
            <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-5 h-px bg-[#9A9A96]" />
                  <p className="text-xs tracking-[0.25em] uppercase text-[#9A9A96]">О компании</p>
                </div>
                <h2 className="font-golos text-5xl font-bold uppercase leading-tight">История<br /><span className="text-[#9A9A96]">и опыт</span></h2>
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <p className="text-[#6B6560] leading-relaxed font-light text-sm">
                    Компания основана в 2014 году командой профессионалов с многолетним опытом в строительстве. За это время мы прошли путь от небольшой бригады до полноценной строительной компании с собственным штатом специалистов.
                  </p>
                </div>
                <div>
                  <p className="text-[#6B6560] leading-relaxed font-light text-sm">
                    Наша миссия — создавать пространства, в которых хочется жить и работать. Мы убеждены, что качественное строительство — это не роскошь, а стандарт. Каждый объект ведём с той же ответственностью, что и первый.
                  </p>
                </div>
                <div className="border-l-2 border-[#9A9A96] pl-4">
                  <p className="font-golos text-4xl font-bold text-[#E8E4DE]">10+</p>
                  <p className="text-xs tracking-widest uppercase text-[#6B6560] mt-1">лет на рынке</p>
                </div>
                <div className="border-l-2 border-[#2A2825] pl-4">
                  <p className="font-golos text-4xl font-bold text-[#E8E4DE]">500+</p>
                  <p className="text-xs tracking-widest uppercase text-[#6B6560] mt-1">завершённых объектов</p>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 border-b border-[#2A2825] bg-[#161513]">
        <div className="max-w-6xl mx-auto px-6">
          <Section>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-5 h-px bg-[#9A9A96]" />
                  <p className="text-xs tracking-[0.25em] uppercase text-[#9A9A96]">Что мы делаем</p>
                </div>
                <h2 className="font-golos text-5xl font-bold uppercase">Услуги</h2>
              </div>
              <p className="text-[#6B6560] text-sm max-w-xs font-light leading-relaxed">
                Полный спектр отделочных работ для жилых и коммерческих помещений
              </p>
            </div>
          </Section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2A2825]">
            {services.map((s, i) => (
              <Section key={i}>
                <div className="bg-[#161513] p-8 hover:bg-[#1E1C1A] transition-colors duration-300 group h-full">
                  <p className="font-golos text-5xl font-bold text-[#2A2825] group-hover:text-[#9A9A96] transition-colors duration-300 mb-5">{s.num}</p>
                  <h3 className="text-sm font-medium tracking-widest uppercase mb-3 text-[#E8E4DE]">{s.title}</h3>
                  <p className="text-sm text-[#6B6560] leading-relaxed font-light">{s.desc}</p>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 border-b border-[#2A2825]">
        <div className="max-w-6xl mx-auto px-6">
          <Section>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-5 h-px bg-[#9A9A96]" />
                  <p className="text-xs tracking-[0.25em] uppercase text-[#9A9A96]">Наши работы</p>
                </div>
                <h2 className="font-golos text-5xl font-bold uppercase">Портфолио</h2>
              </div>
            </div>
          </Section>
          <Section>
            <div className="grid md:grid-cols-3 gap-1">
              <div className="md:col-span-2 aspect-[16/9] overflow-hidden relative">
                <img src={PORTFOLIO_IMAGE} alt="Проект 1" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 border border-[#2A2825]" />
              </div>
              <div className="grid grid-rows-2 gap-1">
                <div className="aspect-square overflow-hidden relative">
                  <img src={PORTFOLIO_IMAGE} alt="Проект 2" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 border border-[#2A2825]" />
                </div>
                <div className="aspect-square bg-[#9A9A96] flex flex-col items-center justify-center p-6 text-center">
                  <p className="font-golos text-4xl text-[#111110] font-bold">500+</p>
                  <p className="text-xs tracking-[0.15em] uppercase text-[#111110]/70 mt-2 font-medium">объектов<br />завершено</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-[#3A3835] mt-4 text-center tracking-widest uppercase">Пришлите ваши фотографии — разместим реальные объекты</p>
          </Section>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-24 border-b border-[#2A2825] bg-[#161513]">
        <div className="max-w-6xl mx-auto px-6">
          <Section>
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-5 h-px bg-[#9A9A96]" />
                <p className="text-xs tracking-[0.25em] uppercase text-[#9A9A96]">Почему выбирают нас</p>
              </div>
              <h2 className="font-golos text-5xl font-bold uppercase text-[#E8E4DE]">Преимущества</h2>
            </div>
          </Section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((a, i) => (
              <Section key={i}>
                <div className="border-t border-[#2A2825] pt-6 group hover:border-[#9A9A96] transition-colors duration-300">
                  <div className="w-10 h-10 border border-[#2A2825] group-hover:border-[#9A9A96] flex items-center justify-center mb-5 transition-colors duration-300">
                    <Icon name={a.icon as "Award"} size={16} className="text-[#9A9A96]" />
                  </div>
                  <h3 className="text-[#E8E4DE] font-medium tracking-wide mb-2 text-sm uppercase">{a.title}</h3>
                  <p className="text-[#6B6560] text-sm leading-relaxed font-light">{a.desc}</p>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 border-b border-[#2A2825]">
        <div className="max-w-6xl mx-auto px-6">
          <Section>
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-5 h-px bg-[#9A9A96]" />
                <p className="text-xs tracking-[0.25em] uppercase text-[#9A9A96]">Как мы работаем</p>
              </div>
              <h2 className="font-golos text-5xl font-bold uppercase">Процесс</h2>
            </div>
          </Section>
          <div className="space-y-px bg-[#2A2825]">
            {steps.map((s, i) => (
              <Section key={i}>
                <div className="bg-[#111110] grid md:grid-cols-[100px_1fr_2fr] gap-6 items-center px-8 py-7 hover:bg-[#161513] transition-colors duration-300 group">
                  <p className="font-golos text-5xl font-bold text-[#2A2825] group-hover:text-[#9A9A96] transition-colors duration-300">{s.step}</p>
                  <h3 className="font-medium text-sm tracking-widest uppercase text-[#E8E4DE]">{s.title}</h3>
                  <p className="text-[#6B6560] text-sm font-light leading-relaxed">{s.desc}</p>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-[#161513]">
        <div className="max-w-6xl mx-auto px-6">
          <Section>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-5 h-px bg-[#9A9A96]" />
                  <p className="text-xs tracking-[0.25em] uppercase text-[#9A9A96]">Свяжитесь с нами</p>
                </div>
                <h2 className="font-golos text-5xl font-bold uppercase mb-10">Контакты</h2>
                <div className="space-y-6">
                  {[
                    { icon: "Phone", label: "Телефон", value: "+7 (964) 900-44-66", href: "tel:+79649004466" },
                    { icon: "Mail", label: "Почта", value: "89649004466@mail.ru", href: "mailto:89649004466@mail.ru" },
                    { icon: "MapPin", label: "Адрес", value: "г. Краснодар, ул. Ростовское шоссе 30/3, ТЦ «Грани», 2 этаж", href: null },
                  ].map((c) => (
                    <div key={c.label} className="flex items-start gap-4 border-b border-[#2A2825] pb-6">
                      <div className="w-9 h-9 border border-[#2A2825] flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name={c.icon as "Phone"} size={14} className="text-[#9A9A96]" />
                      </div>
                      <div>
                        <p className="text-xs tracking-widest uppercase text-[#6B6560] mb-1">{c.label}</p>
                        {c.href ? (
                          <a href={c.href} className="text-[#E8E4DE] font-light hover:text-[#9A9A96] transition-colors">{c.value}</a>
                        ) : (
                          <p className="text-[#E8E4DE] font-light">{c.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 mt-8">
                  <a href="https://t.me/+79649004466" target="_blank" rel="noopener noreferrer"
                    className="border border-[#2A2825] text-[#E8E4DE] px-4 py-2 text-xs tracking-widest uppercase hover:bg-[#9A9A96] hover:text-[#111110] hover:border-[#9A9A96] transition-all duration-300">
                    Telegram
                  </a>
                  <a href="https://instagram.com/lednev_sk" target="_blank" rel="noopener noreferrer"
                    className="border border-[#2A2825] text-[#E8E4DE] px-4 py-2 text-xs tracking-widest uppercase hover:bg-[#9A9A96] hover:text-[#111110] hover:border-[#9A9A96] transition-all duration-300">
                    Instagram
                  </a>
                </div>
              </div>

              <div className="border border-[#2A2825] p-10 relative">
                {/* угловой акцент */}
                <div className="absolute -top-px -right-px w-12 h-12 border-t-2 border-r-2 border-[#9A9A96]" />
                <div className="absolute -bottom-px -left-px w-12 h-12 border-b-2 border-l-2 border-[#9A9A96]" />
                <p className="font-golos text-2xl text-[#E8E4DE] font-bold uppercase mb-2">Обсудим проект?</p>
                <p className="text-[#6B6560] text-sm font-light mb-8">Оставьте заявку — свяжемся в течение часа</p>
                <div className="space-y-5">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full bg-transparent border-b border-[#2A2825] py-3 text-[#E8E4DE] placeholder-[#3A3835] text-sm focus:outline-none focus:border-[#9A9A96] transition-colors font-golos font-light"
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full bg-transparent border-b border-[#2A2825] py-3 text-[#E8E4DE] placeholder-[#3A3835] text-sm focus:outline-none focus:border-[#9A9A96] transition-colors font-golos font-light"
                  />
                  <textarea
                    placeholder="Описание объекта"
                    rows={3}
                    className="w-full bg-transparent border-b border-[#2A2825] py-3 text-[#E8E4DE] placeholder-[#3A3835] text-sm focus:outline-none focus:border-[#9A9A96] transition-colors resize-none font-golos font-light"
                  />
                </div>
                <button className="mt-8 w-full bg-[#9A9A96] text-[#111110] py-4 text-xs tracking-[0.25em] uppercase font-bold hover:bg-[#ADADAA] transition-colors duration-300">
                  Отправить заявку
                </button>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#2A2825] py-8 bg-[#111110]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <img src={LOGO_WHITE} alt="Леднев Строительная компания" className="h-7 w-auto brightness-0 invert" />
          <p className="text-xs text-[#3A3835] tracking-widest uppercase">© 2024 — Все права защищены</p>
        </div>
      </footer>
    </div>
  );
}