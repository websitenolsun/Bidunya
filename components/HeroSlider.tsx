import Image from "next/image";
import Link from "next/link";
import { quoteText, whatsappHref } from "@/data/site";

const hero = {
  title: "Kurumsal kupa, madalya ve plaket üretiminde hızlı teklif",
  description:
    "Turnuva, okul, şirket ve özel etkinlikler için kişiye özel ödül modellerini ürün koduyla kolayca talep edin.",
  href: "/kupalar",
  image: "/images/hero-oduller.png",
  alt: "Kupa, plaket, madalya ve kurumsal ödül ürünleri",
};

export function HeroSlider() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src={hero.image}
          alt={hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[36%_center] sm:object-center"
        />
        <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,rgba(15,23,42,0.96)_0%,rgba(15,23,42,0.88)_52%,rgba(15,23,42,0.48)_82%,rgba(15,23,42,0.16)_100%)] sm:w-[60%] sm:bg-[linear-gradient(90deg,rgba(15,23,42,0.86)_0%,rgba(15,23,42,0.7)_55%,rgba(15,23,42,0.28)_82%,rgba(15,23,42,0)_100%)]" />
      </div>

      <div className="flex min-h-[470px] items-center overflow-hidden py-12 pl-5 pr-4 sm:pl-[clamp(32px,6vw,72px)] md:min-h-[560px] min-[992px]:pl-[clamp(40px,9vw,180px)]">
        <div className="w-full max-w-[720px] sm:w-[55%] min-[992px]:w-[48%]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne">
            BİDÜNYA REKLAM KATALOG
          </p>
          <div className="mt-5 h-px w-24 bg-gold" />
          <h1 className="mt-6 font-display text-[38px] font-semibold leading-none tracking-tight sm:text-[clamp(40px,4.25vw,52px)] min-[1200px]:text-[clamp(48px,4vw,72px)]">
            <span className="block min-[992px]:whitespace-nowrap">Kurumsal kupa, madalya</span>
            <span className="block min-[992px]:whitespace-nowrap">ve plaket üretiminde</span>
            <span className="block min-[992px]:whitespace-nowrap">hızlı teklif</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base font-light leading-7 text-slate-100 sm:text-lg sm:leading-8">
            {hero.description}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href={hero.href}
              className="rounded-md bg-gold px-6 py-4 text-center text-sm font-semibold text-slate-950 transition hover:shadow-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              Kataloğu İncele
            </Link>
            <a
              href={whatsappHref(quoteText(hero.title))}
              className="rounded-md border border-champagne/40 bg-white/8 px-6 py-4 text-center text-sm font-semibold text-white backdrop-blur transition hover:border-gold hover:shadow-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              WhatsApp ile Teklif Al
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
