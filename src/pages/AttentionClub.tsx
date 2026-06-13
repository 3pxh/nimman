const gatheringFormat = [
  'Five minutes of mindful silence',
  'A quick and silly game to learn everyone’s names',
  'We take turns sharing with the group and receiving reflections from each other',
  'Votes on the format for next week’s Attention Club',
]

function AttentionClub() {
  return (
    <main className="min-h-dvh bg-[#0f0e0c] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,#2a2418_0%,transparent_70%)] p-8">
      <div className="mx-auto max-w-2xl">
        <p className="mb-6 text-xs font-medium tracking-[0.25em] text-[#c4a96a] uppercase">
          Nimman Circle
        </p>

        <h1 className="mb-6 text-4xl font-light tracking-tight text-[#f5f3ef] sm:text-5xl">
          Attention Club: Show and Tell
        </h1>

        <img
          src="/examining%20antiques.jpg"
          alt="People examining antiques at Attention Club"
          className="mb-10 w-full rounded-lg object-cover"
        />

        <p className="mb-10 text-[1.0625rem] leading-relaxed text-[#9a958c]">
          It seems like there’s a shortage of attention out there! Let’s cultivate ours as we
          connect over items of personal interest in a lighthearted and fun format. Bring a couple
          things to share. They could be objects, stories, music videos, etc.
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
            Every Thursday, 3pm–5pm
          </p>
          <p className="text-[1.0625rem] leading-relaxed text-[#9a958c]">
            Happy Allergy Bakery
            <br />
            17/1 Sirimungklajarn Rd Lane 7, Suthep, Muang, Chiang Mai 50200
          </p>
        </section>
        
        <section>
          <h2 className="mb-4 text-sm font-medium tracking-[0.2em] text-[#c4a96a] uppercase">
            Register
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.meetup.com/nimman-circle/events/315240921/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-[#c4a96a]/40 px-5 py-2.5 text-sm font-medium text-[#f5f3ef] transition-colors hover:border-[#c4a96a] hover:bg-[#c4a96a]/10"
            >
              Meetup
            </a>
            <a
              href="https://luma.com/kwrsmd5d"
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

export default AttentionClub
