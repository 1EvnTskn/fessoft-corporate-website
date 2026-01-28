import ProjectHeader from "@/app/components/ProjectHeader";

export default function FessoftPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">
            <ProjectHeader
                title="Fessoft Kurumsal Web Sitesi"
                subtitle="Yazılım, web geliştirme ve dijital çözümler sunan bir kurumsal kimlik çalışması."
                tags={["Next.js", "TypeScript", "Tailwind CSS"]}
                imageSrc="/projects/fessoft_demo.png"
                imageAlt="Fessoft Kurumsal Web Sitesi ekran görüntüsü"
                // BURAYI GÜNCELLE:
                repoHref="https://github.com/1EvnTskn/fessoft-corporate-website"
                demoHref="https://portfolio-omega-one-60.vercel.app"
            />

            <section className="mt-12 space-y-10">
                <div>
                    <h2 className="text-lg font-semibold text-zinc-900">Problem</h2>
                    <p className="mt-2 text-zinc-600">
                        Modern bir yazılım şirketinin hizmetlerini, projelerini ve vizyonunu profesyonel bir şekilde yansıtacak, kullanıcı dostu bir arayüze ihtiyaç duyulması.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-zinc-900">Çözüm</h2>
                    <p className="mt-2 text-zinc-600">
                        Next.js ve Tailwind CSS kullanılarak geliştirilen, yüksek performanslı, SEO uyumlu ve kurumsal kimliğe uygun "soft" renk paletiyle tasarlanmış bir web sitesi.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-zinc-900">Temel Özellikler</h2>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-zinc-600">
                        <li>Kurumsal hizmet ve çözüm odaklı bölümler</li>
                        <li>Hızlı yüklenen, mobil uyumlu (responsive) tasarım</li>
                        <li>Modern tipografi ve profesyonel içerik yapısı</li>
                        <li>İletişim formu ve hizmet detay sayfaları</li>
                    </ul>
                </div>
            </section>
        </main>
    );
}