import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/icons/Logo (7).svg";

const navigationLinks = [
  ["Home", "/"],
  ["Features", "/Features"],
  ["Community", "/Community"],
  ["Blog", "/Blog"],
  ["Pricing", "/Pricing"],
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300 ${hasScrolled ? "border-gray-200/40 bg-white/60 shadow-md" : "border-transparent bg-white/35"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-8 lg:px-10">
        <Link to="/" aria-label="Home" className="shrink-0" onClick={closeMenu}>
          <img src={logo} alt="Nexcent" className="h-6 w-auto sm:h-7" />
        </Link>

        <div className="hidden items-center gap-1 sm:flex sm:gap-2">
          {navigationLinks.map(([label, path]) => <Link key={path} className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-green-50 hover:text-green-700 sm:px-4" to={path}>{label}</Link>)}
          <Link className="ml-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600" to="/Register">Register</Link>
        </div>

        <button type="button" aria-label="Toggle navigation menu" aria-expanded={isOpen} onClick={() => setIsOpen((current) => !current)} className="rounded-md p-2 text-gray-700 transition hover:bg-green-50 hover:text-green-700 sm:hidden">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {isOpen ? <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-gray-200/40 bg-white/75 px-6 py-4 shadow-lg backdrop-blur-md sm:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigationLinks.map(([label, path]) => <Link key={path} onClick={closeMenu} className="rounded-md px-4 py-3 font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-700" to={path}>{label}</Link>)}
            <Link onClick={closeMenu} className="mt-2 rounded-md bg-green-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-green-700" to="/Register">Register</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
