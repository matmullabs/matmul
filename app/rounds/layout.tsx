import Link from 'next/link';

export default function RoundsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen relative">
      <div className="noise" />
      <div style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto', position: 'relative', zIndex: 10 }}>
        <header className="relative z-10 page-pad" style={{ paddingTop: '1.5rem', paddingBottom: '1rem' }}>
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="flex items-center cursor-pointer select-none"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="matmul-mark">
                <div style={{ background: '#d4562e' }} />
                <div style={{ background: '#eb8f3a' }} />
                <div style={{ background: '#eba86a' }} />
                <div style={{ background: '#f5d4a0' }} />
              </div>
              <span style={{ fontSize: '18px', letterSpacing: '0.06em' }}>matmul <span className="labs-glow">labs</span></span>
            </Link>
            <nav
              className="hidden sm:block"
              style={{ fontSize: '12px', letterSpacing: '0.2em', color: 'var(--text-mid)', textTransform: 'uppercase' as const }}
            >
              Rounds
            </nav>
          </div>
        </header>

        <main className="relative z-10">{children}</main>

        <footer className="relative z-10 page-pad" style={{ paddingTop: '2rem', paddingBottom: '1.5rem' }}>
          <div className="divider" style={{ marginBottom: '1rem' }} />
          <div style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'var(--text-dim)' }}>
            <span>&copy; 2026 matmul inc.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
