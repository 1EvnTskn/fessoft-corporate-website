import ProjectHeader from "@/app/components/ProjectHeader";

export default function AdminPanelPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">
            <ProjectHeader
                title="Admin Panel Tasarımı"
                subtitle="KPI kartları, filtrelenebilir tablolar ve rol bazlı erişim ile yönetim ekranı iskeleti."
                tags={["Dashboard", "Tables", "Auth"]}
                repoHref={undefined}
                demoHref={undefined}
            />

            <section className="mt-12 space-y-10">
                <div>
                    <h2 className="text-lg font-semibold text-zinc-900">Problem</h2>
                    <p className="mt-2 text-zinc-600">
                        Yönetim panellerinde bilgi kalabalığı, karar almayı ve yönetimi zorlaştırır.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-zinc-900">Çözüm</h2>
                    <p className="mt-2 text-zinc-600">
                        KPI özetleri, filtreleme ve tablolama ile önemli veriler öne çıkarılır. Yetkilendirme ile güvenlik sağlanır.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-zinc-900">Sonuç</h2>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-zinc-600">
                        <li>Daha okunabilir yönetim ekranları</li>
                        <li>Hızlı filtreleme ve arama yapısı</li>
                        <li>Güvenli erişim altyapısı</li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
