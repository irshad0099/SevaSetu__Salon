import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section bg-brand text-white">
      <div className="container-x text-center">
        <p className="font-display text-8xl font-extrabold text-sun sm:text-9xl">404</p>
        <h1 className="mt-4 text-3xl font-extrabold">This page isn't in the queue</h1>
        <p className="mt-3 text-white/70">Looks like this token got skipped. Let's head back home.</p>
        <Link href="/" className="btn-sun mt-8">Go to Home</Link>
      </div>
    </section>
  );
}
