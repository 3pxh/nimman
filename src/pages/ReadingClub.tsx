import { Link } from 'react-router-dom'

const gatheringFormat = [
  'Short introductions, what you’re reading today',
  'Read for an hour, stretch whenever you like',
  'Share a little bit about what you read',
  'After closing, socialize as you like',
]

function ReadingClub() {
  return (
    <main className="min-h-dvh bg-[#0f0e0c] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,#2a2418_0%,transparent_70%)] p-8">
      <div className="mx-auto max-w-2xl">
        <Link
          to="/"
          className="mb-8 inline-block text-sm text-[#9a958c] transition-colors hover:text-[#f5f3ef]"
        >
          ← Home
        </Link>

        <p className="mb-6 text-xs font-medium tracking-[0.25em] text-[#c4a96a] uppercase">
          Nimman Circle
        </p>

        <h1 className="mb-6 text-4xl font-light tracking-tight text-[#f5f3ef] sm:text-5xl">
          Bring-a-Book Reading Club
        </h1>

        <img
          src="/reading%20group%20zuzalu.png"
          alt="Reading club at Zuzalu Library"
          className="mb-10 w-full rounded-lg object-cover"
        />

        <p className="mb-10 text-[1.0625rem] leading-relaxed text-[#9a958c]">
          This is for anyone who’d like to spend more slow time reading without distractions. Bring a
          book or e-reader and let’s enjoy some quiet reading time together. We ask that participants
          leave other devices quiet and out of sight.
        </p>

        <section className="mb-10">
          <h2 className="mb-4 text-sm font-medium tracking-[0.2em] text-[#c4a96a] uppercase">
            Gathering Format
          </h2>
          <ul className="space-y-3 text-[1.0625rem] leading-relaxed text-[#9a958c]">
            {gatheringFormat.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c4a96a]" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-sm font-medium tracking-[0.2em] text-[#c4a96a] uppercase">
            When & Where
          </h2>
          <p className="mb-3 text-[1.0625rem] leading-relaxed text-[#f5f3ef]">
            Sunday, June 21 at 10am
          </p>
          <p className="text-[1.0625rem] leading-relaxed text-[#9a958c]">
            Zuzalu Library
            <br />
            Building F, 2, 20 Nimmana Haeminda Rd Lane 15
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium tracking-[0.2em] text-[#c4a96a] uppercase">
            Register
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://app.sola.day/event/detail/19549"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-[#c4a96a]/40 px-5 py-2.5 text-sm font-medium text-[#f5f3ef] transition-colors hover:border-[#c4a96a] hover:bg-[#c4a96a]/10"
            >
              Sola.day
            </a>
            <a
              href="https://www.meetup.com/nimman-circle/events/315251476/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-[#c4a96a]/40 px-5 py-2.5 text-sm font-medium text-[#f5f3ef] transition-colors hover:border-[#c4a96a] hover:bg-[#c4a96a]/10"
            >
              Meetup
            </a>
            <a
              href="https://luma.com/4u9wiysu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-[#c4a96a]/40 px-5 py-2.5 text-sm font-medium text-[#f5f3ef] transition-colors hover:border-[#c4a96a] hover:bg-[#c4a96a]/10"
            >
              Luma
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}

export default ReadingClub
