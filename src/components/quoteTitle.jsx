const QuoteTitle = ({
  colorBg = "bg-primary-brown-light",
  colorTxt = "text-bg-dark",
  titulo = "Lujo en cada sorbo",
  texto = "Explora la perfección gracias a nuestra selección orgánica y mezclas artesanales. Un lujo digno de saborear",
}) => {
  return (
    <article
      className={`w-full ${colorBg} ${colorTxt} font-baskerville py-1 px-4 shadow-lg text-center text-xs sm:text-xs`}
    >
      <h3 className="my-4 text-xl tracking-tight font-bold opacity-85 2xl:mt-6 2xl:mb-5 2xl:text-4xl md:mt-4 md:mb-3 md:text-3xl md:leading-tight">
        {titulo}
      </h3>
      <p className="text-sm mb-4 italic md:text-lg md:mb-6">{texto}</p>
    </article>
  );
};

export default QuoteTitle;
