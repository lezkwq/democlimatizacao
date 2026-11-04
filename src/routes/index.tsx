import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Star, ArrowRight, MessageCircle, Snowflake } from "lucide-react";
import desktopBg from "@/assets/hero-desktop.webp.asset.json";
import mobileBg from "@/assets/hero-mobile.webp.asset.json";

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
    links: [
      { rel: "preload", as: "image", href: desktopBg.url, media: "(min-width: 768px)", fetchPriority: "high" },
      { rel: "preload", as: "image", href: mobileBg.url, media: "(max-width: 767px)", fetchPriority: "high" },
    ],
  }),
  component: Index,
});

const NAV = ["Início", "Serviços", "Sobre", "Contato"];

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <main className="relative min-h-svh overflow-hidden bg-sky font-sans text-ink">
      <picture>
        <source media="(min-width: 768px)" srcSet={desktopBg.url} width={1672} height={941} />
        <img
          src={mobileBg.url}
          width={941}
          height={1672}
          alt="Ar-condicionado split com controle remoto e indicador de temperatura"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full animate-fade object-cover object-center"
        />
      </picture>

      {/* Header */}
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10 md:py-7">
        <a href="#" className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-full bg-background/70 text-ink backdrop-blur">
            <Snowflake className="size-5" strokeWidth={2.2} />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Neo <span className="font-medium opacity-70">Climatização</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 text-sm font-medium md:flex">
          {NAV.map((n) => (
            <a key={n} href="#" className="opacity-75 transition-opacity hover:opacity-100">
              {n}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ink/25 bg-glass px-4 py-2 text-sm font-semibold backdrop-blur transition-colors hover:bg-background/70"
          >
            <MessageCircle className="size-4" />
            <span className="hidden sm:inline">(47) 99946-1931</span>
            <span className="sm:hidden">WhatsApp</span>
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
              <a key={n} href="#" onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-medium hover:bg-sky/30">
                {n}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Mobile content: upper free area */}
      <div className="relative z-10 px-6 pt-4 text-center md:hidden">
        <HeroText />
      </div>
      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center md:hidden">
        <Rating />
      </div>

      {/* Desktop content: bottom-left text, bottom-right CTA */}
      <div className="absolute inset-x-0 bottom-0 z-10 mx-auto hidden max-w-7xl items-end justify-between px-10 pb-12 md:flex">
        <div className="max-w-[min(30vw,420px)] text-left">
          <HeroText desktop />
        </div>
        <div className="flex max-w-[26vw] animate-rise flex-col items-end gap-4 [animation-delay:300ms]">
          <Rating />
        </div>
      </div>
    </main>
  );
}

function HeroText({ desktop = false }: { desktop?: boolean }) {
  return (
    <div className="animate-rise">
      <h1 className="font-display text-[1.9rem] font-semibold leading-[1.08] tracking-tight md:text-[clamp(2rem,3vw,3rem)]">
        O conforto ideal para todos os ambientes.
      </h1>
      <p className="mx-auto mt-4 max-w-sm text-[0.95rem] leading-relaxed opacity-80 md:mx-0 md:text-base">
        Instalação, manutenção e higienização de ar-condicionado, além de assistência técnica em
        refrigeração, em Camboriú e região.
      </p>
      <div className={desktop ? "mt-7" : "mt-6 flex justify-center"}>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-cta px-7 py-3.5 font-semibold text-cta-foreground shadow-[var(--shadow-cta)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
        >
          Solicitar orçamento
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
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
