import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] pt-20 pb-10 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white p-1">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="text-2xl font-black uppercase tracking-tighter">
                Kamran Yousaf <span className="text-[#D4FF00]">Nawab</span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-gray-400">
              Premium manufacturer and exporter of sportswear, cotton wear, and custom apparel. 
              Delivering unmatched quality at competitive prices globally.
            </p>
            <div className="mt-8 flex gap-4">
              {/* Social Icons Placeholder */}
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#D4FF00] hover:text-[#D4FF00]">
                IN
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#D4FF00] hover:text-[#D4FF00]">
                IG
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#D4FF00] hover:text-[#D4FF00]">
                FB
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-[#D4FF00]">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/categories" className="hover:text-white transition">Categories</Link></li>
              <li><Link href="/collections" className="hover:text-white transition">Collections</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-[#D4FF00]">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>123 Apparel Street,<br />Sialkot, Pakistan</li>
              <li>
                <a href="mailto:info@kamranyousaf.com" className="hover:text-white transition">
                  info@kamranyousaf.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-white transition">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 pt-8 text-xs text-gray-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Kamran Yousaf Nawab. All rights reserved.</p>
          <div className="mt-4 flex gap-6 sm:mt-0">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}