import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const ACCENT = "#9A9A96";
// Объект 1 — ванная комната с мраморной плиткой
const IMG_BATHROOM = "https://cdn.poehali.dev/files/4e2e61b2-78fa-4343-bda8-e670d29768fe.png";
// Объект 2 — фасад дома с бассейном, вид снаружи
const IMG_FACADE_1 = "https://cdn.poehali.dev/files/966cfbd1-e3aa-4c23-96fc-d3975a03468f.png";
// Объект 2 — фасад с деревянной террасой
const IMG_FACADE_2 = "https://cdn.poehali.dev/files/aea095e3-241d-4f98-b398-63557fa7b1be.png";
// Объект 2 — крытый бассейн внутри
const IMG_POOL = "https://cdn.poehali.dev/files/efb71f82-fc45-4a7c-a4b0-a72e80cc18b5.png";
// Объект 3 — кухня-столовая с рейками
const IMG_KITCHEN = "https://cdn.poehali.dev/files/bd7310fe-9023-45d7-8a7b-0d7fa6bb946c.png";
// Объект 4 — арка в кухню-столовую
const IMG_ARCH = "https://cdn.poehali.dev/files/6f0e69bb-ea97-4afb-86fd-f2d4114103fb.png";
// Объект 4 — ванная с золотыми деталями и ванной
const IMG_BATH_GOLD = "https://cdn.poehali.dev/files/3a501fc3-488b-4415-a059-4acc09f6fc7a.png";
// Объект 4 — спальня с лепниной
const IMG_BEDROOM = "https://cdn.poehali.dev/files/beba225e-1d85-45ae-9a36-e67d73087bb8.png";
// Объект 3 — ванная с жёлтой тумбой
const IMG_OBJ3_BATH_YELLOW = "https://cdn.poehali.dev/files/cd061662-3db4-4f2c-85d6-ecc2c0fce233.png";
// Объект 3 — белая кухня с золотыми витринами
const IMG_OBJ3_KITCHEN = "https://cdn.poehali.dev/files/89908ee1-c186-4be8-a4da-7c1b2e7d386f.png";
// Объект 3 — спальня с птицами на стене
const IMG_OBJ3_BEDROOM = "https://cdn.poehali.dev/files/eef02bab-df02-413a-9656-eaebaf3991da.png";
// Объект 3 — бассейн с мраморной стеной
const IMG_OBJ3_POOL = "https://cdn.poehali.dev/files/9e431920-20d4-4579-8c00-182d2be0925a.png";
// Объект 3 — ванная тропик с розовой аркой
const IMG_OBJ3_TROPIC = "https://cdn.poehali.dev/files/3ec60242-d3db-4965-b426-0fd83edb3aa9.png";
// Объект 3 — гардеробная с витражным окном
const IMG_OBJ3_WARDROBE = "https://cdn.poehali.dev/files/418713a4-b5fc-4272-b8ad-0284c09cdca3.png";
// Объект 3 — гостиная с камином
const IMG_OBJ3_LIVING = "https://cdn.poehali.dev/files/53e063a6-d321-49ef-b915-0cf4df28a919.png";
// Объект 3 — кабинет с диваном
const IMG_OBJ3_OFFICE = "https://cdn.poehali.dev/files/a7e87048-59ec-46aa-a644-8569dd9e111b.png";
// Объект 4 — гостиная с балками и камином
const IMG_OBJ4_LIVING = "https://cdn.poehali.dev/files/3d360014-bede-432b-9721-1fcf8dd1403f.png";
// Объект 4 — фасад дома с садом
const IMG_OBJ4_FACADE = "https://cdn.poehali.dev/files/406999df-a1a5-4918-9b1e-9a662fa5abc5.png";
// Объект 4 — баня с деревянными стенами
const IMG_OBJ4_SAUNA = "https://cdn.poehali.dev/files/d932e215-c891-4b0f-ac16-3816495ae5e3.png";
// Объект 2 (доп.) — коридор с синей аркой
const IMG_OBJ2_HALL = "https://cdn.poehali.dev/files/583816f0-f143-4d17-96b2-6e6578b497c2.png";
// Объект 2 (доп.) — гостиная с одуванчиками
const IMG_OBJ2_LIVING = "https://cdn.poehali.dev/files/ca3d8611-4d95-49a2-a299-d3efa58873a7.png";
// Объект 2 (доп.) — детская спальня с птицами
const IMG_OBJ2_BED1 = "https://cdn.poehali.dev/files/9f3b795a-bcef-425f-a257-714cf6e11d99.png";
// Объект 2 (доп.) — спальня с синими обоями
const IMG_OBJ2_BED2 = "https://cdn.poehali.dev/files/1e87a65f-fe63-44d9-a4e4-7422627d828d.png";
// Объект 2 (доп.) — кухня с мраморным столом
const IMG_OBJ2_KITCHEN = "https://cdn.poehali.dev/files/ddf859b6-b0d1-4aff-a77c-1bb54225a49b.png";
// Объект 2 (доп.) — санузел с тёмной стеной
const IMG_OBJ2_BATH = "https://cdn.poehali.dev/files/d8c39ce5-5a89-4ff8-b7d4-9622113d73f0.png";
// Объект 4 (доп.) — санузел с деревянными дверями
const IMG_OBJ4_BATH = "https://cdn.poehali.dev/files/d38c701b-99b4-4d3a-b8c3-4cd033bcbba1.png";
// Объект 4 (доп.) — открытый бассейн с шезлонгами
const IMG_OBJ4_POOL = "https://cdn.poehali.dev/files/52769dbe-546b-4257-bd23-0d65b913ffa6.png";
// Объект 4 (доп.) — печь с изразцами
const IMG_OBJ4_STOVE = "https://cdn.poehali.dev/files/99f28b9e-3bc9-4513-980a-8a9066e7377b.png";
// Объект 4 (доп.) — столовая с деревянным потолком
const IMG_OBJ4_DINING = "https://cdn.poehali.dev/files/449880cf-1faa-42a8-80d5-fd724f3a29e5.png";
// Объект 1 — фитнес-зал рядом с бассейном
const IMG_OBJ1_GYM = "https://cdn.poehali.dev/files/8ffa8ca7-7fe5-4d2d-b98f-86705792cee3.png";
// Объект 1 — хаммам с мозаикой
const IMG_OBJ1_HAMMAM = "https://cdn.poehali.dev/files/0300d182-872e-4fd6-b2b4-c885e56478fa.png";
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

