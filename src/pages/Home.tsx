import { Link } from 'react-router-dom'

const currentEvents = [
  {
    title: 'Bring-a-Book Reading Club',
    schedule: 'Sundays and Thursdays at 10am',
    to: '/reading-club',
  },
]

const linkClassName =
  'inline-flex items-center rounded-full border border-[#c4a96a]/40 px-5 py-2.5 text-sm font-medium text-[#f5f3ef] transition-colors hover:border-[#c4a96a] hover:bg-[#c4a96a]/10'

function Home() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-[#0f0e0c] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,#2a2418_0%,transparent_70%)] p-8">
      <div className="mx-auto max-w-lg text-center">
        <p className="mb-6 text-xs font-medium tracking-[0.25em] text-[#c4a96a] uppercase">
          Nimman Circle
        </p>
        <h1 className="mb-10 text-5xl font-light tracking-tight text-[#f5f3ef] sm:text-6xl">
          Nimman Circle
        </h1>

        <section className="mb-10 text-left">
          <h2 className="mb-4 text-center text-sm font-medium tracking-[0.2em] text-[#c4a96a] uppercase">
            Current Events
          </h2>
          <ul className="space-y-4">
            {currentEvents.map((event) => (
              <li key={event.to}>
                <Link
                  to={event.to}
                  className="block rounded-lg border border-[#c4a96a]/20 p-4 transition-colors hover:border-[#c4a96a]/50 hover:bg-[#c4a96a]/5"
                >
                  <p className="font-medium text-[#f5f3ef]">{event.title}</p>
                  <p className="mt-1 text-sm text-[#9a958c]">{event.schedule}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-sm font-medium tracking-[0.2em] text-[#c4a96a] uppercase">
            Calendars
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.meetup.com/nimman-circle/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
            >
              Meetup
            </a>
            <a
              href="https://calendar.google.com/calendar/u/6?cid=MGI1OWRlYmUzY2Q3MTEyNjQ1MjZlYTZkNmQ0YjQwYjMwNzAwYTVmNjIxYTZjYzNmYjNmMTI1YjJlODhmMzY5NUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
            >
              Google Calendar
            </a>
          </div>
        </section>

        <section>
          <img
            src="/qr.png"
            alt="QR code for nimman.org"
            className="mx-auto w-40 rounded-lg"
          />
          <p className="mt-3 text-sm text-[#9a958c]">nimman.org</p>
        </section>
      </div>
    </main>
  )
}

export default Home
