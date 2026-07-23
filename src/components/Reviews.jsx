import { BUSINESS, GOOGLE_REVIEWS } from '../data.js'

const GOOGLE_REVIEWS_HREF = `https://www.google.com/maps?q=${encodeURIComponent(
  `${BUSINESS.name} ${BUSINESS.mapsQuery}`,
)}`

function Star({ fill }) {
  const id = `star-clip-${Math.round(fill * 1000)}`
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8">
      <defs>
        <clipPath id={id}>
          <rect x="0" y="0" width={24 * fill} height="24" />
        </clipPath>
      </defs>
      <path
        d="M12 2.5l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8-6.2 3.8 1.6-7-5.4-4.7 7.1-.6z"
        fill="none"
        stroke="#F97316"
        strokeWidth="1.2"
      />
      <path
        d="M12 2.5l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8-6.2 3.8 1.6-7-5.4-4.7 7.1-.6z"
        fill="#F97316"
        clipPath={`url(#${id})`}
      />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, rating - i))
        return <Star key={i} fill={fill} />
      })}
    </div>
  )
}

export default function Reviews() {
  return (
    <section className="bg-[#0B0B0D] py-16 md:py-24 border-t border-white/10">
      <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
        <h2 className="font-display uppercase text-3xl md:text-4xl tracking-tight text-white">
          Avis clients
        </h2>

        <div className="mt-8 flex flex-col items-center gap-3">
          <span className="font-display text-5xl text-white">
            {GOOGLE_REVIEWS.rating.toLocaleString('fr-BE', { minimumFractionDigits: 1 })}
          </span>
          <StarRating rating={GOOGLE_REVIEWS.rating} />
          <p className="text-sm text-white/60">
            {GOOGLE_REVIEWS.totalReviews} avis Google · dont {GOOGLE_REVIEWS.fiveStarReviews} avis 5
            étoiles
          </p>
        </div>

        <a
          href={GOOGLE_REVIEWS_HREF}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-xl border border-white/20 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors duration-300"
        >
          Voir tous nos avis sur Google
        </a>
      </div>
    </section>
  )
}
