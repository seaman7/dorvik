"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { DorvikBrand } from "@/components/home/DorvikBrand";
import { SITE_CONFIG } from "@/lib/siteConfig";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef(null);
  const headerRef = useRef(null);

  // Keyboard navigation & click outside handling
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }

    function handlePointerDown(event) {
      if (
        open &&
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = SITE_CONFIG.navigation;

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-[#fbf9f4]/95 backdrop-blur-md border-b border-[#e5ded1] transition-colors"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
        }
      }}
    >
      <div className="dv-container flex items-center justify-between h-[72px]">
        {/* Brand Logo */}
        <Link
          href="/"
          aria-label="Dorvik home"
          className="focus-visible:outline-2 focus-visible:outline-[#14382c] rounded-md"
          onClick={() => setOpen(false)}
        >
          <DorvikBrand />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-8"
          aria-label="Main navigation"
        >
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : link.href.startsWith("/#")
                ? false
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-[13px] font-medium transition-colors py-1 relative ${
                  isActive
                    ? "text-[#14382c] font-semibold"
                    : "text-[#596a60] hover:text-[#14382c]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#14382c] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Primary CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="dv-btn-primary !py-2.5 !px-4 text-[13px] font-semibold"
          >
            <span>Discuss a Project</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            href="/contact"
            className="text-[12px] font-semibold px-3 py-1.5 bg-[#14382c] text-white rounded-md"
          >
            Discuss
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="p-2 text-[#14382c] hover:bg-[#eee8dc] rounded-lg transition-colors"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-controls="mobile-navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {open && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-[#fbf9f4] border-t border-[#e5ded1] px-6 py-6 shadow-xl max-h-[calc(100dvh-72px)] overflow-y-auto"
        >
          <div className="flex flex-col space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#798a80] px-3 mb-2">
              Menu
            </span>
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : link.href.startsWith("/#")
                  ? false
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#edf5f1] text-[#14382c] font-semibold"
                      : "text-[#293830] hover:bg-[#f4efe4]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={16} className="text-[#798a80]" />
                </Link>
              );
            })}
          </div>

          <div className="pt-6 mt-4 border-t border-[#e5ded1] space-y-3">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#14382c] text-white rounded-lg font-semibold text-sm shadow-sm"
            >
              <span>Discuss a Project</span>
              <ArrowUpRight size={16} />
            </Link>
            <p className="text-center text-xs text-[#798a80] pt-1">
              Dhaka, Bangladesh · Serving clients worldwide
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

// Export as DorvikNavbar for compatibility with existing imports
export { Navbar as DorvikNavbar };
