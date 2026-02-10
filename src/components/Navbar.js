import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "gatsby";
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
      <nav className={`${isSticky ? "my-0 w-full fixed z-99 top-0": "my-6 w-9/10 absolute z-99  left-1/2 -translate-x-1/2 top-5"} navbar transition-all duration-500 rounded-none  mx-auto shadow-base-300/20 shadow-sm`}>
        <div className="w-full md:flex md:items-center md:gap-2">
          <div className="flex items-center justify-between">
            <div className="navbar-start items-center justify-between max-md:w-full">
              <a
                className="link text-base-content link-neutral text-xl font-bold no-underline"
                href="#"
              >
                Sabirlar
              </a>
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
              <li className="dropdown relative inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end]">
                <button
                  id="dropdown-link"
                  type="button"
                  className="dropdown-toggle dropdown-open:bg-base-content/10 dropdown-open:text-base-content"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  aria-label="Dropdown"
                >
                  Parent
                  <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
                </button>
                <ul
                  className="dropdown-menu dropdown-open:opacity-100 hidden"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="dropdown-link"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Link 4
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Link 5
                    </a>
                  </li>
                  <hr className="border-base-content/25 -mx-2" />
                  <li>
                    <a className="dropdown-item" href="#">
                      Link 6
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
