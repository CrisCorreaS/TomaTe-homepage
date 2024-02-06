import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import logoHorizontal from "../assets/tomate-logo-horizontal-blanco.png";

function Footer() {
  return (
    <>
      <footer className="flex flex-wrap justify-center items-center bg-bg-dark text-bg-light font-baskerville min-h-[10rem] px-4 py-12">
        <main className="container mx-auto max-w-7xl">
          <section className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-12 lg:gap-20">
            <header className="col-span-3">
              <a href="/" title="Go to TomaTé Home Page" target="_blank">
                <img
                  src={logoHorizontal}
                  alt="Logo Horizontal de TomaTé"
                  className="w-auto h-10 object-contain"
                />
                <span className="sr-only">TomaTé Home Page</span>
              </a>
              <p className="my-4 text-sm leading-normal text-bg-light-500">
                Sumérgete en el refinado arte del té, donde la elegancia se
                fusiona con la exquisitez, ofreciendo una experiencia sensorial
                única para los amantes del té más exigentes.
              </p>
              <label className="flex w-24">
                <span className="sr-only">Select a language</span>
                <select className="form-select form-select-sm bg-bg-dark">
                  <option>Español</option>
                  <option>Galego</option>
                  <option>English</option>
                </select>
              </label>
            </header>
            <nav className="col-span-1 md:col-span-1 lg:col-span-2">
              <p className="mb-3 text-lg font-semibold tracking-wider text-bg-light-400 uppercase">
                Información
              </p>
              <a
                target="_blank"
                href="#"
                className="flex mb-3 text-base font-medium text-bg-light-800 opacity-70 transition md:mb-2 hover:text-primary"
              >
                Productos TomaTé
              </a>
              <a
                target="_blank"
                href="#"
                className="flex mb-3 text-base font-medium text-bg-light-800 opacity-80 transition md:mb-2 hover:text-primary"
              >
                Quienes Somos
              </a>
              <a
                target="_blank"
                href="#"
                className="flex mb-3 text-base font-medium text-bg-light-800 opacity-80 transition md:mb-2 hover:text-primary"
              >
                Preguntas Frecuentes
              </a>
              <a
                target="_blank"
                href="#"
                className="flex mb-3 text-base font-medium text-bg-light-800 opacity-80 transition md:mb-2 hover:text-primary"
              >
                Newsletter
              </a>
              <a
                target="_blank"
                href="#"
                className="flex mb-3 text-base font-medium text-bg-light-800 opacity-80 transition md:mb-2 hover:text-primary"
              >
                Blog
              </a>
            </nav>
            <nav className="col-span-1 md:col-span-1 lg:col-span-2">
              <p className="mb-3 text-lg font-semibold tracking-wider text-bg-light-400 uppercase">
                Contacto
              </p>
              <article className="flex items-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  size="xs"
                  className="mr-2 mb-2"
                />
                <a
                  target="_blank"
                  href="tel:+34987654321"
                  className="flex mb-3 text-base font-medium text-bg-light-800 opacity-80 transition md:mb-2 hover:text-primary"
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
                  href="mailto:info@tomate.com"
                  className="flex mb-3 text-base font-medium text-bg-light-800 opacity-80 transition md:mb-2 hover:text-primary"
                >
                  info@tomate.com
                </a>
              </article>
              <article className="flex items-center">
                <FontAwesomeIcon
                  icon={faGlobe}
                  size="xs"
                  className="mr-2 mb-2"
                />
                <a
                  target="_blank"
                  href="#"
                  className="flex mb-3 text-base font-medium text-bg-light-800 opacity-80 transition md:mb-2 hover:text-primary"
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
                  href="#"
                  className="flex mb-3 text-base font-medium text-bg-light-800 opacity-80 transition md:mb-2 hover:text-primary"
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
                href="#"
                className="flex mb-3 text-base font-medium text-bg-light-800 opacity-80 transition md:mb-2 hover:text-primary"
              >
                Condiciones de Uso
              </a>
              <a
                target="_blank"
                href="#"
                className="flex mb-3 text-base font-medium text-bg-light-800 opacity-80 transition md:mb-2 hover:text-primary"
              >
                Aviso de Privacidad
              </a>
              <a
                target="_blank"
                href="#"
                className="flex mb-3 text-base font-medium text-bg-light-800 opacity-80 transition md:mb-2 hover:text-primary"
              >
                Política de Cookies
              </a>
              <a
                target="_blank"
                href="#"
                className="flex mb-3 text-base font-medium text-bg-light-800 opacity-80 transition md:mb-2 hover:text-primary"
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
                  <input
                    className="form-input form-input-sm bg-bg-dark mr-5 mb-2 border border-white border-opacity-50 rounded-md px-2 hover:border-primary-green"
                    type="email"
                    placeholder="Correo Electrónico"
                  />
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
          <section className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-bg-light-100 md:flex-row md:items-center">
            <small className="mb-6 text-xxs text-left text-bg-light-600 md:mb-0 font-alegreya">
              <p>Copyright © 2024 TomaTé. Todos los derechos reservados.</p>
              <p>
                TomaTé® y el logotipo de la tetera en líneas comerciales
                registradas de TomaTé AG.
              </p>
            </small>
            <article className="flex items-start justify-start space-x-6 text-bg-light-500 md:items-center md:justify-center">
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faPinterestP} />
              <FontAwesomeIcon icon={faXTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faTiktok} />
            </article>
          </section>
        </main>
      </footer>
    </>
  );
}

export default Footer;
