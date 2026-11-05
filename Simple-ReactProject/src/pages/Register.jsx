import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "", organisation: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="flex min-h-[calc(100vh-80px)] items-center bg-gray-100 px-6 py-16 sm:px-8">
        <section className="mx-auto w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-sm sm:p-12">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700" aria-hidden="true">✓</span>
          <h1 className="mt-6 text-3xl font-bold text-gray-800">Your account is ready</h1>
          <p className="mt-3 leading-7 text-gray-600">Welcome to Nextcent, {formData.name || "there"}. You can now start building a stronger community.</p>
          <Link to="/" className="mt-8 inline-flex rounded-md bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700">Go to home <span aria-hidden="true" className="ml-2">→</span></Link>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 sm:px-8 md:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <section className="max-w-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-600">Get started</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-800 sm:text-5xl">Build a community people want to belong to.</h1>
          <p className="mt-5 text-base leading-7 text-gray-600">Create your free Nextcent account and give your members a better way to connect, participate, and grow.</p>
          <ul className="mt-8 space-y-4 text-gray-700">
            {["Set up your community in minutes", "Start free with no credit card", "Get support as your community grows"].map((benefit) => <li key={benefit} className="flex items-center gap-3"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700" aria-hidden="true">✓</span>{benefit}</li>)}
          </ul>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <h2 className="text-2xl font-bold text-gray-800">Create your account</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">It only takes a minute to get started.</p>
          <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="text-sm font-medium text-gray-700">Full name</label>
              <input id="name" name="name" value={formData.name} onChange={handleChange} required autoComplete="name" placeholder="Your full name" className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100" />
            </div>
            <div>
              <label htmlFor="organisation" className="text-sm font-medium text-gray-700">Organisation name</label>
              <input id="organisation" name="organisation" value={formData.organisation} onChange={handleChange} required placeholder="Your organisation" className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Email address</label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required autoComplete="email" placeholder="you@example.com" className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100" />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
              <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} required minLength="8" autoComplete="new-password" placeholder="At least 8 characters" className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100" />
            </div>
            <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-gray-600"><input type="checkbox" required className="mt-1 h-4 w-4 accent-green-600" />I agree to the terms of service and privacy policy.</label>
            <button type="submit" className="w-full rounded-md bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700">Create free account</button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">Already have an account? <a href="#sign-in" className="font-semibold text-green-700 hover:text-green-800">Sign in</a></p>
        </section>
      </div>
    </main>
  );
}

export default Register;
