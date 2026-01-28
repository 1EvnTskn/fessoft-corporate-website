import { Github, Linkedin } from "lucide-react";

export default function Navbar() {
    const links = {
        github: "https://github.com/1EvnTskn",
        linkedin: "https://www.linkedin.com/in/evin-ta%C5%9Fk%C4%B1n-7281b3247/",
        cv: "/cv.pdf",
    } as const;

    return (
        <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                {/* Logo / İsim */}
                <a href="#" className="text-lg font-bold tracking-tight text-zinc-900">
                    Evin
                </a>

                {/* Menü */}
                <nav className="flex items-center gap-2">
                    <a
                        href="#projeler"
                        className="hidden rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 sm:inline-flex"
                    >
                        Projeler
                    </a>
                    <a
                        href="#iletisim"
                        className="hidden rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 sm:inline-flex"
                    >
                        İletişim
                    </a>

                    <a
                        href="#hakkımda"
                        className="hidden rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 sm:inline-flex"
                    >
                        Hakkımda
                    </a>

                    {/* Sosyal ikonlar */}
                    <a
                        href={links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                    >
                        <Github className="h-5 w-5" />
                    </a>

                    <a
                        href={links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                    >
                        <Linkedin className="h-5 w-5" />
                    </a>

                    {/* CV */}
                    <a
                        href={links.cv}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-1 inline-flex items-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
                    >
                        CV
                    </a>
                </nav>
            </div>
        </header>
    );
}
