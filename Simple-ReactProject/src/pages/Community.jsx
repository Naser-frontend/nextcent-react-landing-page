import { Link } from "react-router-dom";
import membershipIcon from "../assets/images/icons/Icon.svg";
import associationIcon from "../assets/images/icons/Icon (1).svg";
import clubsIcon from "../assets/images/icons/Icon (2).svg";

const communityTypes = [
  {
    icon: membershipIcon,
    title: "Membership organisations",
    description: "Make member information, renewals, and payments easier to manage.",
  },
  {
    icon: associationIcon,
    title: "National associations",
    description: "Keep your people connected and your organisation moving forward.",
  },
  {
    icon: clubsIcon,
    title: "Clubs and groups",
    description: "Spend less time on admin and more time bringing people together.",
  },
];

const benefits = [
  ["Keep everyone connected", "Share updates and make it simple for members to stay involved."],
  ["Make everyday work simpler", "Keep the important details together instead of juggling separate tools."],
  ["Grow at your own pace", "Start with what your community needs and build from there."],
];

function Community() {
  return (
    <div className="text-[#263238]">
      <section className="overflow-hidden bg-gray-100">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 sm:py-20 md:grid-cols-2 lg:px-10 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-600">Community</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-800 sm:text-5xl lg:text-6xl">Better together, <span className="text-green-600">every step of the way.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">Bring your members, clubs, and teams together with tools that make community management feel easier.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/Register" className="inline-flex items-center rounded-md bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700">Join Nextcent <span aria-hidden="true" className="ml-2">→</span></Link>
              <Link to="/Features" className="inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:border-green-600 hover:text-green-700">Explore features</Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg py-5">
            <div className="absolute inset-8 rounded-full bg-green-100" aria-hidden="true" />
            <div className="relative grid grid-cols-2 gap-4 sm:gap-5">
              <div className="col-span-2 rounded-2xl bg-white p-5 shadow-md sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-xl" aria-hidden="true">✦</span>
                  <div><p className="font-semibold">Your community</p><p className="text-sm text-gray-500">A place for everyone to belong</p></div>
                </div>
                <div className="mt-5 flex -space-x-2" aria-label="Community members">
                  {["bg-green-200", "bg-blue-200", "bg-amber-200", "bg-rose-200", "bg-violet-200"].map((color, index) => <span key={color} className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-white ${color} text-xs font-semibold text-gray-700`}>{["A", "M", "S", "J", "+"][index]}</span>)}
                </div>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-md sm:p-6">
                <img className="h-10 w-10 object-contain" src={membershipIcon} alt="" />
                <p className="mt-4 font-semibold">Members</p>
                <p className="mt-1 text-sm text-gray-500">Stay in the loop</p>
              </div>
              <div className="mt-6 rounded-2xl bg-[#263238] p-5 text-white shadow-md sm:p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-xl" aria-hidden="true">✓</span>
                <p className="mt-4 font-semibold">Working as one</p>
                <p className="mt-1 text-sm text-gray-300">Simple tools, shared goals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-600">Who we support</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">A home for every kind of community</h2>
            <p className="mt-4 leading-7 text-gray-600">Whether you bring together members, professionals, or local groups, Nextcent helps you make the most of being together.</p>
          </header>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {communityTypes.map((type) => (
              <article key={type.title} className="rounded-xl border border-gray-100 bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <img className="mx-auto h-14 w-14 object-contain" src={type.icon} alt="" />
                <h3 className="mt-5 text-xl font-semibold text-gray-800">{type.title}</h3>
                <p className="mt-3 leading-7 text-gray-600">{type.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 sm:px-8 md:grid-cols-[0.9fr_1.1fr] md:items-center lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-600">Made for people</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">Great communities start with simple connections.</h2>
            <p className="mt-4 leading-7 text-gray-600">Give your team the space to focus on its people, purpose, and next big idea.</p>
          </div>
          <div className="space-y-4">
            {benefits.map(([title, description], index) => (
              <article key={title} className="flex gap-4 rounded-xl bg-white p-5 shadow-sm sm:p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-50 font-semibold text-green-700">0{index + 1}</span>
                <div><h3 className="font-semibold text-gray-800">{title}</h3><p className="mt-1 text-sm leading-6 text-gray-600">{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-50 py-14 sm:py-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center sm:px-8 sm:flex-row sm:text-left lg:px-10">
          <div><h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">Your community has room to grow.</h2><p className="mt-2 text-gray-600">Take the first step and find the tools that work for you.</p></div>
          <Link to="/Register" className="inline-flex shrink-0 items-center rounded-md bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700">Get started <span aria-hidden="true" className="ml-2">→</span></Link>
        </div>
      </section>
    </div>
  );
}

export default Community;
