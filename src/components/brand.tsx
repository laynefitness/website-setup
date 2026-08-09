import Link from "next/link";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Layne Fitness home">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 44 44" role="img">
          <path d="M8 15v14M36 15v14M3 18v8M41 18v8M8 22h28" />
          <path d="M17 15l5-6 5 6M17 29l5 6 5-6" />
        </svg>
      </span>
      <span className="brand-wordmark">
        <strong>LAYNE</strong>
        <small>FITNESS</small>
      </span>
    </Link>
  );
}
