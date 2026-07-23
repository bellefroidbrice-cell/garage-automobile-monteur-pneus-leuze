export default function AxonLogo({ className = 'w-6 h-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 256 256"
      fill="#1B133C"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z" />
      <path d="M 256 128 L 128 128 L 0 0 L 128 0 Z" />
    </svg>
  )
}
