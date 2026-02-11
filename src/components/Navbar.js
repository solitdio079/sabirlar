import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "gatsby";
import logo from "../images/logo.png"
export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={[
          "navbar transition-all duration-500 rounded-none mx-auto shadow-base-300/20 shadow-sm",
          isSticky
            ? "fixed top-0 left-0 right-0 z-999 my-0 w-full"
            : "absolute top-1 lg:top-5 left-0 right-0 z-99 my-6 w-[90%]",
        ].join(" ")}
      >
        <div className="w-full md:flex md:items-center md:gap-2">
          <div className="flex items-center justify-between">
            <div className="navbar-start items-center justify-between max-md:w-full">
              <Link
                className="link text-base-content link-neutral text-xl font-bold no-underline"
                to="/"
              >
                <img src={logo} className="w-20 lg:w-60" />
              </Link>
              <div className="md:hidden">
                <button
                  type="button"
                  className="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square"
                  data-collapse="#navbar-collapse"
                  aria-controls="navbar-collapse"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
                  <span className="icon-[tabler--x] collapse-open:block hidden size-4"></span>
                </button>
              </div>
            </div>
          </div>
          <div
            id="navbar-collapse"
            className="md:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full"
          >
            <ul className="menu md:menu-horizontal gap-2 p-0 text-base max-md:mt-2">
              <li>
                <Link to="/">Ana Sayfa</Link>
              </li>
              <li>
                <Link to="/about">Hakkımızda</Link>
              </li>
              <li>
                <Link to="/service">Servislerimiz</Link>
              </li>
              <li>
                <Link to="/contact">İletişim</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
