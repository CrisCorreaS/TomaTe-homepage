import React, { useState, useEffect } from "react";
import Button from "./button";

const CookieBanner = ({ children }) => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookieConsent="));
    if (!consentCookie) {
      setShowBanner(true);
    }
  }, []);

  const aceptaCookies = () => {
    const AHORA = new Date();
    const FECHA_EXPIRACION = new Date(AHORA.getTime() + 24 * 60 * 60 * 1000);
    const EXPIRA = FECHA_EXPIRACION.toUTCString();

    document.cookie = `cookieConsent=true; expires=${EXPIRA}; path=/`;
    setShowBanner(false);
  };

  const deniegaCookies = () => {
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <article className="font-baskerville fixed bottom-0 left-0 right-0 md:px-10 xl:px-20 bg-bg-dark text-bg-light p-4 sm:flex items-center justify-between z-40">
      <p className="mb-6 sm:mb-0">
        Este sitio web utiliza cookies para mejorar tu experiencia. Al continuar
        navegando, aceptas su uso.
      </p>
      <article className="mb-0 text-xxs md:text-xs gap-4 flex">
        {" "}
        {React.Children.map(children, (child) => {
          if (child.type === Button && child.props.children === "Aceptar") {
            return React.cloneElement(child, { onClick: aceptaCookies });
          } else {
            return React.cloneElement(child, { onClick: deniegaCookies });
          }
        })}
      </article>
    </article>
  );
};

export default CookieBanner;
