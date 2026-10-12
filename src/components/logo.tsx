export function CoreMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 3 44 14.5v19L24 45 4 33.5v-19L24 3Z"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="m24 12 12 7v10l-12 7-12-7V19l12-7Z"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path d="m24 20 4 2.3v4.4L24 29l-4-2.3v-4.4l4-2.3Z" fill="currentColor" />
      <path
        d="M24 3v9M44 33.5l-8-4.5M4 33.5l8-4.5"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  );
}
export function Logo() {
  return (
    <span className="logo">
      <CoreMark />
      <span>
        LIPPEKERN<small>TECHNOLOGIES</small>
      </span>
    </span>
  );
}
