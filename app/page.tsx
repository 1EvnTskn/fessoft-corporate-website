const services = [
    {
        title: "Kurumsal Web Sitesi",
        desc: "Hızlı, modern ve güven veren kurumsal siteler. Mobil uyum + SEO odaklı.",
    },
    {
        title: "Admin Panel / Dashboard",
        desc: "KPI kartları, tablolar ve yetkilendirme ile yönetim ekranları.",
    },
    {
        title: "Özel Yazılım / Otomasyon",
        desc: "İş süreçlerini hızlandıran özel çözümler. İhtiyaca göre planlı geliştirme.",
    },
] as const;

const processSteps = [
    { title: "Keşif", desc: "İhtiyacı netleştirir, hedef ve kapsamı belirleriz." },
    { title: "Tasarım", desc: "Sade ve kullanıcı odaklı arayüz taslaklarını çıkarırız." },
    { title: "Geliştirme & Teslim", desc: "Uygular, test eder ve yayına alırız." },
] as const;


const projects = [
    {
        type: "Dashboard",
        title: "Admin Panel Tasarımı",
        desc: "KPI kartları, filtreleme ve audit mantığıyla yönetim ekranı iskeleti.",
        tags: ["Dashboard", "Tables", "Auth"],
        href: "/projects/admin-panel",
        status: "live",
    },
    {
        type: "Web Uygulaması",
        title: "İlaç Takip Uygulaması",
        desc: "Yakında yeniden oluşturulacak. Şu an planlama aşamasında.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        href: "/projects/ilac-takip",
        status: "soon",
    },
    {
        type: "E-Ticaret",
        title: "Ürün & Sepet Modülü",
        desc: "Yakında yeniden geliştirilecek. Şu an taslak oluşturuluyor.",
        tags: ["UI/UX", "API", "Performans"],
        href: "/projects/urun-sepet",
        status: "soon",
    },
    {
        type: "Kurumsal", // Proje türünü ekledik
        title: "Fessoft Kurumsal Web Sitesi",
        desc: "Yazılım ve teknoloji odaklı, modern arayüze sahip kurumsal kimlik sitesi.", // 'description' yerine 'desc' yaptık
        tags: ["Next.js", "TypeScript", "Tailwind"],
        href: "/projects/fessoft",
        status: "live", // Küçük harf 'live' yaptık
    },
] as const;


const contact = {
    email: "taskinevin30@gmail.com",
    github: "https://github.com/1EvnTskn",
    linkedin: "https://www.linkedin.com/in/evin-ta%C5%9Fk%C4%B1n-7281b3247/",
} as const;

