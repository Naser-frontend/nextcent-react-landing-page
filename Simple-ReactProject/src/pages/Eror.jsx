import { Link } from "react-router-dom";

function Eror() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center bg-gray-100 py-16 sm:py-20">
      <section className="mx-auto w-full max-w-7xl px-6 text-center sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl">
          <p className="text-8xl font-bold leading-none text-green-600 sm:text-9xl">404</p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-green-600">Page not found</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-800 sm:text-5xl">This page seems to have wandered off.</h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">The link may be incorrect, or the page may have moved. Let&apos;s get you back to your community.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/" className="inline-flex items-center rounded-md bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700">Back to home <span aria-hidden="true" className="ml-2">→</span></Link>
            <Link to="/Features" className="inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:border-green-600 hover:text-green-700">Explore features</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Eror;
