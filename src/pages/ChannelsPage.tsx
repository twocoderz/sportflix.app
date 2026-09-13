import Header from "../components/Header";
import Footer from "../components/Footer";
import { channels } from "../data/channels";

export default function ChannelsPage() {
  return (
    <div className="min-h-screen bg-(--bg) font-sans text-(--text) antialiased">
      <Header />
      <main className="mx-auto max-w-6xl px-6 pb-24 pt-36">
        <header className="max-w-2xl">
          <h1 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight text-(--text) sm:text-6xl">
            Toutes les chaînes
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-(--text-muted)">
            Retrouvez vos chaînes préférées et explorez une sélection pensée
            pour les amateurs d&apos;animation et de télévision en direct.
          </p>
        </header>

        <section className="mt-14" aria-labelledby="channels-heading">
          <div className="mb-6 flex items-baseline justify-between gap-4">
            <h2 id="channels-heading" className="text-xl font-medium">
              Chaînes disponibles
            </h2>
            <span className="text-sm text-(--text-muted)">
              {channels.length} chaînes
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {channels.map((channel) => (
              <article
                key={channel.id}
                className="group flex min-h-52 flex-col items-center justify-between gap-6 rounded-2xl border border-(--border) bg-(--surface) p-6 transition-colors hover:border-(--color-accent) focus-within:border-(--color-accent)"
              >
                <div className="flex min-h-32 w-full items-center justify-center">
                  <img
                    src={channel.logo}
                    alt={`Logo de ${channel.name}`}
                    className="max-h-28 w-full object-contain transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-center text-base font-medium text-(--text)">
                  {channel.name}
                </h3>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
