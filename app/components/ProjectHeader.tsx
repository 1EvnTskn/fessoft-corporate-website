import Image from 'next/image';

type Props = {
    title: string;
    subtitle: string;
    tags: readonly string[];
    backHref?: string;
    repoHref?: string;
    demoHref?: string;
    imageSrc?: string;
    imageAlt?: string;
};

export default function ProjectHeader({
    title,
    subtitle,
    tags,
    backHref = "/#projeler",
    repoHref,
    demoHref,
    imageSrc,
    imageAlt = "Proje görseli",
}: Props) {
    return (
        <header className="space-y-6">
            <a href={backHref} className="inline-flex text-sm font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900">
                ← Geri dön
            </a>

            <div>
                <h1 className="text-3xl font-bold tracking-tight text-zinc-900">{title}</h1>
                <p className="mt-3 text-zinc-600">{subtitle}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((t) => (
                        <span key={t} className="rounded-full bg-zinc-100 px-3 py-1 text-xs">{t}</span>
                    ))}
                </div>
            </div>

            <div className="flex flex-wrap gap-3">
                {demoHref ? (
                    <a href={demoHref} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800">Canlı Demo</a>
                ) : (
                    <span className="rounded-xl bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-500">Demo yakında</span>
                )}
                {repoHref ? (
                    <a href={repoHref} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50">GitHub Repo</a>
                ) : (
                    <span className="rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-500">Repo yakında</span>
                )}
            </div>

            {/* Görsel Alanı */}
            {imageSrc ? (
                <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={1200}
                        height={630}
                        className="h-auto w-full object-cover"
                        priority
                    />
                </div>
            ) : (
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-10 text-center text-sm text-zinc-500">
                    Proje görseli hazırlanıyor...
                </div>
            )}
        </header>
    );
}