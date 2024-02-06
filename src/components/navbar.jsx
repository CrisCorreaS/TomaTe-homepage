import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faMicrophone,
  faMagnifyingGlass,
  faBars
} from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/tomate-logo-horizontal-negro.png";

function NavBar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <>
      <nav className="bg-bg-light">
        <section className="  text-bg-dark font-baskerville mt-6 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <article className="md:flex md:items-center md:gap-12 bg-bg-light">
            <a className="block text-bg-dark" href="/">
              <span className="sr-only">TomaTé Home Page</span>
              <img
                src={logo}
                alt="Logo Horizontal de TomaTé"
                className="w-auto h-12 object-contain"
              />
            </a>
          </article>
          <article className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-8 text-base">
                <li>
                  <a
                    className="text-bg-dark hover:text-gray-500 transition-colors duration-100"
                    href="/"
                  >
                    Té Orgánico
                  </a>
                </li>
                <li>
                  <a
                    className="text-bg-dark hover:text-gray-500 transition-colors duration-100"
                    href="/"
                  >
                    Infusiones
                  </a>
                </li>
                <li>
                  <a
                    className="text-bg-dark hover:text-gray-500 transition-colors duration-100"
                    href="/"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className="text-bg-dark hover:text-gray-500 transition-colors duration-100"
                    href="/"
                  >
                    Sobre Nosotros
                  </a>
                </li>
              </ul>
            </nav>
          </article>
          <section className="flex items-center gap-4">
            <form className="flex items-center">
              {isSearchVisible && (
                <div className="relative w-full">
                  <button
                    type="button"
                    className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
                  >
                    <FontAwesomeIcon
                      icon={faPalette}
                      size="xs"
                      className="w-4 h-4 text-gray-500"
                    />
                  </button>
                  <input
                    type="text"
                    id="voice-search"
                    className="bg-bg-light border border-bg-dark text-bg-dark text-sm rounded-lg focus:ring-primary-green focus:border-primary-green block w-full ps-10 p-2.5 pe-9"
                    placeholder="Buscar..."
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 end-0 flex items-center pe-3"
                  >
                    <FontAwesomeIcon
                      icon={faMicrophone}
                      size="xs"
                      className="w-4 h-4 text-gray-500  hover:text-bg-dark"
                    />
                  </button>
                </div>
              )}
              <button
                type="submit"
                onClick={toggleSearchVisibility}
                className="inline-flex items-center py-2.5 px-3 ms-2 text-sm text-bg-dark font-medium rounded-lg border border-none hover:text-gray-500"
              >
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  size="xs"
                  className="w-4 h-4 me-2 hidden sm:flex"
                />
              </button>
            </form>
            <article className="sm:flex sm:gap-3">
              <a
                className="rounded-md bg-bg-dark px-5 py-2.5 text-sm font-medium text-bg-light shadow"
                href="/"
              >
                Login
              </a>
              <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-bg-light px-5 py-2.5 text-sm font-medium text-bg-dark"
                  href="/"
                >
                  Registro
                </a>
              </div>
            </article>
            <article className="block md:hidden">
              <button className="rounded p-2 text-gray-600 transition hover:text-gray-600/75">
                <FontAwesomeIcon
                      icon={faBars}
                      size="xs"
                      className="h-5 w-5 text-gray-500  hover:text-bg-dark"
                    />
              </button>
            </article>
          </section>
        </section>
      </nav>
    </>
  );
}

export default NavBar;
