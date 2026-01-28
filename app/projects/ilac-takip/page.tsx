import ProjectHeader from "@/app/components/ProjectHeader";

export default function IlacTakipPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">
            <ProjectHeader
                title="İlaç Takip Uygulaması"
                subtitle="Hatırlatma akışı ve takip ekranlarıyla kullanıcıların düzenli kullanımını destekleyen bir web uygulaması."
                tags={["Next.js", "TypeScript", "Tailwind"]}
                imageSrc="/projects/ilac-takip.png"
                imageAlt="İlaç Takip Uygulaması ekran görüntüsü"
                repoHref="https://github.com/1EvnTskn/portfolio"
                demoHref="https://portfolio-omega-one-60.vercel.app"
            />

            <section className="mt-12 space-y-10">
                <div>
                    <h2 className="text-lg font-semibold text-zinc-900">Problem</h2>
                    <p className="mt-2 text-zinc-600">
                        İlaç kullanımının unutulması ve takip sürecinin dağınık olması kullanıcıyı zorlar.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-zinc-900">Çözüm</h2>
                    <p className="mt-2 text-zinc-600">
                        Basit arayüz, net akış ve genişletilebilir yapı ile ilaç takibi kolaylaştırılır.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-zinc-900">Sonuç</h2>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-zinc-600">
                        <li>Takip ekranları ile düzenli kullanım alışkanlığı</li>
                        <li>Performanslı ve sade arayüz</li>
                        <li>Geliştirilebilir mimari</li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
