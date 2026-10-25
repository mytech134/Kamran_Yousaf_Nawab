import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site";

export async function generateStaticParams() {
  return products.map((p: any) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p: any) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.short,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p: any) => p.slug === slug);

  if (!product) notFound();

  // FIX: phone number se spaces aur + hata kar clean kiya taake WhatsApp link kaam kare
  const rawPhone = siteConfig.phone || "";
  const cleanPhone = rawPhone.replace(/[^0-9]/g, ""); 
  
  const whatsappLink = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    `Hi, I'm interested in ${product.name}`
  )}`;

  return (
    <>
      {/* Breadcrumb + Hero */}
      <section className="bg-[#f0f4fa] py-10">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-[#d4a017]"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Products
          </Link>
        </div>
      </section>

      {/* Main */}
      <section className="bg-white py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
          {/* Image */}
          <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl lg:h-[600px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Info */}
          <div>
            <h1 className="mt-3 font-serif text-3xl font-bold text-[#0a1a38] sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              {product.short}
            </p>

            <div className="mt-6 rounded-xl border border-gray-200 bg-[#f0f4fa] p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Minimum Order Quantity
                </span>
                <span className="font-serif text-lg font-bold text-[#0a1a38]">
                  {product.moq}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#d4a017] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#0a1a38] transition hover:-translate-y-0.5 hover:bg-[#e9be33] hover:shadow-lg"
              >
                Request a Quote
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:bg-[#1ebe5a] hover:shadow-lg"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>

            {/* Description */}
            <div className="mt-10 border-t border-gray-200 pt-8">
              <h2 className="font-serif text-xl font-bold text-[#0a1a38]">
                Product Overview
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                {product.short}. Full specifications, packaging details, and
                lead times are shared on request. Contact us for samples and
                pricing.
              </p>
            </div>

            {/* Customization */}
            <div className="mt-8">
              <h2 className="font-serif text-xl font-bold text-[#0a1a38]">
                Customization Available
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {["Private label", "Custom packaging", "Colour & sizing", "Bulk pricing"].map(
                  (opt) => (
                    <li key={opt} className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="h-4 w-4 flex-shrink-0 text-[#d4a017]" />
                      {opt}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related CTA */}
      <section className="bg-[#0a1a38] py-16 text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-5 text-center sm:px-8 lg:flex-row lg:px-12 lg:text-left">
          <div>
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Need bulk pricing or samples?
            </h2>
            <p className="mt-2 text-white/70">
              Our export team responds to every inquiry within one business day.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#d4a017] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#0a1a38] transition hover:bg-[#e9be33]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}