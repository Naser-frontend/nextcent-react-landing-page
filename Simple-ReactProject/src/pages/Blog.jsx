import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import articleImage1 from "../assets/images/image 18.jpg";
import articleImage2 from "../assets/images/image 19.jpg";
import articleImage3 from "../assets/images/image 20.jpg";

const articles = [
  {
    image: articleImage1,
    imageAlt: "A person working on a laptop at home",
    category: "Membership",
    title: "Creating streamlined safeguarding processes with OneRen",
    summary: "How a clear process can help organisations look after their members and build trust.",
  },
  {
    image: articleImage2,
    imageAlt: "A laptop, coffee, and notes on a desk",
    category: "Community",
    title: "What are your safeguarding responsibilities?",
    summary: "Practical ways to make responsibilities easier to understand and manage in your community.",
  },
  {
    image: articleImage3,
    imageAlt: "A person using a laptop at a desk",
    category: "Growth",
    title: "Revamping the membership model with Triathlon Australia",
    summary: "A look at how organisations can rethink membership to better serve their people.",
  },
];

const categories = ["All articles", "Membership", "Community", "Growth"];

function Blog() {
  const [activeCategory, setActiveCategory] = useState("All articles");
  const [query, setQuery] = useState("");

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesCategory = activeCategory === "All articles" || article.category === activeCategory;
      const matchesQuery = !normalizedQuery || `${article.title} ${article.summary} ${article.category}`.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <div className="text-[#263238]">
      <section className="bg-gray-100 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 sm:px-8 md:grid-cols-[1fr_0.8fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-600">Nextcent journal</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-gray-800 sm:text-5xl lg:text-6xl">Ideas to help your community <span className="text-green-600">grow together.</span></h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">Stories, practical guides, and fresh perspectives for the people who bring communities to life.</p>
            <a href="#latest-articles" className="mt-7 inline-flex items-center rounded-md bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700">Explore articles <span aria-hidden="true" className="ml-2">↓</span></a>
          </div>
          <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <img className="h-56 w-full object-cover sm:h-64" src={articleImage1} alt="A person working on a laptop at home" />
            <div className="p-6 sm:p-7">
              <p className="text-sm font-semibold text-green-600">Featured · Membership</p>
              <h2 className="mt-3 text-xl font-bold leading-snug text-gray-800 sm:text-2xl">Creating streamlined safeguarding processes with OneRen</h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">Explore how thoughtful processes can support members and strengthen an organisation.</p>
            </div>
          </article>
        </div>
      </section>

      <section id="latest-articles" className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-600">The latest</p>
              <h2 className="mt-2 text-3xl font-bold text-gray-800 sm:text-4xl">Stories for your community</h2>
            </div>
            <label className="relative block w-full md:max-w-xs">
              <span className="sr-only">Search articles</span>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></svg>
              <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Search articles" className="w-full rounded-lg border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100" />
            </label>
          </div>

          <div className="mt-7 flex flex-wrap gap-2" aria-label="Filter articles by category">
            {categories.map((category) => <button key={category} type="button" aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)} className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeCategory === category ? "bg-green-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700"}`}>{category}</button>)}
          </div>

          {filteredArticles.length ? (
            <div className="mt-9 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <article key={article.title} className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <img className="h-52 w-full object-cover" src={article.image} alt={article.imageAlt} />
                  <div className="p-6">
                    <p className="text-sm font-semibold text-green-600">{article.category}</p>
                    <h3 className="mt-2 text-xl font-semibold leading-snug text-gray-800">{article.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600">{article.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-10 rounded-xl bg-gray-50 px-6 py-12 text-center text-gray-600">No articles match your search. Try another word or category.</p>
          )}
        </div>
      </section>

      <section className="bg-green-50 py-14 sm:py-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center sm:px-8 sm:flex-row sm:text-left lg:px-10">
          <div><h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">Have a community story to share?</h2><p className="mt-2 text-gray-600">Join Nextcent and help your community thrive.</p></div>
          <Link to="/Register" className="inline-flex shrink-0 items-center rounded-md bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700">Join the community <span aria-hidden="true" className="ml-2">→</span></Link>
        </div>
      </section>
    </div>
  );
}

export default Blog;
