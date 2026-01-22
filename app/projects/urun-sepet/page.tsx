export default function UrunSepetPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">
            <a
                href="/#projeler"
                className="text-sm font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
            >
                ← Geri dön
            </a>

            <h1 className="mt-6 text-3xl font-bold tracking-tight text-zinc-900">
                Ürün & Sepet Modülü
            </h1>

            <p className="mt-4 text-zinc-600">
                Ürün listeleme, sepet akışı ve yönetilebilir yapı sunan, e-ticaret için hızlı bir temel modül.
            </p>

            <section className="mt-10 space-y-8">
                <div>
                    <h2 className="text-lg font-semibold text-zinc-900">Amaç</h2>
                    <p className="mt-2 text-zinc-600">
                        Sepet deneyimini hızlı, anlaşılır ve performanslı hale getirip satış akışını kolaylaştırmak.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-zinc-900">Teknolojiler / Başlıklar</h2>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {["UI/UX", "API", "Performans"].map((t) => (
                            <span key={t} className="rounded-full bg-zinc-100 px-3 py-1 text-xs">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-zinc-900">Öne Çıkan Özellikler</h2>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-zinc-600">
                        <li>Ürün listeleme ve detay akışı</li>
                        <li>Sepet ekle/çıkar güncellemeleri</li>
                        <li>Performans odaklı arayüz düzeni</li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
