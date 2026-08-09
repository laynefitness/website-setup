"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { CalendarDays, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, siteConfig } from "@/data/site";
import { Brand } from "./brand";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} data-active={isActive(item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <a className="button button-ghost header-phone" href={siteConfig.phoneHref}>
            <Phone aria-hidden="true" size={18} />
            {siteConfig.phoneDisplay}
          </a>
          <Link className="button button-primary header-book" href="/book-a-call">
            <CalendarDays aria-hidden="true" size={18} />
            Book a Call
          </Link>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button className="menu-trigger" aria-label="Open navigation">
                <Menu aria-hidden="true" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="dialog-overlay" />
              <Dialog.Content className="mobile-menu" aria-describedby={undefined}>
                <div className="mobile-menu-head">
                  <Dialog.Title>Navigation</Dialog.Title>
                  <Dialog.Close className="menu-trigger" aria-label="Close navigation">
                    <X aria-hidden="true" />
                  </Dialog.Close>
                </div>
                <nav aria-label="Mobile navigation">
                  {navigation.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <Link className="button button-primary" href="/book-a-call" onClick={() => setOpen(false)}>
                  Book My Coaching Call
                </Link>
                <a className="button button-light" href={siteConfig.phoneHref}>Call {siteConfig.phoneDisplay}</a>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
