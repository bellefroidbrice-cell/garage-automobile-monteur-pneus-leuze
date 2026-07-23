import AxonLogo from './AxonLogo.jsx'

const NAV_LINKS = ['Features', 'Plans', 'Security', 'About']

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260714_113715_c7e0daa0-8bdd-4486-a2da-040901f8f0ea.mp4'

export default function App() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col">
      <video
        className="absolute inset-0 z-0 w-full h-[130%] object-cover object-top"
        autoPlay
        muted
        loop
        playsInline
        src={VIDEO_URL}
      />

      <nav className="relative z-10 flex justify-center pt-4 md:pt-6 px-4">
        <div className="flex items-center gap-6 md:gap-10 bg-white/70 backdrop-blur-md rounded-xl px-4 md:px-6 py-3 shadow-sm">
          <AxonLogo className="w-6 h-6" />
          <div className="hidden sm:flex items-center gap-6 md:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium text-[#1B133C]/80 hover:text-[#1B133C] transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-start mt-8 md:mt-16 px-4 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-[#1B133C]/10 bg-white/70 backdrop-blur-sm px-4 py-2 text-sm font-medium text-[#1B133C]">
          <span className="flex items-center justify-center bg-orange-500 rounded w-5 h-5 text-white text-xs font-bold">
            Y
          </span>
          Funded by Y Combinator
        </div>

        <h1 className="font-['Instrument_Serif'] text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-[#1B133C] max-w-4xl">
          Deploy digital workers
          <br />
          for mundane workflows
        </h1>

        <p className="mt-5 sm:mt-6 max-w-3xl text-xs sm:text-sm md:text-base leading-relaxed text-[#1B133C]/70">
          Eliminate your tedious browser work and 10x your team&apos;s capacity. Put
          intelligent agents on every routine process so you grow faster and deliver more for
          clients — effortlessly.
        </p>

        <button
          type="button"
          className="mt-7 sm:mt-8 rounded-xl bg-[#FEFEFE] px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-semibold text-[#1B133C] shadow-[0px_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0px_6px_16px_rgba(0,0,0,0.2)] transition-all duration-300"
        >
          Get Early Access
        </button>
      </div>
    </section>
  )
}
