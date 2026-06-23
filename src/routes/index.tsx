import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SocialProofNotifications } from "@/components/SocialProofNotifications";
import ebookMockupAsset from "@/assets/ebook-mockup.webp.asset.json";
const ebookMockup = ebookMockupAsset.url;
import expertPhotoAsset from "@/assets/mateus.jpg.asset.json";
const expertPhoto = expertPhotoAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guia de Diagnóstico e Protocolo de Polimento Técnico" },
      {
        name: "description",
        content:
          "Identifique qualquer verniz e monte o protocolo de polimento correto em poucas horas. Método claro para você e sua equipe executarem com segurança.",
      },
      { property: "og:title", content: "Guia de Diagnóstico e Protocolo de Polimento Técnico" },
      {
        property: "og:description",
        content:
          "Pare de polir no achismo. Diagnóstico, protocolo e padronização para estéticas automotivas.",
      },
    ],
  }),
  component: SalesPage,
});

const PRICE_INSTALLMENT = "R$ 5,50";
const PRICE_FULL = "R$ 37,00";

function SalesPage() {
  return (
    <main className="font-sans bg-[var(--ink)] text-white antialiased">
      <Dobra01 />
      <Dobra02 />
      <Dobra03 />
      <Dobra04 />
      <Dobra05 />
      <Dobra06 />
      <Dobra07 />
      <Dobra08 />
      <Dobra09 />
      <Dobra10 />
      <Dobra11 />
      <Dobra12 />
      <SocialProofNotifications />
    </main>
  );
}

/* ---------------- DOBRA 01 — PROMESSA ---------------- */
function Dobra01() {
  return (
    <section className="relative overflow-hidden bg-[var(--ink)] px-6 pt-0 pb-8 sm:pb-12">
      <div className="-mx-6 mb-12 bg-[var(--brand-yellow)] px-6 py-2 text-center text-xs font-extrabold uppercase tracking-widest text-black sm:text-sm">
        Exclusivo para donos de estética automotiva
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, rgba(224,23,39,0.25), transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(254,194,51,0.12), transparent 55%)",
        }}
      />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <h1 className="font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
          Guia de Diagnóstico
          <br />
          e <span className="text-[var(--brand-yellow)]">Protocolo de Polimento</span>
          <br />
          <span className="text-[var(--brand-red)]">Técnico</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Identifique qualquer verniz e monte o protocolo de polimento correto{" "}
          <strong className="text-white">em poucas horas</strong>, com um método claro que você
          executa com segurança e consegue repassar para sua equipe{" "}
          <strong className="text-[var(--brand-yellow)]">hoje mesmo</strong>.
        </p>
        <div className="mt-2 flex w-full justify-center sm:mt-3">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-8 rounded-full opacity-60 blur-3xl"
              style={{ background: "radial-gradient(circle, #e0172766 0%, transparent 70%)" }}
            />
            <img
              src={ebookMockup}
              alt="Mockup do Guia de Diagnóstico e Protocolo de Polimento Técnico em iPad"
              width={560}
              height={700}
              fetchPriority="high"
              className="relative w-[360px] sm:w-[480px] md:w-[580px] lg:w-[640px] drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- DOBRA 02 — DEPOIMENTOS ---------------- */
const testimonials = [
  {
    name: "Rafael M.",
    when: "Ontem 14:32",
    text: "Cara, comprei mais por curiosidade. Não esperava esse nível de detalhe nos protocolos. Já apliquei em 3 carros essa semana, ZERO retrabalho. 🙌",
  },
  {
    name: "Bruno S.",
    when: "Hoje 09:11",
    text: "Finalmente consegui treinar meu funcionário direito. Imprimi o checklist e colei na bancada. Mudou minha estética.",
  },
  {
    name: "Diego A.",
    when: "Seg 18:47",
    text: "A tabela de vernizes vale o preço sozinha. Peguei um Porsche semana passada e não tive medo de errar pela primeira vez.",
  },
  {
    name: "Lucas P.",
    when: "Sex 21:03",
    text: "Eu polia no feeling há 6 anos. Esse guia me deu o vocabulário técnico que faltava pra cobrar mais caro com segurança.",
  },
];

