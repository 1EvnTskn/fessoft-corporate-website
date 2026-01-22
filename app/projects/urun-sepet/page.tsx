import ProjectHeader from "@/app/components/ProjectHeader";

export default function UrunSepetPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">
            <ProjectHeader
                title="Ürün & Sepet Modülü"
                subtitle="Ürün listeleme, sepet akışı ve yönetilebilir yapı sunan e-ticaret modülü."
                tags={["UI/UX", "API", "Performans"]}
                repoHref={undefined}
                demoHref={undefined}
            />

            <section className="mt-12 space-y-10">
                <div>
                    <h2 className="text-lg font-semibold text-zinc-900">Problem</h2>
                    <p className="mt-2 text-zinc-600">
                        Sepet akışı karmaşık olursa kullanıcı satın alma sürecini terk eder.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-zinc-900">Çözüm</h2>
                    <p className="mt-2 text-zinc-600">
                        Net CTA’lar, hızlı listeleme, iyi durum yönetimi ve API entegrasyonu ile akış sadeleştirilir.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-zinc-900">Sonuç</h2>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-zinc-600">
                        <li>Akıcı ürün gezintisi</li>
                        <li>Sepet güncellemelerinde hızlı geri bildirim</li>
                        <li>Yönetilebilir altyapı</li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
