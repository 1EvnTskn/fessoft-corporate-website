export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo / İsim */}
        <a href="#" className="text-lg font-bold tracking-tight">
                  Evin
        </a>

        {/* Menü */}
        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-700">
          <a href="#projeler" className="hover:text-zinc-900">
            Projeler
          </a>
          <a href="#iletisim" className="hover:text-zinc-900">
            İletişim
          </a>
                  <a
                      href="/cv.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800"
                  >
                      CV
                  </a>

        </nav>
      </div>
    </header>
  );
}
