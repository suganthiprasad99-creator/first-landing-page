"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Careers", href: "#careers" },
  { label: "Why Choose Kosal", href: "#why-kosal" },
  { label: "Ladder Academy", href: "#academy" },
  { label: "About Us", href: "/about" },
]

export default function Header()
 {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        height: 64,
        background: "var(--Surface-surface_0)",
        borderBottom: "1px solid var(--Outlines-base_em)",
      }}
    >
      <div className="mx-auto flex h-full max-w-8xl items-center justify-between px-10 py-4">
        <Link href="/">
          <Image
            src="/Logo1.svg"
            alt="Logo"
            width={120}
            height={120}
            priority
            className="hidden dark:block"
          />
          <Image
            src="/Logo Container (1).svg"
            alt="Logo"
            width={120}
            height={120}
            priority
            className="block dark:hidden"

          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium leading-6 tracking-normal font-[var(--font-manrope)] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button
            variant="default"
            size="sm"
            className="pl-10 pr-10 hidden md:inline-flex  w-[85px] h-[32px] rounded-[24px] font-medium  leading-[24px] "
          >
            Contact Us
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium leading-6 tracking-normal font-[var(--font-manrope)] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>

            ))}
          </div>
        </div>
      )}
    </header>
  )
}
