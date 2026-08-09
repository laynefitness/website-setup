import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found wrap">
      <div>
        <h1>404</h1>
        <h2>This route missed the plan.</h2>
        <p>The page does not exist, but your next step is still clear.</p>
        <Link className="button button-primary" href="/">Return Home</Link>
      </div>
    </section>
  );
}
