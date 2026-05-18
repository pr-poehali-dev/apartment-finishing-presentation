import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const PORTFOLIO_IMAGE = "https://cdn.poehali.dev/projects/830044c3-63d5-4b40-9cea-c9639af22500/files/dd7ac8ee-e50d-44c3-93c2-468304b1d7a5.jpg";

function useInView(threshold = 0.15) {
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
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
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
  { step: "1", title: "Замер и консультация", desc: "Выезжаем на объект, обсуждаем задачи, предлагаем решения" },
  { step: "2", title: "Смета и договор", desc: "Прозрачный расчёт без скрытых платежей, фиксированные сроки" },
  { step: "3", title: "Закупка материалов", desc: "Работаем с проверенными поставщиками, контролируем качество" },
  { step: "4", title: "Выполнение работ", desc: "Строгое соблюдение технологий, ежедневный отчёт клиенту" },
  { step: "5", title: "Сдача объекта", desc: "Принимаете работу, подписываем акт, даём гарантию" },
];

const advantages = [
  { icon: "Award", title: "10+ лет опыта", desc: "Работаем с 2014 года, за плечами — сотни завершённых проектов" },
  { icon: "Users", title: "Команда профессионалов", desc: "Только сертифицированные специалисты в штате, без субподрядчиков" },
  { icon: "Shield", title: "Гарантия на работы", desc: "Официальная гарантия на все виды работ до 3 лет по договору" },
  { icon: "Clock", title: "Соблюдение сроков", desc: "99% объектов сдаём в срок — это закреплено в договоре" },
  { icon: "FileText", title: "Прозрачная смета", desc: "Фиксированная цена без дополнительных платежей в процессе" },
  { icon: "Star", title: "Сотни довольных клиентов", desc: "Более 80% заказчиков возвращаются к нам снова" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="bg-[#F5F3EF] text-[#1A1A1A] font-golos min-h-screen">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F3EF]/95 backdrop-blur-sm border-b border-[#D8D3C9]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-cormorant text-xl font-light tracking-[0.15em] uppercase text-[#1A1A1A]">
            АртОтделка
          </span>
          <div className="hidden md:flex items-center gap-8">
            {[["about", "О нас"], ["services", "Услуги"], ["portfolio", "Портфолио"], ["advantages", "Преимущества"], ["process", "Процесс"], ["contacts", "Контакты"]].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-xs tracking-[0.12em] uppercase text-[#6B6560] hover:text-[#1A1A1A] transition-colors font-golos"
              >
                {label}
              </button>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#F5F3EF] border-t border-[#D8D3C9] px-6 py-4 flex flex-col gap-4">
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
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-16">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-[#9E9891] mb-6 animate-fade-in">Отделочные работы — Москва</p>
            <h1 className="font-cormorant text-[clamp(3rem,8vw,7rem)] font-light leading-[0.9] mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Простран&shy;ство,
              <br />
              <em className="italic text-[#8B7355]">созданное</em>
              <br />
              с умом
            </h1>
            <p className="text-[#6B6560] text-base leading-relaxed max-w-sm mb-10 animate-fade-in font-light" style={{ animationDelay: "0.2s" }}>
              Профессиональная отделка любой сложности. Более 10 лет на рынке, сотни завершённых объектов по всей Москве.
            </p>
            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <button
                onClick={() => scrollTo("contacts")}
                className="bg-[#1A1A1A] text-[#F5F3EF] px-8 py-3.5 text-xs tracking-[0.15em] uppercase hover:bg-[#8B7355] transition-colors duration-300"
              >
                Связаться
              </button>
              <button
                onClick={() => scrollTo("portfolio")}
                className="border border-[#D8D3C9] text-[#1A1A1A] px-8 py-3.5 text-xs tracking-[0.15em] uppercase hover:border-[#1A1A1A] transition-colors duration-300"
              >
                Портфолио
              </button>
            </div>
          </div>
          <div className="relative animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <div className="aspect-[4/5] overflow-hidden">
              <img src={PORTFOLIO_IMAGE} alt="Интерьер после отделки" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#8B7355] text-[#F5F3EF] p-5">
              <p className="font-cormorant text-4xl font-light">500+</p>
              <p className="text-xs tracking-[0.1em] uppercase mt-1 font-golos font-light">Проектов</p>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#D8D3C9]" />
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 border-b border-[#D8D3C9]">
        <div className="max-w-6xl mx-auto px-6">
          <Section>
            <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-[#9E9891] mb-3">О компании</p>
                <h2 className="font-cormorant text-5xl font-light leading-tight">История<br /><em className="italic text-[#8B7355]">и опыт</em></h2>
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <p className="text-[#6B6560] leading-relaxed font-light text-sm">
                    Компания основана в 2014 году командой профессионалов с многолетним опытом в строительстве. За это время мы прошли путь от небольшой бригады до полноценной отделочной компании с собственным штатом специалистов.
                  </p>
                </div>
                <div>
                  <p className="text-[#6B6560] leading-relaxed font-light text-sm">
                    Наша миссия — создавать пространства, в которых хочется жить и работать. Мы убеждены, что качественная отделка — это не роскошь, а стандарт. Каждый объект ведём с той же ответственностью, что и первый.
                  </p>
                </div>
                <div className="border-l-2 border-[#8B7355] pl-4">
                  <p className="font-cormorant text-4xl font-light text-[#1A1A1A]">10+</p>
                  <p className="text-xs tracking-widest uppercase text-[#9E9891] mt-1">лет на рынке</p>
                </div>
                <div className="border-l-2 border-[#D8D3C9] pl-4">
                  <p className="font-cormorant text-4xl font-light text-[#1A1A1A]">500+</p>
                  <p className="text-xs tracking-widest uppercase text-[#9E9891] mt-1">завершённых объектов</p>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 border-b border-[#D8D3C9] bg-[#EFECE6]">
        <div className="max-w-6xl mx-auto px-6">
          <Section>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-[#9E9891] mb-3">Что мы делаем</p>
                <h2 className="font-cormorant text-5xl font-light">Услуги</h2>
              </div>
              <p className="text-[#6B6560] text-sm max-w-xs font-light leading-relaxed">
                Полный спектр отделочных работ для жилых и коммерческих помещений
              </p>
            </div>
          </Section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D8D3C9]">
            {services.map((s, i) => (
              <Section key={i}>
                <div className="bg-[#EFECE6] p-8 hover:bg-[#F5F3EF] transition-colors duration-300 group">
                  <p className="font-cormorant text-6xl font-light text-[#D8D3C9] group-hover:text-[#8B7355] transition-colors duration-300 mb-4">{s.num}</p>
                  <h3 className="text-base font-medium tracking-wide mb-2">{s.title}</h3>
                  <p className="text-sm text-[#6B6560] leading-relaxed font-light">{s.desc}</p>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 border-b border-[#D8D3C9]">
        <div className="max-w-6xl mx-auto px-6">
          <Section>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-[#9E9891] mb-3">Наши работы</p>
                <h2 className="font-cormorant text-5xl font-light">Портфолио</h2>
              </div>
            </div>
          </Section>
          <Section>
            <div className="grid md:grid-cols-3 gap-1">
              <div className="md:col-span-2 aspect-[16/9] overflow-hidden">
                <img src={PORTFOLIO_IMAGE} alt="Проект 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="grid grid-rows-2 gap-1">
                <div className="aspect-square overflow-hidden">
                  <img src={PORTFOLIO_IMAGE} alt="Проект 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="aspect-square bg-[#1A1A1A] flex flex-col items-center justify-center p-6 text-center">
                  <p className="font-cormorant text-4xl text-[#F5F3EF] font-light">500+</p>
                  <p className="text-xs tracking-[0.15em] uppercase text-[#9E9891] mt-2">объектов<br />завершено</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-[#9E9891] mt-4 text-center tracking-widest uppercase">Пришлите ваши фотографии — разместим реальные объекты</p>
          </Section>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-24 border-b border-[#D8D3C9] bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-6">
          <Section>
            <div className="mb-16">
              <p className="text-xs tracking-[0.25em] uppercase text-[#6B6560] mb-3">Почему выбирают нас</p>
              <h2 className="font-cormorant text-5xl font-light text-[#F5F3EF]">Преимущества</h2>
            </div>
          </Section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((a, i) => (
              <Section key={i}>
                <div className="border-t border-[#333] pt-6">
                  <div className="w-10 h-10 border border-[#8B7355] flex items-center justify-center mb-5">
                    <Icon name={a.icon as "Award"} size={16} className="text-[#8B7355]" />
                  </div>
                  <h3 className="text-[#F5F3EF] font-medium tracking-wide mb-2 text-sm">{a.title}</h3>
                  <p className="text-[#6B6560] text-sm leading-relaxed font-light">{a.desc}</p>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 border-b border-[#D8D3C9]">
        <div className="max-w-6xl mx-auto px-6">
          <Section>
            <div className="mb-16">
              <p className="text-xs tracking-[0.25em] uppercase text-[#9E9891] mb-3">Как мы работаем</p>
              <h2 className="font-cormorant text-5xl font-light">Процесс</h2>
            </div>
          </Section>
          <div className="space-y-px bg-[#D8D3C9]">
            {steps.map((s, i) => (
              <Section key={i}>
                <div className="bg-[#F5F3EF] grid md:grid-cols-[80px_1fr_2fr] gap-6 items-center px-8 py-7 hover:bg-[#EFECE6] transition-colors duration-300">
                  <p className="font-cormorant text-5xl font-light text-[#D8D3C9]">{s.step}</p>
                  <h3 className="font-medium text-sm tracking-wide">{s.title}</h3>
                  <p className="text-[#6B6560] text-sm font-light leading-relaxed">{s.desc}</p>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Section>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-[#9E9891] mb-3">Свяжитесь с нами</p>
                <h2 className="font-cormorant text-5xl font-light mb-8">Контакты</h2>
                <div className="space-y-6">
                  {[
                    { icon: "Phone", label: "Телефон", value: "+7 (999) 000-00-00" },
                    { icon: "Mail", label: "Почта", value: "info@company.ru" },
                    { icon: "MapPin", label: "Адрес", value: "Москва, ул. Примерная, д. 1" },
                  ].map((c) => (
                    <div key={c.label} className="flex items-start gap-4 border-b border-[#D8D3C9] pb-6">
                      <div className="w-9 h-9 border border-[#D8D3C9] flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name={c.icon as "Phone"} size={14} className="text-[#8B7355]" />
                      </div>
                      <div>
                        <p className="text-xs tracking-widest uppercase text-[#9E9891] mb-1">{c.label}</p>
                        <p className="text-[#1A1A1A] font-light">{c.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 mt-8">
                  {["Telegram", "Instagram", "Youtube"].map((net) => (
                    <button key={net} className="border border-[#D8D3C9] px-4 py-2 text-xs tracking-widest uppercase hover:bg-[#1A1A1A] hover:text-[#F5F3EF] hover:border-[#1A1A1A] transition-all duration-300">
                      {net}
                    </button>
                  ))}
                </div>
              </div>
              <div className="bg-[#1A1A1A] p-10">
                <p className="font-cormorant text-3xl text-[#F5F3EF] font-light mb-2">Обсудим ваш проект?</p>
                <p className="text-[#6B6560] text-sm font-light mb-8">Оставьте заявку — свяжемся в течение часа</p>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full bg-transparent border-b border-[#333] py-3 text-[#F5F3EF] placeholder-[#555] text-sm focus:outline-none focus:border-[#8B7355] transition-colors font-golos font-light"
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full bg-transparent border-b border-[#333] py-3 text-[#F5F3EF] placeholder-[#555] text-sm focus:outline-none focus:border-[#8B7355] transition-colors font-golos font-light"
                  />
                  <textarea
                    placeholder="Описание объекта"
                    rows={3}
                    className="w-full bg-transparent border-b border-[#333] py-3 text-[#F5F3EF] placeholder-[#555] text-sm focus:outline-none focus:border-[#8B7355] transition-colors resize-none font-golos font-light"
                  />
                </div>
                <button className="mt-8 w-full bg-[#8B7355] text-[#F5F3EF] py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#7A6345] transition-colors duration-300">
                  Отправить заявку
                </button>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#D8D3C9] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-cormorant text-lg font-light tracking-[0.15em] uppercase">АртОтделка</span>
          <p className="text-xs text-[#9E9891] tracking-widest">© 2024 — Все права защищены</p>
        </div>
      </footer>
    </div>
  );
}
