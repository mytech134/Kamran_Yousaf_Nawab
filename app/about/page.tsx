import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-12">
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a017]">
          About Us
        </span>
        <h1 className="font-serif text-4xl font-bold text-[#0a1a38] sm:text-5xl">
          About Kamran Yousaf Nawab
        </h1>
        <p className="mt-6 text-base leading-relaxed text-gray-600">
          Kamran Yousaf Nawab is a trusted manufacturer of premium sportswear,
          cotton wear, and custom apparel. With GOAT certification for
          high-quality cotton, we deliver unmatched quality at competitive prices.
        </p>
        <p className="mt-4 text-base leading-relaxed text-gray-600">
          We specialize in Soccer Ball Wear, Basketball Wear, Training Wear,
          Cotton Wear, Sport Apparel, Football Ball Wear, Rugby Wear, GAA Wear,
          Hoodies &amp; Casual Wear, and Sports Bags.
        </p>
        <p className="mt-4 text-base leading-relaxed text-gray-600">
          Whether you&apos;re outfitting a team, launching your brand, or scaling
          your retail business — we offer Private Label Customization, Retail &amp;
          Custom Packaging, Fast Delivery (10–15 Days Production Time), Small MOQ
          Acceptance, and Unmatched Quality at Competitive Prices.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0a1a38] px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#142a52]"
        >
          Contact Us <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}