// Все фото портфолио в порядке для лайтбокса
const ALL_PORTFOLIO = [
  { src: IMG_POOL, label: "Бассейн" },
  { src: IMG_BATHROOM, label: "Ванная" },
  { src: IMG_FACADE_1, label: "Фасад" },
  { src: IMG_FACADE_2, label: "Терраса" },
  { src: IMG_OBJ1_GYM, label: "Фитнес-зал" },
  { src: IMG_OBJ1_HAMMAM, label: "Хаммам" },
  { src: IMG_KITCHEN, label: "Кухня-столовая" },
  { src: IMG_ARCH, label: "Столовая" },
  { src: IMG_BATH_GOLD, label: "Ванная" },
  { src: IMG_BEDROOM, label: "Спальня" },
  { src: IMG_OBJ2_HALL, label: "Коридор" },
  { src: IMG_OBJ2_LIVING, label: "Гостиная" },
  { src: IMG_OBJ2_BED1, label: "Спальня" },
  { src: IMG_OBJ2_BED2, label: "Спальня" },
  { src: IMG_OBJ2_KITCHEN, label: "Кухня" },
  { src: IMG_OBJ2_BATH, label: "Санузел" },
  { src: IMG_OBJ3_POOL, label: "Бассейн" },
  { src: IMG_OBJ3_LIVING, label: "Гостиная" },
  { src: IMG_OBJ3_KITCHEN, label: "Кухня" },
  { src: IMG_OBJ3_WARDROBE, label: "Гардеробная" },
  { src: IMG_OBJ3_TROPIC, label: "Ванная" },
  { src: IMG_OBJ3_BATH_YELLOW, label: "Санузел" },
  { src: IMG_OBJ3_BEDROOM, label: "Спальня" },
  { src: IMG_OBJ3_OFFICE, label: "Кабинет" },
  { src: IMG_OBJ4_FACADE, label: "Фасад" },
  { src: IMG_OBJ4_POOL, label: "Бассейн" },
  { src: IMG_OBJ4_LIVING, label: "Гостиная" },
  { src: IMG_OBJ4_SAUNA, label: "Баня" },
  { src: IMG_OBJ4_STOVE, label: "Печь" },
  { src: IMG_OBJ4_DINING, label: "Столовая" },
  { src: IMG_OBJ4_BATH, label: "Санузел" },
];

