import imagen4 from "../assets/img/img4.png";
import imagen5 from "../assets/img/img5.png";

function CtaImages(props) {
  return (
    <header className="relative flex items-center justify-center w-full font-baskerville md:h-screen">
      <div
        className="absolute inset-0 bg-bg-dark opacity-30 bg-cover bg-center md:w-1/2 "
        style={{ backgroundImage: `url(${imagen4})` }}
      ></div>
      <div
        className="hidden absolute inset-0 bg-bg-dark opacity-30 bg-cover bg-center md:w-1/2 md:block"
        style={{ backgroundImage: `url(${imagen5})`, left: "50%" }}
      ></div>
      <section className="z-10 container w-full px-4 pt-24 pb-24 mx-auto text-center md:w-4/5 lg:w-3/4 lg:pt-44 lg:pb-44 2xl:w-3/4 2xl:pt-80 2xl:pb-52">
        <h2 className="text-bg-light mb-6 text-3xl tracking-tight md:text-7xl md:mb-5 md:leading-tight">
          Nuevos Sabores
        </h2>
        <p className="text-xl text-bg-light mb-6 italic">
          Elegancia en evolución, esencia y vanguardia
        </p>
        <article className="mb-0 text-xs md:text-sm">{props.children}</article>
      </section>
    </header>
  );
}
export default CtaImages;
