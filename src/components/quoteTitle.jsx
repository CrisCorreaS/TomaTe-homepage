const QuoteTitle = ({
  colorBg = "bg-primary-brown-light",
  colorTxt = "text-bg-dark",
  titulo = "Lujo en cada sorbo",
  texto = "Explora la perfección gracias a nuestra selección orgánica y mezclas artesanales. Un lujo digno de saborear",
  children = null,
}) => {
  return (
    <article
      className={`w-full ${colorBg} ${colorTxt} font-baskerville py-5 px-4 shadow-lg text-center text-xs sm:text-xs`}
    >
      <h5 className="my-4 text-xl tracking-tight font-bold opacity-85 2xl:mt-6 2xl:mb-5 2xl:text-4xl md:mt-4 md:mb-3 md:text-3xl md:leading-tight">
        {titulo}
      </h5>
      <p className="text-sm mb-4 italic md:text-lg md:mb-6">{texto}</p>
      {children && ( // Usamos una expresión condicional para renderizar el botón solo si se pasa como prop
        <div className="flex justify-center text-sm my-4 lg:my-6">{children}</div>
      )}
    </article>
  );
};

export default QuoteTitle;
