import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, Package, Award, Ship, ArrowUpRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export default function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="bg-[#F3F0EA] text-[#1A1A1A] font-sans selection:bg-[#C1A57B] selection:text-[#F3F0EA] overflow-x-hidden">

      {/* ===== HERO SECTION ===== */}
      <section className="relative flex min-h-[95vh] items-center overflow-hidden bg-[#121212]">
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1920&q=80"
            alt="Premium Sportswear"
            fill
            priority
            className="object-cover scale-105 animate-[slowZoom_20s_ease-in-out_infinite] opacity-80"
          />
          {/* Warm Espresso Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/90 to-transparent" />
          <div className="absolute inset-0 bg-[#121212]/40 mix-blend-multiply" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <div className="mb-8 flex items-center gap-3 animate-fade-up">
              <span className="h-px w-12 bg-[#C1A57B]" />
              <span className="inline-block text-xs font-bold uppercase tracking-[0.4em] text-[#C1A57B]">
                Est. 2024 — Global Manufacturer
              </span>
            </div>

            <h1 className="font-sans text-5xl font-black leading-[1.02] tracking-tighter text-[#F3F0EA] sm:text-7xl lg:text-8xl animate-fade-up delay-100">
              <span className="block pb-2">PREMIUM</span>
              <span className="block text-[#A3A39D] pb-2">SPORTSWEAR</span>
              <span className="block pb-2">& CUSTOM</span>
              <span className="block italic font-light text-[#C1A57B] pb-2">APPAREL.</span>
            </h1>

            <div className="mt-8 max-w-xl animate-fade-up delay-200">
              <p className="text-lg leading-relaxed text-[#F3F0EA]/80">
                Kamran Yousaf Nawab is a trusted manufacturer of sportswear, cotton wear,
                and custom apparel. With GOAT certification for high-quality cotton,
                we deliver unmatched quality at competitive prices.
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-up delay-200">
              <Link
                href="/collections"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#F3F0EA] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#1A1A1A] transition-all duration-300 hover:bg-[#C1A57B]"
              >
                Explore Collections
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F3F0EA]/30 bg-white/5 backdrop-blur-md px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#F3F0EA] transition-all duration-300 hover:bg-[#F3F0EA] hover:text-[#1A1A1A]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="border-y border-[#1A1A1A]/10 bg-[#F3F0EA] py-6 overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
          {[...siteConfig.stats, ...siteConfig.stats, ...siteConfig.stats].map((stat, index) => (
            <div key={index} className="mx-10 flex items-center gap-4">
              <span className="text-3xl font-black text-[#1A1A1A]">
                {stat.value}{stat.suffix}
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/50">
                {stat.label}
              </span>
              <span className="text-2xl text-[#C1A57B]">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== COMPANY INTRO ===== */}
      <section className="relative bg-[#F3F0EA] py-24 sm:py-32">
        <div className="mx-auto grid w-full max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-24 lg:px-12">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#1A1A1A]/40">
              <span className="h-px w-8 bg-[#1A1A1A]/40" />
              Who We Are
            </span>
            <h2 className="font-sans text-4xl font-black leading-[1.1] tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
              TRUSTED <br />
              MANUFACTURER <br />
              <span className="relative inline-block mt-2">
                <span className="absolute inset-0 bg-[#C1A57B]/20 -rotate-1 rounded-sm" />
                <span className="relative px-3">SINCE DAY ONE.</span>
              </span>
            </h2>
            <p className="mt-10 text-lg leading-relaxed text-[#1A1A1A]/70">
              Kamran Yousaf Nawab has been a trusted name in premium sportswear manufacturing.
              We specialize in Soccer Ball Wear, Basketball Wear, Training Wear, Cotton Wear,
              Sport Apparel, Football Ball Wear, Rugby Wear, GAA Wear, Hoodies & Casual Wear,
              and Sports Bags.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#1A1A1A]/70">
              Whether you're outfitting a team, launching your brand, or scaling your retail
              business — we offer Private Label Customization, Retail & Custom Packaging,
              Fast Delivery (10–15 Days Production Time), Small MOQ Acceptance, and Unmatched
              Quality at Competitive Prices.
            </p>

            <Link
              href="/about"
              className="group mt-12 inline-flex items-center gap-2 border-b-2 border-[#1A1A1A] pb-1 text-sm font-bold uppercase tracking-widest text-[#1A1A1A] transition-all hover:border-[#C1A57B] hover:text-[#1A1A1A]/70"
            >
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 h-full w-full rounded-[2rem] border-2 border-[#1A1A1A]/10" />
            <div className="relative h-[500px] w-full overflow-hidden rounded-[2rem] lg:h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
                alt="Kamran Yousaf Nawab warehouse"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-[#C1A57B] p-6 shadow-xl text-[#1A1A1A]">
              <p className="text-3xl font-black">100%</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-70">Quality Assured</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="bg-[#1A1A1A] py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#C1A57B]">
                <Sparkles className="h-3 w-3" />
                Our Categories
              </span>
              <h2 className="font-sans text-4xl font-black text-[#F3F0EA] sm:text-5xl lg:text-6xl">
                EXPLORE <br />
                <span className="text-[#8A8A85]">THE RANGE.</span>
              </h2>
            </div>
            <Link
              href="/categories"
              className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#F3F0EA]/60 hover:text-[#C1A57B] transition-colors"
            >
              View All
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/categories/${c.slug}`}
                className="group relative h-[400px] w-full overflow-hidden rounded-2xl block ring-1 ring-white/10 hover:ring-[#C1A57B]/50 transition-all duration-500"
              >
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-sans text-2xl font-black text-[#F3F0EA] uppercase tracking-tight">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-sm text-[#F3F0EA]/70">{c.short}</p>
                  <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:bg-[#C1A57B] group-hover:text-[#1A1A1A] group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4 text-[#F3F0EA] group-hover:text-[#1A1A1A]" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="bg-[#F3F0EA] py-24 sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-16 text-center">
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#1A1A1A]/40">
              <span className="h-px w-8 bg-[#1A1A1A]/40" />
              Featured Products
              <span className="h-px w-8 bg-[#1A1A1A]/40" />
            </span>
            <h2 className="font-sans text-4xl font-black text-[#1A1A1A] sm:text-5xl lg:text-6xl">
              BEST OF <br />
              <span className="text-[#8A8A85]">THE CATALOGUE.</span>
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <div
                key={p.slug}
                className="group overflow-hidden rounded-2xl bg-[#FAFAFA] border border-[#1A1A1A]/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(26,26,26,0.15)]"
              >
                <div className="relative h-[300px] w-full overflow-hidden bg-gray-100 block">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-[#F3F0EA]/90 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] shadow-sm">
                    MOQ: {p.moq}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-sans text-xl font-black text-[#1A1A1A] uppercase tracking-tight">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-[#8A8A85] line-clamp-2">{p.short}</p>

                  <div className="mt-6 flex gap-3">
                    <Link
                      href={`/products/${p.slug}`}
                      className="flex-1 rounded-full bg-[#1A1A1A] py-3 text-center text-xs font-bold uppercase tracking-widest text-[#F3F0EA] transition hover:bg-[#C1A57B] hover:text-[#1A1A1A]"
                    >
                      View Details
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 rounded-full border border-[#1A1A1A]/20 py-3 text-center text-xs font-bold uppercase tracking-widest text-[#1A1A1A] transition hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F3F0EA]"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/categories"
              className="group inline-flex items-center gap-3 rounded-full border-2 border-[#1A1A1A] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#1A1A1A] transition hover:bg-[#1A1A1A] hover:text-[#F3F0EA]"
            >
              View All Products
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-[#1A1A1A] py-24 text-[#F3F0EA] sm:py-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-16">
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#C1A57B]">
              <Sparkles className="h-3 w-3" />
              Why Choose Us
            </span>
            <h2 className="font-sans text-4xl font-black sm:text-5xl lg:text-6xl">
              BUILT FOR <br />
              <span className="text-[#8A8A85]">GLOBAL BUYERS.</span>
            </h2>
          </div>

          <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-2xl overflow-hidden">
            {[
              {
                icon: Globe,
                title: "GOAT Certified Cotton",
                desc: "Certified high-quality cotton ensuring premium comfort and durability.",
              },
              {
                icon: Package,
                title: "Small MOQ Accepted",
                desc: "We support startups and small businesses with low minimum order quantities.",
              },
              {
                icon: Award,
                title: "Private Label & Custom",
                desc: "Complete customization with retail and custom packaging options.",
              },
              {
                icon: Ship,
                title: "Fast Delivery",
                desc: "10–15 days production time with reliable worldwide shipping.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group bg-[#1A1A1A] p-10 transition-all duration-300 hover:bg-white/[0.04]"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#C1A57B]/10 transition-colors duration-300 group-hover:bg-[#C1A57B]/20">
                  <item.icon className="h-7 w-7 text-[#C1A57B]" />
                </div>
                <h3 className="font-sans text-lg font-bold uppercase tracking-wide text-[#F3F0EA]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#F3F0EA]/60">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative bg-[#C1A57B] py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(26,26,26,0.1),_transparent_40%)]" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-5 text-center sm:px-8 lg:flex-row lg:px-12 lg:text-left">
          <div>
            <h2 className="font-sans text-3xl font-black text-[#1A1A1A] sm:text-4xl lg:text-5xl tracking-tight">
              READY TO START <br className="hidden sm:block" /> YOUR ORDER?
            </h2>
            <p className="mt-3 text-lg font-medium text-[#1A1A1A]/70">
              Get in touch for a quote tailored to your requirements.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-[#1A1A1A] px-10 py-5 text-sm font-bold uppercase tracking-widest text-[#F3F0EA] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(26,26,26,0.3)]"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* ===== DEVELOPER CREDIT ===== */}
      <div className="bg-[#121212] py-6 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">
            Designed & Developed by{" "}
            <span className="font-bold text-[#C1A57B]">Umiah Mughal</span>
          </p>
        </div>
      </div>

    </div>
  );
}