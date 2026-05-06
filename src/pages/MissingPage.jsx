import { Link } from 'react-router-dom'

function MissingPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-14 md:px-10">
      <div className="rounded-2xl border border-red-500/30 bg-red-950/30 p-8">
        <h1 className="text-3xl font-black uppercase text-red-300">404</h1>
        <p className="mt-3 text-red-100">
          This example page is shown when a route does not exist.
        </p>
        <Link
          className="mt-5 inline-block rounded-full bg-amber-400 px-5 py-2 font-semibold text-black hover:bg-amber-300"
          to="/"
        >
          Back to landing
        </Link>
      </div>
    </section>
  )
}

export default MissingPage
