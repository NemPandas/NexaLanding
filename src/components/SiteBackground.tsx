import type { ReactNode } from "react";

export function SiteBackground({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05030d] text-white">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_12%,rgba(255,0,122,0.2),transparent_25%),radial-gradient(circle_at_18%_58%,rgba(122,52,255,0.16),transparent_30%),radial-gradient(circle_at_70%_88%,rgba(255,0,122,0.12),transparent_28%),linear-gradient(145deg,#05030d_0%,#0b0717_48%,#120517_100%)]" />
        <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
        <div className="absolute -left-32 top-[18%] h-80 w-80 rounded-full border border-neon-violet/25 bg-neon-violet/10 blur-3xl" />
        <div className="absolute -right-24 top-16 h-96 w-96 rounded-full border border-neon-pink/25 bg-neon-pink/10 blur-3xl" />
        <div className="absolute left-1/2 top-[46rem] h-[28rem] w-[54rem] -translate-x-1/2 rounded-[100%] bg-neon-pink/[0.07] blur-[110px]" />
        <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(255,255,255,.65)_0.7px,transparent_0.7px)] [background-size:28px_28px] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
        <div className="absolute left-[8%] top-40 h-px w-40 rotate-[28deg] bg-gradient-to-r from-transparent via-neon-pink/60 to-transparent shadow-neon" />
        <div className="absolute right-[5%] top-[34rem] h-px w-56 -rotate-[38deg] bg-gradient-to-r from-transparent via-neon-violet/50 to-transparent" />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
