import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Star } from "lucide-react";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import logo from "@/assets/neo-logo.png";
import { SiteSections } from "@/components/site/SiteSections";
import desktopBg from "@/assets/hero-desktop.png";
import mobileBg from "@/assets/hero-mobile-v2.png";

const WHATSAPP =
  "https://wa.me/5547999461931?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

const TITLE = "Neo Climatização e Refrigeração | Ar-condicionado em Camboriú";
const DESC =
  "Instalação, manutenção e higienização de ar-condicionado e assistência técnica em refrigeração em Camboriú e região.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HVACBusiness",
          name: "Neo Climatização e Refrigeração",
          telephone: "+55 47 99946-1931",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Bagdá, 555 – Santa Regina",
            addressLocality: "Camboriú",
            addressRegion: "SC",
            postalCode: "88345-500",
            addressCountry: "BR",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: "58" },
          areaServed: "Camboriú e região",
        }),
      },
    ],
    links: [
      { rel: "preload", as: "image", href: desktopBg.url, media: "(min-width: 768px)", fetchPriority: "high" },
      { rel: "preload", as: "image", href: mobileBg.url, media: "(max-width: 767px)", fetchPriority: "high" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <section id="inicio" className="neo-hero relative min-h-svh overflow-hidden bg-sky font-sans text-ink">
      <picture>
        <source media="(min-width: 768px)" srcSet={desktopBg.url} width={1672} height={941} />
        <img
          src={mobileBg.url}
          width={941}
          height={1672}
          alt="Ar-condicionado split com controle remoto e indicador de temperatura"
          fetchPriority="high"
          decoding="async"
          className="neo-hero-image absolute inset-0 h-full w-full animate-fade object-cover object-center"
        />
      </picture>

      {/* Header */}
      <header className="relative z-20 mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center justify-between px-5 py-4 md:flex md:px-10 md:py-7">
        <a href="#inicio" aria-label="Neo Climatização — Início" className="min-w-0 md:w-[232px]">
          <img src={logo.url} alt="Neo Climatização" width={1159} height={699} className="w-36 max-w-full md:w-36" />
        </a>

        <nav className="hidden items-center gap-9 text-sm font-medium md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="opacity-75 transition-opacity hover:opacity-100">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="inline-flex size-10 items-center justify-center gap-2 rounded-full border sm:size-auto border-ink/25 bg-glass sm:px-4 sm:py-2 text-sm font-semibold backdrop-blur transition-colors hover:bg-background/70"
          >
            <WhatsAppIcon className="size-4 text-whatsapp" />
            <span className="hidden sm:inline">(47) 99946-1931</span>
                      </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Abrir menu"
            className="grid size-10 place-items-center rounded-full bg-glass backdrop-blur md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <nav className="absolute inset-x-5 top-[4.5rem] flex animate-rise flex-col rounded-2xl bg-background/90 p-2 shadow-lg backdrop-blur md:hidden">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-medium hover:bg-sky/30">
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Mobile content: upper free area */}
      <div className="relative z-10 px-6 pt-[6svh] text-center md:hidden">
        <HeroText />
        <div className="mt-5 flex justify-center">
          <Rating />
        </div>
      </div>

      {/* Desktop content: bottom-left text, bottom-right CTA */}
      <div className="absolute inset-x-0 bottom-0 z-10 hidden items-end justify-between px-[6vw] pb-[4vh] md:flex">
        <div className="max-w-[27vw] text-left">
          <HeroText desktop />
        </div>
        <div className="flex max-w-[26vw] animate-rise flex-col items-end gap-4 [animation-delay:300ms]">
          <Rating />
        </div>
      </div>
    </section>
    <SiteSections />
    </>
  );
}

function HeroText({ desktop = false }: { desktop?: boolean }) {
  return (
    <div className="animate-rise">
      <h1 className="font-display text-[2rem] font-semibold leading-[1.08] tracking-tight md:text-[clamp(1.6rem,2.3vw,2.6rem)]">
        O conforto ideal para todos os ambientes.
      </h1>
      <p className="mx-auto mt-3 max-w-sm text-sm md:mt-4 md:max-w-[24vw] md:text-[clamp(0.85rem,1vw,1rem)] leading-relaxed opacity-80 md:mx-0 md:text-base">
        Instalação, manutenção e higienização de ar-condicionado, além de assistência técnica em
        refrigeração, em Camboriú e região.
      </p>
      <div className={desktop ? "mt-7" : "mt-4 flex justify-center"}>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3 font-semibold md:px-7 md:py-3.5 text-cta-foreground shadow-[var(--shadow-cta)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
        >
          Solicitar orçamento
          <WhatsAppIcon className="size-4 shrink-0" />
        </a>
      </div>
    </div>
  );
}

function Rating() {
  return (
    <p className="inline-flex items-center gap-1.5 rounded-full bg-glass px-4 py-2 text-sm font-medium backdrop-blur">
      <Star className="size-4 fill-cta text-cta" />
      4,7 no Google · 58 avaliações
    </p>
  );
}
