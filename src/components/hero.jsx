import imagen1 from "../assets/img/img1.jpg";

function Hero(props) {
  function getEstacion() {
    const month = new Date().getMonth();

    if (month >= 2 && month <= 4) {
      return ["Privavera", "primaverales"];
    } else if (month >= 5 && month <= 7) {
      return ["Verano", "veraniegos"];
    } else if (month >= 8 && month <= 10) {
      return ["Otoño", "otoñales"];
    } else {
      return ["Invierno", "invernales"];
    }
  }

  return (
    <header
      className="w-full font-baskerville"
      style={{
        backgroundImage: `linear-gradient(rgba(56, 51, 48, 0.3), rgba(56, 51, 48, 0.3)), url(${imagen1})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section className="container w-full px-4 pt-32 pb-10 mx-auto text-center md:w-4/5 lg:w-3/4 lg:pt-64 lg:pb-28 2xl:w-3/4 2xl:pt-80 2xl:pb-52">
        <h2 className="text-bg-light mb-6 text-3xl tracking-tight md:text-7xl md:mb-5 md:leading-tight">
          Coleccion de {getEstacion()[0]}
        </h2>
        <p className="text-xl text-bg-light mb-6">
          Descubre nuestros tés {getEstacion()[1]} favoritos
        </p>
        <article className="mb-0 text-sm">{props.children}</article>
      </section>
    </header>
  );
}
export default Hero;