function PhotoItem({ src, label, onClick }: { src: string; label: string; onClick: () => void }) {
  return (
    <div className="overflow-hidden relative cursor-zoom-in group h-full w-full" onClick={onClick}>
      <img src={src} alt={label} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
      <div className="absolute inset-0 border border-[#2A2825] pointer-events-none" />
      <div className="absolute bottom-3 left-3 bg-[#111110]/80 px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-xs tracking-widest uppercase text-[#9A9A96]">{label}</p>
      </div>
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-7 h-7 bg-[#111110]/80 flex items-center justify-center">
          <Icon name="Maximize2" size={12} className="text-[#9A9A96]" />
        </div>
      </div>
    </div>
  );
}

function Lightbox({ images, index, onClose, onPrev, onNext }: {
  images: typeof ALL_PORTFOLIO;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center" onClick={onClose}>
      <button className="absolute top-4 right-4 text-[#9A9A96] hover:text-white transition-colors" onClick={onClose}>
        <Icon name="X" size={28} />
      </button>
      <button className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9A9A96] hover:text-white transition-colors p-2" onClick={(e) => { e.stopPropagation(); onPrev(); }}>
        <Icon name="ChevronLeft" size={36} />
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9A9A96] hover:text-white transition-colors p-2" onClick={(e) => { e.stopPropagation(); onNext(); }}>
        <Icon name="ChevronRight" size={36} />
      </button>
      <div className="max-w-5xl max-h-[90vh] w-full px-16" onClick={(e) => e.stopPropagation()}>
        <img src={images[index].src} alt={images[index].label} className="w-full h-full object-contain max-h-[80vh]" />
        <p className="text-center text-xs tracking-[0.2em] uppercase text-[#9A9A96] mt-4">
          {images[index].label} · {index + 1} / {images.length}
        </p>
      </div>
    </div>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formDesc, setFormDesc] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  const sendForm = async () => {
    if (!formName.trim() || !formPhone.trim()) return;
    setFormStatus("sending");
    try {
      const res = await fetch("https://functions.poehali.dev/29430bec-07f7-4866-b114-7c968617517a", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formName, phone: formPhone, description: formDesc }),
      });
      if (res.ok) {
        setFormStatus("ok");
        setFormName(""); setFormPhone(""); setFormDesc("");
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevPhoto = () => setLightboxIndex(i => i !== null ? (i - 1 + ALL_PORTFOLIO.length) % ALL_PORTFOLIO.length : null);
  const nextPhoto = () => setLightboxIndex(i => i !== null ? (i + 1) % ALL_PORTFOLIO.length : null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="bg-[#111110] text-[#E8E4DE] font-golos min-h-screen">
      {lightboxIndex !== null && (
        <Lightbox images={ALL_PORTFOLIO} index={lightboxIndex} onClose={closeLightbox} onPrev={prevPhoto} onNext={nextPhoto} />
      )}

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
              <img src={IMG_FACADE_1} alt="Объект после отделки" className="w-full h-full object-cover grayscale contrast-110" />
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
            {/* ── ОБЪЕКТ 1 ── */}
            <div className="mb-3">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-5 h-px bg-[#9A9A96]" />
                <p className="text-[#E8E4DE] text-sm font-medium">СПА-комплекс частного дома · Горячий Ключ</p>
              </div>
              {/* Объект 1 — строка 1 */}
              <div className="grid md:grid-cols-3 gap-1 mb-1">
                <div className="md:col-span-2 aspect-[16/9]"><PhotoItem src={IMG_POOL} label="Бассейн" onClick={() => openLightbox(0)} /></div>
                <div className="aspect-[16/9]"><PhotoItem src={IMG_BATHROOM} label="Ванная" onClick={() => openLightbox(1)} /></div>
              </div>
              {/* Объект 1 — строка 2 */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mb-1">
                <div className="aspect-[4/3]"><PhotoItem src={IMG_FACADE_1} label="Фасад" onClick={() => openLightbox(2)} /></div>
                <div className="aspect-[4/3]"><PhotoItem src={IMG_FACADE_2} label="Терраса" onClick={() => openLightbox(3)} /></div>
                <div className="aspect-[4/3]"><PhotoItem src={IMG_OBJ1_GYM} label="Фитнес-зал" onClick={() => openLightbox(4)} /></div>
                <div className="aspect-[4/3]"><PhotoItem src={IMG_OBJ1_HAMMAM} label="Хаммам" onClick={() => openLightbox(5)} /></div>
              </div>
              {/* Объект 1 — кухня */}
              <div className="aspect-[21/9]"><PhotoItem src={IMG_KITCHEN} label="Кухня-столовая" onClick={() => openLightbox(6)} /></div>
            </div>

            {/* Разделитель */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-[#2A2825]" /><div className="w-1.5 h-1.5 bg-[#9A9A96] rotate-45" /><div className="flex-1 h-px bg-[#2A2825]" />
            </div>

            {/* ── ОБЪЕКТ 2 ── */}
            <div className="flex items-center gap-4 mb-3">
              <div className="w-5 h-px bg-[#9A9A96]" />
              <p className="text-[#E8E4DE] text-sm font-medium">Частный дом · пос. Северный, Краснодар</p>
            </div>
            <div className="grid md:grid-cols-3 gap-1 mb-1">
              <div className="md:col-span-2 aspect-[16/9]"><PhotoItem src={IMG_OBJ2_HALL} label="Коридор" onClick={() => openLightbox(7)} /></div>
              <div className="aspect-[16/9]"><PhotoItem src={IMG_OBJ2_LIVING} label="Гостиная" onClick={() => openLightbox(8)} /></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mb-1">
              <div className="aspect-[4/3]"><PhotoItem src={IMG_ARCH} label="Столовая" onClick={() => openLightbox(9)} /></div>
              <div className="aspect-[4/3]"><PhotoItem src={IMG_OBJ2_KITCHEN} label="Кухня" onClick={() => openLightbox(10)} /></div>
              <div className="aspect-[4/3]"><PhotoItem src={IMG_BATH_GOLD} label="Ванная" onClick={() => openLightbox(11)} /></div>
              <div className="aspect-[4/3]"><PhotoItem src={IMG_OBJ2_BATH} label="Санузел" onClick={() => openLightbox(12)} /></div>
            </div>
            <div className="grid md:grid-cols-3 gap-1">
              <div className="aspect-[4/3]"><PhotoItem src={IMG_OBJ2_BED1} label="Спальня" onClick={() => openLightbox(13)} /></div>
              <div className="aspect-[4/3]"><PhotoItem src={IMG_OBJ2_BED2} label="Спальня" onClick={() => openLightbox(14)} /></div>
              <div className="aspect-[4/3]"><PhotoItem src={IMG_BEDROOM} label="Спальня" onClick={() => openLightbox(15)} /></div>
            </div>

            {/* Разделитель */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-[#2A2825]" /><div className="w-1.5 h-1.5 bg-[#9A9A96] rotate-45" /><div className="flex-1 h-px bg-[#2A2825]" />
            </div>

            {/* ── ОБЪЕКТ 3 ── */}
            <div className="flex items-center gap-4 mb-3">
              <div className="w-5 h-px bg-[#9A9A96]" />
              <p className="text-[#E8E4DE] text-sm font-medium">Частный дом · ФМР, Краснодар</p>
            </div>
            <div className="grid md:grid-cols-3 gap-1 mb-1">
              <div className="md:col-span-2 aspect-[16/9]"><PhotoItem src={IMG_OBJ3_POOL} label="Бассейн" onClick={() => openLightbox(16)} /></div>
              <div className="aspect-[16/9]"><PhotoItem src={IMG_OBJ3_LIVING} label="Гостиная" onClick={() => openLightbox(17)} /></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mb-1">
              <div className="aspect-square"><PhotoItem src={IMG_OBJ3_KITCHEN} label="Кухня" onClick={() => openLightbox(18)} /></div>
              <div className="aspect-square"><PhotoItem src={IMG_OBJ3_WARDROBE} label="Гардеробная" onClick={() => openLightbox(19)} /></div>
              <div className="aspect-square"><PhotoItem src={IMG_OBJ3_TROPIC} label="Ванная" onClick={() => openLightbox(20)} /></div>
              <div className="aspect-square"><PhotoItem src={IMG_OBJ3_BATH_YELLOW} label="Санузел" onClick={() => openLightbox(21)} /></div>
            </div>
            <div className="grid md:grid-cols-2 gap-1">
              <div className="aspect-[4/3]"><PhotoItem src={IMG_OBJ3_BEDROOM} label="Спальня" onClick={() => openLightbox(22)} /></div>
              <div className="aspect-[4/3]"><PhotoItem src={IMG_OBJ3_OFFICE} label="Кабинет" onClick={() => openLightbox(23)} /></div>
            </div>

            {/* Разделитель */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-[#2A2825]" /><div className="w-1.5 h-1.5 bg-[#9A9A96] rotate-45" /><div className="flex-1 h-px bg-[#2A2825]" />
            </div>

            {/* ── ОБЪЕКТ 4 ── */}
            <div className="flex items-center gap-4 mb-3">
              <div className="w-5 h-px bg-[#9A9A96]" />
              <p className="text-[#E8E4DE] text-sm font-medium">Пристройка: комната отдыха, русская баня и бассейн</p>
            </div>
            <div className="grid md:grid-cols-3 gap-1 mb-1">
              <div className="md:col-span-2 aspect-[16/9]"><PhotoItem src={IMG_OBJ4_FACADE} label="Фасад" onClick={() => openLightbox(24)} /></div>
              <div className="aspect-[16/9]"><PhotoItem src={IMG_OBJ4_POOL} label="Бассейн" onClick={() => openLightbox(25)} /></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mb-1">
              <div className="aspect-[4/3]"><PhotoItem src={IMG_OBJ4_LIVING} label="Гостиная" onClick={() => openLightbox(26)} /></div>
              <div className="aspect-[4/3]"><PhotoItem src={IMG_OBJ4_DINING} label="Столовая" onClick={() => openLightbox(27)} /></div>
              <div className="aspect-[4/3]"><PhotoItem src={IMG_OBJ4_SAUNA} label="Баня" onClick={() => openLightbox(28)} /></div>
              <div className="aspect-[4/3]"><PhotoItem src={IMG_OBJ4_STOVE} label="Печь" onClick={() => openLightbox(29)} /></div>
            </div>
            <div className="grid md:grid-cols-1 gap-1">
              <div className="aspect-[21/9]"><PhotoItem src={IMG_OBJ4_BATH} label="Санузел" onClick={() => openLightbox(30)} /></div>
            </div>
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
                    value={formName}
                    onChange={e => setFormName(e.target.value)}
                    className="w-full bg-transparent border-b border-[#2A2825] py-3 text-[#E8E4DE] placeholder-[#3A3835] text-sm focus:outline-none focus:border-[#9A9A96] transition-colors font-golos font-light"
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    value={formPhone}
                    onChange={e => setFormPhone(e.target.value)}
                    className="w-full bg-transparent border-b border-[#2A2825] py-3 text-[#E8E4DE] placeholder-[#3A3835] text-sm focus:outline-none focus:border-[#9A9A96] transition-colors font-golos font-light"
                  />
                  <textarea
                    placeholder="Описание объекта"
                    rows={3}
                    value={formDesc}
                    onChange={e => setFormDesc(e.target.value)}
                    className="w-full bg-transparent border-b border-[#2A2825] py-3 text-[#E8E4DE] placeholder-[#3A3835] text-sm focus:outline-none focus:border-[#9A9A96] transition-colors resize-none font-golos font-light"
                  />
                </div>
                {formStatus === "ok" && (
                  <p className="mt-6 text-[#9A9A96] text-sm tracking-wide">✓ Заявка отправлена — свяжемся в ближайшее время</p>
                )}
                {formStatus === "error" && (
                  <p className="mt-6 text-red-400 text-sm">Ошибка отправки. Позвоните нам напрямую.</p>
                )}
                <button
                  onClick={sendForm}
                  disabled={formStatus === "sending" || !formName.trim() || !formPhone.trim()}
                  className="mt-8 w-full bg-[#9A9A96] text-[#111110] py-4 text-xs tracking-[0.25em] uppercase font-bold hover:bg-[#ADADAA] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === "sending" ? "Отправляем..." : "Отправить заявку"}
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