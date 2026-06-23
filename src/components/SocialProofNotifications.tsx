import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const NAMES = [
  "João", "Pedro", "Lucas", "Gabriel", "Rafael", "Matheus", "Felipe", "Bruno",
  "Carlos", "Rodrigo", "Thiago", "Daniel", "Diego", "Eduardo", "Fernando",
  "Gustavo", "Henrique", "Igor", "Leonardo", "Marcelo", "Murilo", "Otávio",
  "Paulo", "Renato", "Ricardo", "Vinícius", "André", "Anderson", "Caio",
  "Davi", "Enzo", "Fábio", "Guilherme", "Júlio", "Marcos", "Nícolas",
  "Rogério", "Samuel", "Sérgio", "Vitor", "Wesley", "Alexandre", "Arthur",
  "Breno", "Cauã", "Danilo", "Erick", "Heitor", "Ian", "Kauã",
];

const PRODUCT = "Guia de Diagnóstico e Protocolo de Polimento Técnico";

function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function timeAgoLabel() {
  const opts = ["agora mesmo", "há 1 minuto", "há 2 minutos", "há 3 minutos", "há 5 minutos"];
  return randomFrom(opts);
}

export function SocialProofNotifications() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState<{ name: string; time: string }>({
    name: "João",
    time: "agora mesmo",
  });

  useEffect(() => {
    let mounted = true;
    let hideTimer: ReturnType<typeof setTimeout>;
    let nextTimer: ReturnType<typeof setTimeout>;

    const showOne = () => {
      if (!mounted) return;
      setData({ name: randomFrom(NAMES), time: timeAgoLabel() });
      setVisible(true);
      hideTimer = setTimeout(() => {
        if (!mounted) return;
        setVisible(false);
        nextTimer = setTimeout(showOne, 4000 + Math.random() * 4000);
      }, 5000);
    };

    const initial = setTimeout(showOne, 3500);

    return () => {
      mounted = false;
      clearTimeout(initial);
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, []);

  return (
    <div
      aria-live="polite"
      className={`fixed bottom-4 left-4 z-50 max-w-[92vw] sm:max-w-sm transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
      }`}
    >
      <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-[var(--ink)]/95 p-3 pr-4 shadow-2xl backdrop-blur ring-1 ring-[var(--brand-yellow)]/30">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-yellow)]/15">
          <CheckCircle2 className="h-5 w-5 text-[var(--brand-yellow)]" />
        </div>
        <div className="min-w-0 text-sm leading-snug text-white">
          <p>
            <span className="font-bold">{data.name}</span> comprou o{" "}
            <span className="font-semibold text-[var(--brand-yellow)]">{PRODUCT}</span>{" "}
            {data.time}!
          </p>
          <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
            Compra aprovada
          </p>
        </div>
      </div>
    </div>
  );
}
