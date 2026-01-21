const projects = [
    {
        type: "Web Uygulaması",
        title: "İlaç Takip Uygulaması",
        desc:
            "Hatırlatmalar ve takip ekranlarıyla kullanıcıların düzenli kullanımını destekleyen bir sistem.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        href: "#",
    },
    {
        type: "E-Ticaret",
        title: "Ürün & Sepet Modülü",
        desc:
            "Ürün listeleme, sepet akışı ve yönetilebilir içerik yapısıyla hızlı bir temel.",
        tags: ["UI/UX", "API", "Performans"],
        href: "#",
    },
    {
        type: "Dashboard",
        title: "Admin Panel Tasarımı",
        desc: "KPI kartları, filtreleme ve audit mantığıyla yönetim ekranı iskeleti.",
        tags: ["Dashboard", "Tables", "Auth"],
        href: "#",
    },
] as const;

const contact = {
    email: "ornek@mail.com",
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
} as const;

export default function Home() {
    return (
        <main className="min-h-screen bg-white text-zinc-900">
            {/* Sayfa dış boşluk ve ortalama */}
            <div className="mx-auto max-w-5xl px-6 py-16">
                {/* Üst küçük etiket */}
                <p className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm">
                    Kişisel Portföy • Freelance • Blog
                </p>

                {/* Ana başlık */}
                <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
                    Web siteleri ve özel yazılımlar geliştiriyoruz.
                </h1>

                {/* Açıklama */}
                <p className="mt-5 max-w-2xl text-lg text-zinc-600">
                    Hızlı, sade ve kullanıcı odaklı arayüzler. Temiz kod, iyi performans ve
                    ölçülebilir sonuçlar.
                </p>

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
                        <p className="mt-1 font-semibold">Next.js • Tailwind • TS</p>
                    </div>

                    <div className="rounded-2xl border border-zinc-200 p-5">
                        <p className="text-sm text-zinc-500">Hedef</p>
                        <p className="mt-1 font-semibold">Freelance + İş Başvurusu</p>
                    </div>
                </div>

                {/* Bölümler için boşluk: az sonra dolduracağız */}
                <div id="projeler" className="mt-20">
                    <div className="flex items-end justify-between gap-4">
                        <div>
                            <h2 className="text-2xl font-bold">Projeler</h2>
                            <p className="mt-2 text-zinc-600">
                                Seçilmiş işlerimden bazıları. Her proje: problem → çözüm → sonuç.
                            </p>
                        </div>

                        <a
                            href="#"
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
                                <p className="text-xs text-zinc-500">{p.type}</p>
                                <h3 className="mt-2 text-lg font-bold">{p.title}</h3>
                                <p className="mt-2 text-sm text-zinc-600">{p.desc}</p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {p.tags.map((t) => (
                                        <span
                                            key={t}
                                            className="rounded-full bg-zinc-100 px-3 py-1 text-xs"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={p.href}
                                    className="mt-5 inline-flex text-sm font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
                                >
                                    Detayı gör →
                                </a>
                            </article>
                        ))}
                    </div>

                </div>


                <div id="iletisim" className="mt-20">
                    <h2 className="text-2xl font-bold">İletişim</h2>
                    <p className="mt-2 text-zinc-600">
                        Bir proje fikrin mi var, yoksa sadece selam mı vermek istiyorsun?
                    </p>

                    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Mail */}
                        <a
                            href={`mailto:${contact.email}`}
                            className="rounded-2xl border border-zinc-200 bg-white p-6 hover:shadow-sm"
                        >
                            <p className="text-sm text-zinc-500">E-posta</p>
                            <p className="mt-2 text-lg font-semibold">{contact.email}</p>
                            <p className="mt-2 text-sm text-zinc-600">
                                Proje detaylarını paylaşmak için
                            </p>
                        </a>


                        {/* GitHub */}
                        <a
                            href={contact.github}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-2xl border border-zinc-200 bg-white p-6 hover:shadow-sm"
                        >
                            <p className="text-sm text-zinc-500">GitHub</p>
                            <p className="mt-2 text-lg font-semibold">
                                {contact.github.replace("https://", "")}
                            </p>
                            <p className="mt-2 text-sm text-zinc-600">
                                Kodlarım ve açık kaynak çalışmalarım
                            </p>
                        </a>


                        {/* LinkedIn */}
                        <a
                            href={contact.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-2xl border border-zinc-200 bg-white p-6 hover:shadow-sm"
                        >
                            <p className="text-sm text-zinc-500">LinkedIn</p>
                            <p className="mt-2 text-lg font-semibold">
                                {contact.linkedin.replace("https://", "")}
                            </p>
                            <p className="mt-2 text-sm text-zinc-600">
                                Profesyonel geçmiş ve iletişim
                            </p>
                        </a>

                    </div>
                </div>

            </div>
        </main>
    );
}
