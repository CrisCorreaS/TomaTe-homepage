import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faPinterestP,
  faXTwitter,
  faInstagram,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faGlobe,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import logoHorizontal from "../assets/logos/tomate-logo-horizontal-blanco.png";

function Footer() {
  return (
    <main className="flex flex-wrap justify-center items-center bg-bg-dark text-bg-light font-baskerville min-h-[10rem] px-4 py-12 z-10">
      <div className="container mx-auto w-full">
        <section className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-12 lg:gap-20">
          <header className="col-span-3">
            <a
              href="/"
              title="Go to TomaTé Home Page"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={logoHorizontal}
                alt="Logo Horizontal de TomaTé"
                className="w-auto h-10 object-contain"
              />
              <span className="sr-only">TomaTé Home Page</span>
            </a>
            <p className="my-4 text-xs leading-normal text-bg-light-500">
              Sumérgete en el refinado arte del té, donde la elegancia se
              fusiona con la exquisitez, ofreciendo una experiencia sensorial
              única para los amantes del té más exigentes.
            </p>
            <label className="flex w-24">
              <span className="sr-only">Select a language</span>
              <select className="form-select form-select-sm bg-bg-dark">
                <option className="text-sm">Español</option>
                <option className="text-sm">Galego</option>
                <option className="text-sm">English</option>
              </select>
            </label>
          </header>
          <nav className="col-span-1 md:col-span-1 lg:col-span-2">
            <p className="mb-3 text-lg font-semibold tracking-wider text-bg-light-400 uppercase">
              Información
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="#"
              className="flex mb-3 text-sm font-medium text-bg-light-800 opacity-70 md:mb-2 hover:opacity-100 transition-opacity duration-100"
            >
              Productos TomaTé
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="#"
              className="flex mb-3 text-sm font-medium text-bg-light-800 opacity-80 md:mb-2 hover:opacity-100 transition-opacity duration-100"
            >
              Quienes Somos
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="#"
              className="flex mb-3 text-sm font-medium text-bg-light-800 opacity-80 md:mb-2 hover:opacity-100 transition-opacity duration-100"
            >
              FAQs
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="#"
              className="flex mb-3 text-sm font-medium text-bg-light-800 opacity-80 md:mb-2 hover:opacity-100 transition-opacity duration-100"
            >
              Newsletter
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="#"
              className="flex mb-3 text-sm font-medium text-bg-light-800 opacity-80 md:mb-2 hover:opacity-100 transition-opacity duration-100"
            >
              Blog
            </a>
          </nav>
          <nav className="col-span-1 md:col-span-1 lg:col-span-2">
            <p className="mb-3 text-lg font-semibold tracking-wider text-bg-light-400 uppercase">
              Contacto
            </p>
            <article className="flex items-center">
              <FontAwesomeIcon icon={faPhone} size="xs" className="mr-2 mb-2" />
              <a
                target="_blank"
                rel="noreferrer"
                href="tel:+34987654321"
                className="flex mb-3 text-sm font-medium text-bg-light-800 opacity-80 md:mb-2 hover:opacity-100 transition-opacity duration-100"
              >
                +34 987 654 321
              </a>
            </article>
            <article className="flex items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="xs"
                className="mr-2 mb-2"
              />
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:info@tomate.com"
                className="flex mb-3 text-sm font-medium text-bg-light-800 opacity-80 md:mb-2 hover:opacity-100 transition-opacity duration-100"
              >
                info@tomate.com
              </a>
            </article>
            <article className="flex items-center">
              <FontAwesomeIcon icon={faGlobe} size="xs" className="mr-2 mb-2" />
              <a
                target="_blank"
                rel="noreferrer"
                href="#"
                className="flex mb-3 text-sm font-medium text-bg-light-800 opacity-80 md:mb-2 hover:opacity-100 transition-opacity duration-100"
              >
                tomate.com
              </a>
            </article>
            <article className="flex items-center">
              <FontAwesomeIcon
                icon={faLocationDot}
                size="xs"
                className="mr-2 mb-7"
              />
              <a
                target="_blank"
                rel="noreferrer"
                href="#"
                className="flex mb-3 text-sm font-medium text-bg-light-800 opacity-80 md:mb-2 hover:opacity-100 transition-opacity duration-100"
              >
                Rua Caballeros, 1. <br /> 15006. A Coruña
              </a>
            </article>
          </nav>
          <nav className="col-span-2 md:col-span-1 lg:col-span-2">
            <p className="mb-3 text-lg font-semibold tracking-wider text-bg-light-400 uppercase">
              Aspectos Legales
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="#"
              className="flex mb-3 text-sm font-medium text-bg-light-800 opacity-80 md:mb-2 hover:opacity-100 transition-opacity duration-100"
            >
              Condiciones de Uso
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="#"
              className="flex mb-3 text-sm font-medium text-bg-light-800 opacity-80 md:mb-2 hover:opacity-100 transition-opacity duration-100"
            >
              Aviso de Privacidad
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="#"
              className="flex mb-3 text-sm font-medium text-bg-light-800 opacity-80  md:mb-2 hover:opacity-100 transition-opacity duration-100"
            >
              Política de Cookies
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="#"
              className="flex mb-3 text-sm font-medium text-bg-light-800 opacity-80 md:mb-2 hover:opacity-100 transition-opacity duration-100"
            >
              Centro de Ayuda
            </a>
          </nav>
          <footer className="col-span-3">
            <p className="mb-3 text-sm font-semibold tracking-wider text-bg-light-400 uppercase">
              SUSCRÍBETE A NUESTRA NEWSLETTER
            </p>
            <form action="#" className="mb-2">
              <article className="form-append">
                <label htmlFor="mail-newsletter">
                  <input
                    className="form-input form-input-sm bg-bg-dark mr-5 mb-2 border border-white border-opacity-50 rounded-md px-2 hover:border-primary-green"
                    type="email"
                    placeholder="Correo Electrónico"
                    id="mail-newsletter"
                  />
                </label>
                <button className="btn btn-light-primary btn-sm" type="submit">
                  Suscribirme
                </button>
              </article>
            </form>
            <p className="text-sm leading-normal text-bg-light-500">
              Obtén lecciones e ideas sobre cómo expandir tus conocimientos en
              el mundo del té.
            </p>
          </footer>
        </section>
        <section className="flex flex-col justify-between pt-10 mt-10 border-t border-bg-light-100 md:flex-row items-center">
          <small className="mb-6 text-xxs text-left text-bg-light-600 md:mb-0 font-alegreya">
            <p>Copyright © 2024 TomaTé. Todos los derechos reservados.</p>
            <p>
              TomaTé® y el logotipo de la tetera en líneas comerciales
              registradas de TomaTé AG.
            </p>
          </small>
          <article className="flex items-start justify-start space-x-6 text-bg-light-500 md:items-center md:justify-center">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="hover:opacity-100 opacity-75 transition-opacity duration-100 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faPinterestP}
              className="hover:opacity-100 opacity-75 transition-opacity duration-100 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faXTwitter}
              className="hover:opacity-100 opacity-75 transition-opacity duration-100 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="hover:opacity-100 opacity-75 transition-opacity duration-100 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="hover:opacity-100 opacity-75 transition-opacity duration-100 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faTiktok}
              className="hover:opacity-100 opacity-75 transition-opacity duration-100 cursor-pointer"
            />
          </article>
        </section>
      </div>
    </main>
  );
}

export default Footer;
