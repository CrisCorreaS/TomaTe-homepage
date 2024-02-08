import imagen3 from "../assets/img/img3.jpg";

const CtaDerecha = (props) => {
  return (
    <section className="flex bg-primary-brown-dark font-baskerville">
      <a
        className="hidden lg:flex lg:w-2/3"
        src="/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="object-cover w-full h-full bg-gray-200"
          src={imagen3}
          alt="Té al estilo turco"
        />
      </a>
      <article className="flex flex-col justify-center flex-1 px-4 py-4 md:px-6 lg:px-12">
        <div className="max-w-xl mx-auto text-center lg:py-8 lg:px-5 2xl:px-16">
          <p className="font-alegreya uppercase font-bold text-lg mb-5 tracking-widest text-bg-light sm:text-xl lg:mb-16">
            Más que solo té
          </p>
          <h3 className="uppercase max-w-xl text-2xl font-bold my-4 tracking-tight text-bg-light sm:text-3xl lg:my-16">
            Diversidad de Sabores
          </h3>
          <p className="text-base font-medium my-3 tracking-tight text-bg-light lg:base 2xl:text-lg lg:my-4">
            Eleva tus sentidos con infusiones cuidadosamente confeccionadas y
            rooibos únicos.
          </p>
          <p className="text-base font-medium mb-7 tracking-tight text-bg-light lg:text-base lg:mb-12 2xl:text-lg 2xl:mb-20">
            Un abanico de opciones para tu paladar exigente. Descubre la riqueza
            de las infusiones del mundo.
          </p>
          <article className="mb-0 text-sm">{props.children}</article>
        </div>
      </article>
    </section>
  );
};

export default CtaDerecha;
