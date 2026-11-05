import { useState } from "react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "For small groups getting started with community management.",
    features: ["Up to 50 members", "Member directory", "Basic reporting", "Community support"],
  },
  {
    name: "Growth",
    monthlyPrice: 29,
    yearlyPrice: 24,
    description: "For growing organisations that need more ways to connect.",
    features: ["Up to 500 members", "Payments and bookings", "Custom member fields", "Priority support"],
    popular: true,
  },
  {
    name: "Scale",
    monthlyPrice: 79,
    yearlyPrice: 65,
    description: "For established communities with larger teams and bigger goals.",
    features: ["Unlimited members", "Advanced reporting", "Multiple administrators", "Dedicated support"],
  },
];

const comparisonRows = [
  ["Members", "50", "500", "Unlimited"],
  ["Member directory", "Included", "Included", "Included"],
  ["Payments and bookings", "—", "Included", "Included"],
  ["Advanced reporting", "—", "—", "Included"],
];

function Pricing() {
  const [billing, setBilling] = useState("monthly");

  return (
    <div className="text-[#263238]">
      <section className="bg-gray-100 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 text-center sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-600">Pricing</p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold leading-tight text-gray-800 sm:text-5xl">Choose a plan that grows with your <span className="text-green-600">community.</span></h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">Start free, then choose the tools and support that fit the way your organisation works.</p>

          <div className="mt-8 inline-flex rounded-lg bg-white p-1 shadow-sm" aria-label="Choose billing cycle">
            <button type="button" onClick={() => setBilling("monthly")} className={`rounded-md px-4 py-2 text-sm font-semibold transition ${billing === "monthly" ? "bg-green-600 text-white" : "text-gray-600 hover:text-green-700"}`}>Monthly</button>
            <button type="button" onClick={() => setBilling("yearly")} className={`rounded-md px-4 py-2 text-sm font-semibold transition ${billing === "yearly" ? "bg-green-600 text-white" : "text-gray-600 hover:text-green-700"}`}>Yearly <span className="ml-1 text-xs opacity-80">Save 15%</span></button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid gap-7 lg:grid-cols-3 lg:items-stretch">
            {plans.map((plan) => {
              const price = billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
              return (
                <article key={plan.name} className={`relative flex flex-col rounded-2xl border p-7 sm:p-8 ${plan.popular ? "border-green-600 bg-green-50 shadow-lg" : "border-gray-200 bg-white shadow-sm"}`}>
                  {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-600 px-4 py-1 text-xs font-semibold text-white">Most popular</span>}
                  <h2 className="text-2xl font-bold text-gray-800">{plan.name}</h2>
                  <p className="mt-3 min-h-12 text-sm leading-6 text-gray-600">{plan.description}</p>
                  <div className="mt-7 flex items-end"><span className="text-5xl font-bold text-gray-800">${price}</span><span className="mb-1 ml-2 text-sm text-gray-500">/ month</span></div>
                  {billing === "yearly" && <p className="mt-2 text-sm font-medium text-green-700">Billed yearly</p>}
                  <ul className="mt-8 space-y-4 border-t border-gray-200 pt-7 text-sm text-gray-700">
                    {plan.features.map((feature) => <li key={feature} className="flex gap-3"><svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4L19 6" /></svg>{feature}</li>)}
                  </ul>
                  <Link to="/Register" className={`mt-8 inline-flex justify-center rounded-md px-5 py-3 font-semibold transition ${plan.popular ? "bg-green-600 text-white hover:bg-green-700" : "border border-green-600 text-green-700 hover:bg-green-50"}`}>{plan.monthlyPrice === 0 ? "Start for free" : "Choose plan"}</Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-4xl px-6 sm:px-8 lg:px-10">
          <header className="text-center"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-600">Compare plans</p><h2 className="mt-3 text-3xl font-bold text-gray-800 sm:text-4xl">Find the right fit</h2></header>
          <div className="mt-10 overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="min-w-[560px]">
              <div className="grid grid-cols-4 border-b border-gray-200 bg-gray-50 px-4 py-4 text-sm font-semibold text-gray-700 sm:px-6"><span>Feature</span><span className="text-center">Starter</span><span className="text-center">Growth</span><span className="text-center">Scale</span></div>
              {comparisonRows.map((row) => <div key={row[0]} className="grid grid-cols-4 border-b border-gray-100 px-4 py-4 text-sm text-gray-600 last:border-0 sm:px-6"><span className="font-medium text-gray-700">{row[0]}</span>{row.slice(1).map((cell, index) => <span key={index} className="text-center">{cell}</span>)}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 py-14 sm:py-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center sm:px-8 sm:flex-row sm:text-left lg:px-10">
          <div><h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">Not sure which plan to choose?</h2><p className="mt-2 text-gray-600">Start with Starter and move up whenever your community needs more.</p></div>
          <Link to="/Register" className="inline-flex shrink-0 items-center rounded-md bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700">Create your account <span aria-hidden="true" className="ml-2">→</span></Link>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