function Dobra02() {
  return (
    <section className="bg-[var(--light)] px-6 py-20 text-[var(--ink)]">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center font-display text-3xl uppercase tracking-tight sm:text-4xl">
          O que estão dizendo
        </h2>
        <p className="mt-3 text-center text-sm uppercase tracking-widest text-neutral-500">
          Mensagens reais de quem aplicou
        </p>

        <div className="mt-12 flex flex-col gap-5">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="mx-auto w-full max-w-[400px] rounded-xl bg-[var(--ink-soft)] p-4 text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
            >
              <div className="mb-2 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--brand-red)] text-[10px] font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <span className="font-semibold">{t.name}</span>
                </div>
                <span className="text-white/40">{t.when}</span>
              </div>
              <p className="text-sm leading-relaxed text-white/90">{t.text}</p>
              <div className="mt-2 text-right text-[10px] text-white/40">visualizada ✓✓</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- DOBRA 03 — APERTAR NA PEDRA ---------------- */
const voices = [
  "Meu funcionário não faz do jeito certo, aí eu tenho que refazer tudo.",
  "Tenho medo de pegar um carro caro e estragar o verniz.",
  "Eu sei polir, mas não consigo explicar direito pro meu funcionário o que fazer.",
  "Cada carro que chega eu fico na dúvida: será que esse verniz aguenta o composto?",
  "O problema não é falta de cliente, é falta de padrão na execução.",
  "Se eu não estou presente, a qualidade cai. E eu não consigo sair do operacional por causa disso.",
];

function Dobra03() {
  return (
    <section className="bg-[var(--ink)] px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center font-display text-3xl uppercase tracking-tight sm:text-5xl">
          Você já se pegou pensando<span className="text-[var(--brand-red)]">...</span>
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {voices.map((v, i) => (
            <blockquote
              key={i}
              className="rounded-lg bg-[var(--ink-soft)] p-5 italic text-white/85 border-l-[3px] border-[var(--brand-red)]"
            >
              “{v}”
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- DOBRA 04 — TRANSIÇÃO ---------------- */
const reasons = [
  "Sem um protocolo documentado, é impossível padronizar o polimento sem depender da sua presença.",
  "Sem saber identificar o tipo de verniz, é impossível escolher o abrasivo certo sem correr risco de estragar o carro.",
  "Sem um método claro, é impossível treinar um funcionário para executar com o mesmo padrão que você.",
  "Sem uma referência técnica, é impossível tomar decisões seguras na frente de um verniz que você nunca viu antes.",
];

function Dobra04() {
  return (
    <section className="bg-[var(--light)] px-6 py-20 text-[var(--ink)] sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--brand-red)]">
          Entenda de uma vez por todas...
        </p>
        <h2 className="mt-4 font-display text-4xl uppercase tracking-tight sm:text-6xl">
          A culpa <span className="text-[var(--brand-red)]">não é sua.</span>
        </h2>

        <div className="mt-12 grid gap-4 text-left md:grid-cols-2">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="rounded-lg bg-[var(--surface-2)] p-6 text-white shadow-sm"
            >
              <div className="mb-3 font-display text-2xl text-[var(--brand-yellow)]">
                0{i + 1}
              </div>
              <p className="text-sm leading-relaxed text-white/85">{r}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl font-display text-2xl uppercase sm:text-3xl">
          É por isso que você precisa do{" "}
          <span className="text-[var(--brand-red)]">Guia de Polimento Técnico</span> agora.
        </p>
      </div>
    </section>
  );
}

/* ---------------- DOBRA 05 — PASSO A PASSO ---------------- */
const steps = [
  {
    n: "01",
    title: "Diagnostique",
    text: "Identifique com precisão o tipo de verniz que está na sua frente em segundos.",
    image: "https://res.cloudinary.com/dnpkrb9wy/image/upload/v1781788252/01_Diagnostique_vzvqwj.jpg",
  },
  {
    n: "02",
    title: "Escolha",
    text: "Selecione a politriz, o composto e o disco certos para aquele verniz específico.",
    image: "https://res.cloudinary.com/dnpkrb9wy/image/upload/v1781788344/02_Escolha_wbami4.jpg",
  },
  {
    n: "03",
    title: "Execute",
    text: "Siga o protocolo de polimento passo a passo com segurança e precisão técnica.",
    image: "https://res.cloudinary.com/dnpkrb9wy/image/upload/v1781788344/03_Execute_zwcxpj.jpg",
  },
  {
    n: "04",
    title: "Replique",
    text: "Use o checklist de entrega e treine seu funcionário para manter o mesmo padrão.",
    image: "https://res.cloudinary.com/dnpkrb9wy/image/upload/v1781788345/04_Replique_clzi85.jpg",
  },
];


function Dobra05() {
  return (
    <section className="bg-[var(--ink)] px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-display text-3xl uppercase tracking-tight sm:text-5xl">
          Estes são os <span className="text-[var(--brand-yellow)]">4 passos</span>
          <br /> para você dominar o polimento técnico:
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="group relative rounded-xl border border-white/10 bg-[var(--ink-soft)] p-6 transition hover:border-[var(--brand-red)]"
            >
              <div className="font-display text-6xl leading-none text-[var(--brand-red)]/90">
                {s.n}
              </div>
              <h3 className="mt-4 font-display text-2xl uppercase">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.text}</p>
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="mt-5 aspect-square w-full rounded-lg object-cover"
              />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- DOBRA 06 — ENTREGÁVEIS ---------------- */
const deliverables = [
  { strong: "1 guia completo", rest: "em PDF com 10 capítulos de diagnóstico e protocolo de polimento técnico." },
  { strong: "5 protocolos prontos", rest: "para cada tipo de verniz, do convencional ao fosco." },
  { strong: "1 tabela de referência", rest: "com os vernizes das principais marcas premium e suas características." },
  { strong: "1 checklist de entrega", rest: "pronto para imprimir e usar na bancada com sua equipe." },
  {
    strong: "1 certificado oficial",
    rest: "de Diagnóstico e Protocolo de Polimento Técnico assinado por Mateus Vip Car Detail, Master Trainer certificado pela SONAX.",
  },
];

function Dobra06() {
  return (
    <section className="bg-[var(--light)] px-6 py-20 text-[var(--ink)] sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-display text-3xl uppercase tracking-tight sm:text-5xl">
          Tudo que você vai receber
        </h2>
        <p className="mt-3 text-center text-sm uppercase tracking-widest text-neutral-500">
          Acesso imediato após a compra
        </p>

        <ul className="mt-12 space-y-3">
          {deliverables.map((d) => (
            <li
              key={d.strong}
              className="flex items-start gap-4 rounded-lg bg-white p-5 shadow-sm ring-1 ring-black/5"
            >
              <CheckIcon />
              <p className="text-sm leading-relaxed sm:text-base">
                <strong className="font-bold">{d.strong}</strong> {d.rest}
              </p>
            </li>
          ))}
        </ul>

        <div
          className="mt-8 rounded-xl border-2 border-dashed p-6"
          style={{
            borderColor: "var(--brand-red)",
            backgroundColor: "rgba(224,23,39,0.08)",
          }}
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[var(--brand-red)] px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
            🎁 Bônus exclusivos
          </div>
          <ul className="space-y-3 text-sm sm:text-base">
            <li className="flex items-start gap-3">
              <span className="text-[var(--brand-red)]">→</span>
              <span>
                Acesso ao <strong>grupo exclusivo no WhatsApp</strong> com outros donos de
                estética para trocar experiências e tirar dúvidas.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--brand-red)]">→</span>
              <span>
                <strong>Imersão gravada</strong> sobre polimento comercial e técnico na prática.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- DOBRA 07 — PRA QUEM SERVE ---------------- */
const forYou = [
  "Já tem uma estética funcionando e quer padronizar a execução do polimento.",
  "Tem funcionário mas sente que a qualidade cai quando você não está presente.",
  "Quer atender carros premium com segurança e sem medo de estragar o verniz.",
  "Sabe polir mas nunca teve um método documentado para ensinar sua equipe.",
];
const notForYou = [
  "Nunca pegou uma politriz na vida e está começando do zero absoluto.",
  "Já tem um sistema de treinamento consolidado e padronizado na sua estética.",
];

function Dobra07() {
  return (
    <section className="bg-[var(--ink)] px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-3xl uppercase tracking-tight sm:text-5xl">
          Pra quem <span className="text-[var(--brand-yellow)]">serve</span>?
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-[var(--brand-yellow)]/30 bg-[var(--ink-soft)] p-6">
            <h3 className="mb-5 font-display text-xl uppercase text-[var(--brand-yellow)]">
              É pra você que...
            </h3>
            <ul className="space-y-3">
              {forYou.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-white/85">
                  <CheckIcon />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-[var(--ink-soft)] p-6">
            <h3 className="mb-5 font-display text-xl uppercase text-white/70">
              NÃO é pra você que...
            </h3>
            <ul className="space-y-3">
              {notForYou.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-white/70">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/10 text-xs text-white/60">
                    ✗
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-white/70 sm:text-base">
          Se você se identifica com ao menos <strong className="text-white">2 itens</strong>, o
          Guia é pra você.
        </p>
      </div>
    </section>
  );
}

/* ---------------- DOBRA 08 — ANCORAGEM ---------------- */
const anchorItems = [
  { label: "Guia de Diagnóstico e Protocolo de Polimento Técnico (10 capítulos)", price: "R$ 57" },
  {
    label:
      "1 certificado oficial de Diagnóstico e Protocolo de Polimento Técnico assinado por Mateus Vip Car Detail, Master Trainer certificado pela SONAX",
    price: "R$ 30",
  },
  {
    label:
      "Bônus: Acesso ao grupo exclusivo no WhatsApp com outros donos de estética para trocar experiências e tirar dúvidas",
    price: "R$ 30",
  },
  { label: "Bônus: Imersão gravada sobre polimento comercial e técnico na prática", price: "R$ 30" },
];

function Dobra08() {
  const total = "R$ 147";
  return (
    <section className="bg-[var(--surface)] px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-display text-3xl uppercase tracking-tight sm:text-5xl">
          Se você fosse <span className="text-[var(--brand-red)]">pagar separado</span>
        </h2>
        <p className="mt-3 text-center text-sm uppercase tracking-widest text-white/50">
          Valor real de cada item
        </p>

        <ul className="mt-10 divide-y divide-white/10 overflow-hidden rounded-xl bg-[var(--ink-soft)]">
          {anchorItems.map((i) => (
            <li
              key={i.label}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4"
            >
              <span className="min-w-0 text-sm text-white/85 sm:text-base">
                {i.label}
              </span>
              <span className="shrink-0 text-sm text-white/50 line-through sm:text-base">
                {i.price}
              </span>
            </li>
          ))}
          <li className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 bg-[var(--brand-red)]/10 px-5 py-5">
            <span className="font-display text-lg uppercase">Total real</span>
            <span className="font-display text-2xl text-[var(--brand-yellow)] line-through">{total}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

/* ---------------- DOBRA 09 — PREÇO + BOTÃO ---------------- */
function PriceCard() {
  return (
    <div
      className="mx-auto w-full max-w-xl rounded-2xl border-2 bg-[var(--ink-soft)] p-6 sm:p-8"
      style={{ borderColor: "var(--brand-red)" }}
    >
      <p className="text-center text-xs uppercase tracking-[0.3em] text-white/50">
        Hoje, por apenas
      </p>
      <div className="mt-3 text-center">
        <div className="font-display text-4xl text-white sm:text-5xl">
          8x de <span className="text-[var(--brand-yellow)]">{PRICE_INSTALLMENT}</span>
        </div>
        <p className="mt-2 text-sm text-white/70">
          ou <strong className="text-white">{PRICE_FULL}</strong> à vista
        </p>
      </div>

      <a
        href="https://checkout.pagtrust.com.br/ck1624e1fa?funnel=fn4d69c5d3"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 block w-full rounded-xl px-6 py-4 text-center font-display text-lg uppercase tracking-wide text-white shadow-lg transition active:scale-[0.99]"
        style={{
          backgroundColor: "var(--brand-red)",
          boxShadow: "0 10px 30px -10px rgba(224,23,39,0.6)",
        }}
      >
        Quero acesso agora →
      </a>

      <div className="mt-5 flex flex-wrap justify-center gap-3 text-[11px] uppercase tracking-widest text-white/60">
        <Badge icon="⚡">Acesso imediato</Badge>
        <Badge icon="🛡">Garantia 7 dias</Badge>
        <Badge icon="🔒">Compra segura</Badge>
      </div>

      <div className="mt-6 rounded-lg bg-black/40 p-4">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-[var(--brand-yellow)]">
          Como funciona
        </p>
        <ol className="space-y-2 text-xs text-white/75 sm:text-sm">
          <li>1. Você faz o pagamento via Pix ou cartão.</li>
          <li>2. Recebe o acesso por e-mail em menos de 2 minutos.</li>
          <li>3. Baixa o PDF, imprime o checklist e começa hoje mesmo.</li>
        </ol>
      </div>
    </div>
  );
}

function Badge({ children, icon }: { children: React.ReactNode; icon: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
      <span aria-hidden>{icon}</span> {children}
    </span>
  );
}

function Dobra09() {
  return (
    <section id="checkout" className="bg-[var(--ink)] px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--brand-yellow)]">
          Chega de adiar
        </p>
        <h2 className="mt-3 font-display text-3xl uppercase tracking-tight sm:text-5xl">
          Por menos do que um almoço,
          <br /> você padroniza sua estética <span className="text-[var(--brand-red)]">hoje</span>.
        </h2>
        <div className="mt-10">
          <PriceCard />
        </div>
      </div>
    </section>
  );
}

/* ---------------- DOBRA 10 — PREÇO DE FICAR PARADO ---------------- */
function Dobra10() {
  return (
    <section className="bg-[var(--light)] px-6 py-24 text-[var(--ink)]">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--brand-red)]">
          O preço de ficar parado
        </p>
        <h2 className="mt-6 font-display text-3xl uppercase leading-tight tracking-tight sm:text-5xl">
          Quanto te custa <span className="text-[var(--brand-red)]">um único carro</span>{" "}
          retrabalhado por mês?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-700 sm:text-lg">
          Um cliente premium insatisfeito não volta e ainda fala mal para três amigos. Em 6 meses
          sem padrão, você perde mais em reputação do que pagaria{" "}
          <strong className="text-[var(--ink)]">300 vezes</strong> por este guia.
        </p>
        <p className="mt-8 font-display text-2xl uppercase sm:text-3xl">
          A pergunta não é se você pode comprar.
          <br />
          É <span className="text-[var(--brand-red)]">quanto custa continuar sem</span>.
        </p>
      </div>
    </section>
  );
}

/* ---------------- DOBRA 11 — AUTORIDADE ---------------- */
function Dobra11() {
  return (
    <section className="bg-[var(--ink)] px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-[var(--brand-yellow)]">
          Quem está por trás
        </p>
        <div className="mt-8 flex flex-col items-center gap-5 text-center">
          <img
            src={expertPhoto}
            alt="Mateus Vip Car Detail"
            width={120}
            height={120}
            loading="lazy"
            className="h-[120px] w-[120px] rounded-full object-cover ring-4 ring-[var(--brand-red)]"
          />
          <div>
            <h3 className="font-display text-3xl uppercase">Mateus Vip Car Detail</h3>
            <p className="mt-1 text-sm uppercase tracking-widest text-[var(--brand-yellow)]">
              Master Trainer certificado SONAX · +4.000 profissionais treinados
            </p>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-2xl space-y-4 text-center text-sm leading-relaxed text-white/80 sm:text-base">
          <p>
            Sou fundador e dono da VIP Car Detail, e estou no mercado de estética automotiva desde
            2006. São quase <strong className="text-white">20 anos</strong> vivendo, errando e
            evoluindo dentro desse setor.
          </p>
          <p>
            Já treinei mais de <strong className="text-white">4.000 profissionais</strong> e sou{" "}
            <strong className="text-white">Master Trainer certificado pela SONAX</strong>. Mas o
            que me move não são os números, é a missão.
          </p>
          <p>
            Passei por tudo que você vive hoje: a dúvida, o cansaço, a falta de reconhecimento, o
            medo de cobrar mais. Foi exatamente isso que me fez estudar, aplicar e me tornar um dos
            maiores especialistas em estética automotiva do país.
          </p>
          <p>
            Hoje eu ensino profissionais a pararem de trocar hora por dinheiro e construírem uma
            estética automotiva de verdade.
          </p>
        </div>

        <div className="mt-12">
          <PriceCard />
        </div>
      </div>
    </section>
  );
}

/* ---------------- DOBRA 12 — FAQ + RODAPÉ ---------------- */
const faqs = [
  {
    q: "Como funciona o pagamento?",
    a: "Você pode pagar via Pix, cartão de crédito em até 8x ou boleto. A liberação é automática após a confirmação.",
  },
  {
    q: "É seguro comprar?",
    a: "Sim. O pagamento é processado por plataforma com criptografia bancária. Seus dados não são armazenados por nós.",
  },
  {
    q: "Funciona pra minha estética?",
    a: "Se você já trabalha com polimento e quer padronizar a execução, sim. O método se adapta de estética solo a equipes grandes.",
  },
  {
    q: "E a garantia?",
    a: "Você tem 7 dias para testar. Se não fizer sentido, devolvemos 100% do valor. Sem perguntas.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Após a confirmação do pagamento, você receberá um e-mail com os dados de acesso à Área de Membros. Nela, você encontrará todos os materiais do curso disponíveis para consulta.",
  },
];

function Dobra12() {
  return (
    <>
      <section className="bg-[var(--surface)] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl uppercase tracking-tight sm:text-5xl">
            Perguntas <span className="text-[var(--brand-yellow)]">frequentes</span>
          </h2>
          <div className="mt-10 divide-y divide-white/10 overflow-hidden rounded-xl bg-[var(--ink-soft)]">
            {faqs.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[var(--ink)] px-6 py-10 text-[0.875rem] text-[#666]">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 text-center">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-white/60">
            VIP Car Detail · Mateus
          </p>
          <p>
            © {new Date().getFullYear()} Guia de Diagnóstico e Protocolo de Polimento Técnico.
            Todos os direitos reservados.
          </p>
          <p className="max-w-xl text-xs text-[#555]">
            Este produto não garante resultados e não substitui treinamento prático presencial.
            Resultados variam conforme aplicação individual.
          </p>
        </div>
      </footer>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group">
      <summary className="grid w-full cursor-pointer list-none grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 text-left transition hover:bg-white/5 [&::-webkit-details-marker]:hidden">
        <span className="min-w-0 text-sm font-semibold text-white sm:text-base">{q}</span>
        <span className="shrink-0 font-display text-2xl text-[var(--brand-red)] transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="px-5 pb-5 text-sm leading-relaxed text-white/75">{a}</div>
    </details>
  );
}

function CheckIcon() {
  return (
    <span
      aria-hidden
      className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-bold text-white"
      style={{ backgroundColor: "#22c55e" }}
    >
      ✓
    </span>
  );
}
