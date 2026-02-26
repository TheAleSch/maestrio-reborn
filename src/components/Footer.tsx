export function Footer() {
  return (
    <footer className="backdrop-blur-[10px] bg-black/20 border-t border-muted-border px-6 sm:px-12 lg:px-32 py-10">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Left: logo + copyright */}
        <div className="flex items-center gap-4">
          <span className="font-space-grotesk font-bold text-sm text-white">
            Maestrio
          </span>
          <span className="font-dm-mono text-[12.5px] text-fg-muted tracking-[0.499px]">
            © 2026
          </span>
        </div>

        {/* Right: links */}
        <div className="flex items-center gap-1">
          <button className="px-2 py-1 font-dm-mono text-[13px] text-fg-muted hover:text-white transition-colors">
            Privacy
          </button>
          <span className="font-dm-mono text-[12.5px] text-fg-muted">·</span>
          <button className="px-2 py-1 font-dm-mono text-[13px] text-fg-muted hover:text-white transition-colors">
            Terms
          </button>
        </div>
      </div>
    </footer>
  );
}
