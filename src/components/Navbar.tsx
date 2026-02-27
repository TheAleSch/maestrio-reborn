"use client";

import React from "react";
import { NavArrowRight } from "iconoir-react";
import { MaestrioLogo, LOGO_SVG_STRING } from "@/components/MaestrioLogo";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

const LOGO_SVG_URL = "/maestrio-logo.svg";

function LogoContextMenu() {
  const [copied, setCopied] = React.useState(false);

  function openInNewTab() {
    window.open(LOGO_SVG_URL, "_blank", "noopener,noreferrer");
  }

  async function copyLogoSvg() {
    try {
      await navigator.clipboard.writeText(LOGO_SVG_STRING);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // silently fail
    }
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <button className="cursor-default" aria-label="Maestrio logo">
          <MaestrioLogo className="h-5 w-auto" fill="#ffffff" />
        </button>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onClick={openInNewTab}>
          Open in new tab
        </ContextMenuItem>
        <ContextMenuItem onClick={copyLogoSvg}>
          {copied ? "Copied!" : "Copy Logo SVG"}
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem disabled className="flex items-center justify-between gap-3">
          Brand Guidelines
          <span className="font-dm-mono text-[10px] text-fg-muted tracking-[1.2px] uppercase">
            soon
          </span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

const navLinks = [
  { label: "Features", href: "#features", comingSoon: false },
  { label: "Docs", href: "#", comingSoon: true },
  { label: "Company", href: "#", comingSoon: true },
  { label: "Pricing", href: "#", comingSoon: true },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[10px] bg-black/20 border-b border-muted-border px-6 sm:px-12 lg:px-32 py-4">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <LogoContextMenu />

        {/* Nav links */}
        <TooltipProvider>
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href, comingSoon }) => {
              const linkEl = (
                <a
                  key={label}
                  href={href}
                  onClick={comingSoon ? (e) => e.preventDefault() : undefined}
                  className="flex items-center gap-0.5 px-2 py-1 rounded-3xl font-inter font-medium text-[13px] text-slate-400 hover:text-white transition-colors"
                >
                  {label}
                  <NavArrowRight
                    width={10}
                    height={10}
                    className="rotate-90 opacity-70"
                  />
                </a>
              );

              if (!comingSoon) return linkEl;

              return (
                <Tooltip key={label}>
                  <TooltipTrigger asChild>{linkEl}</TooltipTrigger>
                  <TooltipContent>Coming soon</TooltipContent>
                </Tooltip>
              );
            })}
          </nav>
        </TooltipProvider>

        {/* Action buttons */}
        <div className="flex items-center gap-4">
          <a
            href="#signup"
            className="flex items-center gap-2 font-inter font-medium text-[14px] text-over-primary bg-[#d1d5db] px-4 py-2 h-10 rounded-md hover:bg-white transition-colors cursor-pointer"
          >
            Get early access
          </a>
        </div>
      </div>
    </header>
  );
}