export default function Home() {
    return (
        <main className="min-h-screen bg-white text-zinc-900">
            <div className="mx-auto max-w-5xl px-6 py-16">
                {/* Üst küçük etiket */}
                <p className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm">
                    Kişisel Portföy • Freelance • Blog
                </p>

                {/* Ana başlık */}
                <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
                    Web siteleri ve özel yazılımlar geliştiriyorum.
                </h1>

                {/* Açıklama */}
                <p className="mt-5 max-w-2xl text-lg text-zinc-600">
                    Hızlı, sade ve kullanıcı odaklı arayüzler. Temiz kod, iyi performans ve
                    ölçülebilir sonuçlar.
                </p>
                {/* Mini Hakkımda */}
                <div id="hakkimda" className="mt-7 max-w-2xl border-l-2 border-zinc-200 pl-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                        Hakkımda
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                        Performans odaklı, sade ve sürdürülebilir web çözümleri geliştiriyorum. Gerçek
                        ihtiyaçlara odaklanan, temiz kod ve kullanıcı deneyimini merkeze alan projeler
                        üretmeyi öncelik görüyorum.
                    </p>
                </div>




                {/* Butonlar */}
                <div className="mt-8 flex flex-wrap gap-3">
                    <a
                        href="#projeler"
                        className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800"
                    >
                        Projeleri Gör
                    </a>

                    <a
                        href="#iletisim"
                        className="rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
                    >
                        İletişime Geç
                    </a>
                </div>

                {/* Mini istatistikler */}
                <div className="mt-12 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-zinc-200 p-5">
                        <p className="text-sm text-zinc-500">Odak</p>
                        <p className="mt-1 font-semibold">UI/UX + Performans</p>
                    </div>

                    <div className="rounded-2xl border border-zinc-200 p-5">
                        <p className="text-sm text-zinc-500">Teknolojiler</p>
                        <p className="mt-1 font-semibold">Next.js • Tailwind • TypeScript</p>
                    </div>

                    <div className="rounded-2xl border border-zinc-200 p-5">
                        <p className="text-sm text-zinc-500">Hedef</p>
                        <p className="mt-1 font-semibold">Freelance + İş Başvurusu</p>
                    </div>
                </div>
                {/* Hizmetler */}
                <section id="hizmetler" className="mt-20">
                    <div className="flex items-end justify-between gap-4">
                        <div>
                            <h2 className="text-2xl font-bold">Hizmetler</h2>
                            <p className="mt-2 text-zinc-600">
                                İhtiyacına göre net, hızlı ve sürdürülebilir çözümler.
                            </p>
                        </div>

                        <a
                            href="#iletisim"
                            className="text-sm font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
                        >
                            Teklif Al →
                        </a>
                    </div>

                    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((s) => (
                            <article key={s.title} className="rounded-2xl border border-zinc-200 bg-white p-6 hover:shadow-sm">
                                <p className="text-sm font-semibold text-zinc-900">{s.title}</p>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{s.desc}</p>

                                <a
                                    href="#iletisim"
                                    className="mt-5 inline-flex text-sm font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
                                >
                                    Teklif Al →
                                </a>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Süreç */}
                <section id="surec" className="mt-20">
                    <h2 className="text-2xl font-bold">Süreç</h2>
                    <p className="mt-2 max-w-2xl text-zinc-600">
                        Kısa ve net bir akış: keşif → tasarım → geliştirme & teslim.
                    </p>

                    <div className="mt-8 grid gap-5 sm:grid-cols-3">
                        {processSteps.map((step, i) => (
                            <div key={step.title} className="rounded-2xl border border-zinc-200 bg-white p-6">
                                <p className="text-xs font-semibold text-zinc-500">Adım {i + 1}</p>
                                <p className="mt-2 text-lg font-bold text-zinc-900">{step.title}</p>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>


                {/* Projeler */}
                <section id="projeler" className="mt-20">
                    <div className="flex items-end justify-between gap-4">
                        <div>
                            <h2 className="text-2xl font-bold">Projeler</h2>
                            <p className="mt-2 text-zinc-600">
                                Seçilmiş işlerimden bazıları. Her proje: problem → çözüm → sonuç.
                            </p>
                        </div>

                        {/* Not: Aynı yere link vermek yerine ileriye dönük /projects sayfası */}
                        <a
                            href="/projects"
                            className="text-sm font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
                        >
                            Tüm projeler
                        </a>
                    </div>

                    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((p) => (
                            <article
                                key={p.title}
                                className="rounded-2xl border border-zinc-200 bg-white p-5 hover:shadow-sm"
                            >
                                <div className="flex items-center justify-between gap-3">
                                    <p className="text-xs text-zinc-500">{p.type}</p>

                                    {p.status === "live" ? (
                                        <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
                                            Live
                                        </span>
                                    ) : (
                                        <span className="rounded-full bg-zinc-100 px-2 py-1 text-xs font-semibold text-zinc-600">
                                            Yakında ✨
                                        </span>
                                    )}
                                </div>

                                <h3 className="mt-2 text-lg font-bold">{p.title}</h3>
                                <p className="mt-2 text-sm text-zinc-600">{p.desc}</p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {p.tags.map((t) => (
                                        <span key={t} className="rounded-full bg-zinc-100 px-3 py-1 text-xs">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {p.status === "live" ? (
                                    <a
                                        href={p.href}
                                        className="mt-5 inline-flex text-sm font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
                                    >
                                        Detayı gör →
                                    </a>
                                ) : (
                                    <span className="mt-5 inline-flex text-sm font-semibold text-zinc-500">
                                        Detay sayfası hazırlanıyor
                                    </span>
                                )}
                            </article>
                        ))}
                    </div>
                </section>
                {/* CTA */}
                <section className="mt-20">
                    <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8">
                        <h2 className="text-2xl font-bold">Bir fikrin mi var?</h2>
                        <p className="mt-2 max-w-2xl text-zinc-600">
                            Kısaca anlatman yeter. Genellikle <span className="font-semibold text-zinc-900">24 saat içinde</span> dönüş yapıyorum.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href={`mailto:${contact.email}`}
                                className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800"
                            >
                                E-posta Gönder
                            </a>
                            <a
                                href="#projeler"
                                className="rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-100"
                            >
                                Projelere Dön
                            </a>
                        </div>
                    </div>
                </section>


                {/* İletişim */}
                <section id="iletisim" className="mt-20">
                    <h2 className="text-2xl font-bold">İletişim</h2>
                    <p className="mt-2 text-zinc-600">
                        Bir proje fikrin mi var, yoksa sadece selam mı vermek istiyorsun?
                    </p>

                    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        <a
                            href={`mailto:${contact.email}`}
                            className="rounded-2xl border border-zinc-200 bg-white p-6 hover:shadow-sm"
                        >
                            <p className="text-sm text-zinc-500">E-posta</p>
                            <p className="mt-2 text-lg font-semibold">{contact.email}</p>
                            <p className="mt-2 text-sm text-zinc-600">Proje detaylarını paylaşmak için</p>
                        </a>

                        <a
                            href={contact.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-2xl border border-zinc-200 bg-white p-6 hover:shadow-sm"
                        >
                            <p className="text-sm text-zinc-500">GitHub</p>
                            <p className="mt-2 text-lg font-semibold">github.com/1EvnTskn</p>
                            <p className="mt-2 text-sm text-zinc-600">Kodlarım ve açık kaynak çalışmalarım</p>
                        </a>

                        <a
                            href={contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-2xl border border-zinc-200 bg-white p-6 hover:shadow-sm"
                        >
                            <p className="text-sm text-zinc-500">LinkedIn</p>
                            <p className="mt-2 text-lg font-semibold">linkedin.com/in/evin-taşkın</p>
                            <p className="mt-2 text-sm text-zinc-600">Profesyonel geçmiş ve iletişim</p>
                        </a>
                    </div>
                </section>
            </div>
        </main>
    );
}
