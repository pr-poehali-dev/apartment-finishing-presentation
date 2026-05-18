import { useEffect, useRef, useState } from "react";

export const ACCENT = "#9A9A96";
export const LOGO_WHITE = "https://cdn.poehali.dev/projects/830044c3-63d5-4b40-9cea-c9639af22500/bucket/55e40c34-2198-4782-8615-21b1fb699e9b.png";

// Объект 1 — СПА зона частного дома в Горячем Ключе
export const IMG_BATHROOM = "https://cdn.poehali.dev/files/4e2e61b2-78fa-4343-bda8-e670d29768fe.png";
export const IMG_FACADE_1 = "https://cdn.poehali.dev/files/966cfbd1-e3aa-4c23-96fc-d3975a03468f.png";
export const IMG_FACADE_2 = "https://cdn.poehali.dev/files/aea095e3-241d-4f98-b398-63557fa7b1be.png";
export const IMG_POOL = "https://cdn.poehali.dev/files/efb71f82-fc45-4a7c-a4b0-a72e80cc18b5.png";
export const IMG_KITCHEN = "https://cdn.poehali.dev/files/bd7310fe-9023-45d7-8a7b-0d7fa6bb946c.png";

// Объект 2 — частный дом в поселке Северный, г. Краснодар
export const IMG_ARCH = "https://cdn.poehali.dev/files/6f0e69bb-ea97-4afb-86fd-f2d4114103fb.png";
export const IMG_BATH_GOLD = "https://cdn.poehali.dev/files/3a501fc3-488b-4415-a059-4acc09f6fc7a.png";
export const IMG_BEDROOM = "https://cdn.poehali.dev/files/beba225e-1d85-45ae-9a36-e67d73087bb8.png";

// Объект 3 — частный дом ФМР, г. Краснодар
export const IMG_OBJ3_BATH_YELLOW = "https://cdn.poehali.dev/files/cd061662-3db4-4f2c-85d6-ecc2c0fce233.png";
export const IMG_OBJ3_KITCHEN = "https://cdn.poehali.dev/files/89908ee1-c186-4be8-a4da-7c1b2e7d386f.png";
export const IMG_OBJ3_BEDROOM = "https://cdn.poehali.dev/files/eef02bab-df02-413a-9656-eaebaf3991da.png";
export const IMG_OBJ3_POOL = "https://cdn.poehali.dev/files/9e431920-20d4-4579-8c00-182d2be0925a.png";
export const IMG_OBJ3_TROPIC = "https://cdn.poehali.dev/files/3ec60242-d3db-4965-b426-0fd83edb3aa9.png";
export const IMG_OBJ3_WARDROBE = "https://cdn.poehali.dev/files/418713a4-b5fc-4272-b8ad-0284c09cdca3.png";
export const IMG_OBJ3_LIVING = "https://cdn.poehali.dev/files/53e063a6-d321-49ef-b915-0cf4df28a919.png";
export const IMG_OBJ3_OFFICE = "https://cdn.poehali.dev/files/a7e87048-59ec-46aa-a644-8569dd9e111b.png";

// Объект 4 — пристройка с комнатой отдыха, русской баней и бассейном
export const IMG_OBJ4_LIVING = "https://cdn.poehali.dev/files/3d360014-bede-432b-9721-1fcf8dd1403f.png";
export const IMG_OBJ4_FACADE = "https://cdn.poehali.dev/files/406999df-a1a5-4918-9b1e-9a662fa5abc5.png";
export const IMG_OBJ4_SAUNA = "https://cdn.poehali.dev/files/d932e215-c891-4b0f-ac16-3816495ae5e3.png";

export function useInView(threshold = 0.12) {
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

export function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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

export const services = [
  { num: "01", title: "Чистовая отделка", desc: "Штукатурные работы, шпаклёвка, покраска стен и потолков" },
  { num: "02", title: "Укладка плитки", desc: "Керамогранит, мозаика, декоративная плитка любой сложности" },
  { num: "03", title: "Напольные покрытия", desc: "Паркет, ламинат, наливные полы, ковролин" },
  { num: "04", title: "Натяжные потолки", desc: "Матовые, глянцевые, сатиновые, многоуровневые конструкции" },
  { num: "05", title: "Дизайнерская отделка", desc: "Декоративная штукатурка, фактурные покрытия, лофт-бетон" },
  { num: "06", title: "Комплексный ремонт", desc: "Под ключ — от демонтажа до финальной уборки" },
];

export const steps = [
  { step: "01", title: "Замер и консультация", desc: "Выезжаем на объект, обсуждаем задачи, предлагаем решения" },
  { step: "02", title: "Смета и договор", desc: "Прозрачный расчёт без скрытых платежей, фиксированные сроки" },
  { step: "03", title: "Закупка материалов", desc: "Работаем с проверенными поставщиками, контролируем качество" },
  { step: "04", title: "Выполнение работ", desc: "Строгое соблюдение технологий, ежедневный отчёт клиенту" },
  { step: "05", title: "Сдача объекта", desc: "Принимаете работу, подписываем акт, даём гарантию" },
];

export const advantages = [
  { icon: "Award", title: "10+ лет опыта", desc: "Работаем с 2014 года, за плечами — сотни завершённых проектов" },
  { icon: "Users", title: "Команда профессионалов", desc: "Только сертифицированные специалисты в штате, без субподрядчиков" },
  { icon: "Shield", title: "Гарантия на работы", desc: "Официальная гарантия на все виды работ до 3 лет по договору" },
  { icon: "Clock", title: "Соблюдение сроков", desc: "99% объектов сдаём в срок — это закреплено в договоре" },
  { icon: "FileText", title: "Прозрачная смета", desc: "Фиксированная цена без дополнительных платежей в процессе" },
  { icon: "Star", title: "Сотни клиентов", desc: "Более 80% заказчиков возвращаются к нам снова" },
];
