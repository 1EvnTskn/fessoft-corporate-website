export default function AdminPanelPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">
            <a
                href="/#projeler"
                className="text-sm font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
            >
                ← Geri dön
            </a>

            <h1 className="mt-6 text-3xl font-bold tracking-tight text-zinc-900">
                Admin Panel Tasarımı
            </h1>

            <p className="mt-4 text-zinc-600">
                KPI kartları, tablo yapıları ve temel yetkilendirme mantığıyla yönetim ekranı iskeleti.
            </p>

            <section className="mt-10 space-y-8">
                <div>
                    <h2 className="text-lg font-semibold text-zinc-900">Amaç</h2>
                    <p className="mt-2 text-zinc-600">
                        Yönetilebilir, ölçeklenebilir ve okunabilir bir admin panel altyapısı kurmak.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-zinc-900">Başlıklar</h2>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {["Dashboard", "Tables", "Auth"].map((t) => (
                            <span key={t} className="rounded-full bg-zinc-100 px-3 py-1 text-xs">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-zinc-900">Öne Çıkan Özellikler</h2>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-zinc-600">
                        <li>KPI kartları ve özet metrikler</li>
                        <li>Filtrelenebilir tablo yapısı</li>
                        <li>Rol bazlı erişim altyapısı</li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
