import { GlowText } from '@/components/glow-text'

export function FooterSection(): React.JSX.Element {
  return (
    <footer className="bg-background w-full border-t border-zinc-400 py-6 text-center text-sm text-zinc-300">
      <p>
        © {new Date().getFullYear()} Bruno Rocha — Built with{' '}
        <span className="transition-[text-shadow] hover:text-shadow-[0_0.1rem_0.75rem] hover:text-shadow-red-400/80">
          ❤️
        </span>{' '}
        using React
      </p>
      <p className="mt-1">
        <GlowText
          containerClassName="blink border-r italic"
          glowClassName="text-white bottom-0 drop-shadow-none text-shadow-[0_0.2rem_0.2rem] text-shadow-cyan-400/80"
        >
          Building the future, one line at a time.
        </GlowText>
      </p>
    </footer>
  )
}
