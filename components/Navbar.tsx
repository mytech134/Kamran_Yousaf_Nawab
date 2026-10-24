"use client";
import Link from "next/link";
import Image from "next/image"; // 👈 Image import kiya hai
import { useState } from "react";
import { Menu, X, Search, User, ShoppingBag } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/categories", label: "Categories" },
    { href: "/collections", label: "Collections" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top micro-bar for aesthetic */}
      <div className="bg-[#1A1A1A] text-[#F3F0EA] text-[10px] font-medium uppercase tracking-[0.2em] py-2 flex justify-between items-center px-5 sm:px-8 lg:px-12">
        <span>Worldwide Shipping</span>
        <div className="flex items-center gap-4">
          <Search className="h-3 w-3 cursor-pointer hover:text-[#C1A57B] transition-colors" />
          <User className="h-3 w-3 cursor-pointer hover:text-[#C1A57B] transition-colors" />
          <ShoppingBag className="h-3 w-3 cursor-pointer hover:text-[#C1A57B] transition-colors" />
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#1A1A1A] px-5 py-4 sm:px-8 lg:px-12 flex items-center justify-between border-b border-white/10">
        <Link href="/" className="flex items-center gap-3">
          
          {/* 👇 YAHAN AAPKA NAYA LOGO LAGA HAI 👇 */}
          <Image 
            src="/logo.png" 
            alt="Kamran Yousaf Nawab Logo" 
            width={40} // Agar size choti/badi karni ho toh yeh number change karein
            height={40} 
            className="object-contain" 
          />
          {/* 👆 LOGO KHATAM 👆 */}

          <div className="leading-tight">
            <p className="text-sm font-black text-[#F3F0EA] tracking-wider uppercase">Kamran Yousaf</p>
            <p className="text-[10px] font-bold text-[#C1A57B] tracking-widest uppercase">Nawab</p>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-[11px] font-bold uppercase tracking-widest text-[#F3F0EA]/70 hover:text-[#C1A57B] transition-colors relative group">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#C1A57B] group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-flex rounded-full bg-[#C1A57B] px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A] hover:bg-[#F3F0EA] transition-colors"
        >
          Request a Quote
        </Link>

        <button className="md:hidden text-[#F3F0EA]" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#1A1A1A] border-t border-white/10 px-5 py-6 space-y-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-xs font-bold uppercase tracking-widest text-[#F3F0EA]/80 hover:text-[#C1A57B]">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="inline-block mt-4 rounded-full bg-[#C1A57B] px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]">
            Request a Quote
          </Link>
        </div>
      )}
    </header>
  );
}