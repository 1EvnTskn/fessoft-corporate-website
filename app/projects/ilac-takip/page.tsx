export default function IlacTakipPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">
            <a
                href="/#projeler"
                className="text-sm font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
            >
                ← Geri dön
            </a>

            <h1 className="mt-6 text-3xl font-bold tracking-tight text-zinc-900">
                İlaç Takip Uygulaması
            </h1>

            <p className="mt-4 text-zinc-600">
                Kullanıcıların ilaçlarını düzenli takip edebilmesi için hatırlatma akışı ve takip ekranları sunan bir uygulama.
            </p>

            <section className="mt-10 space-y-8">
                <div>
                    <h2 className="text-lg font-semibold text-zinc-900">Amaç</h2>
                    <p className="mt-2 text-zinc-600">
                        Unutmayı azaltan, sade arayüzlü ve hızlı çalışan bir ilaç takip deneyimi oluşturmak.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-zinc-900">Teknolojiler</h2>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {["Next.js", "TypeScript", "Tailwind"].map((t) => (
                            <span key={t} className="rounded-full bg-zinc-100 px-3 py-1 text-xs">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-zinc-900">Öne Çıkan Özellikler</h2>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-zinc-600">
                        <li>Hatırlatma mantığına uygun akış</li>
                        <li>Kullanıcı odaklı sade arayüz</li>
                        <li>Genişletilebilir proje yapısı</li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
