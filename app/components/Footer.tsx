export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-zinc-200 bg-white">
            <div className="mx-auto max-w-5xl px-6 py-10">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm font-semibold text-zinc-900">Portföy</p>
                        <p className="mt-1 text-sm text-zinc-600">
                            Kullanıcı odaklı dijital ürünler tasarlıyor ve geliştiriyorum.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm font-medium text-zinc-700">
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
                            className="hover:text-zinc-900"
                        >
                            CV
                        </a>

                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-zinc-500">© {year} Tüm hakları saklıdır.</p>
                    <p className="text-xs text-zinc-500">
                        Next.js + Tailwind ile yapıldı.
                    </p>
                </div>
            </div>
        </footer>
    );
}
