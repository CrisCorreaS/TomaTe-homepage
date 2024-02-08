function Descuento({
  colorBg = "bg-secondary-brown",
  colorTxt = "text-bg-light",
  texto = "Cultivando la experiencia en una taza",
}) {
  return (
    <article className={`${colorBg} ${colorTxt} w-full font-baskerville py-5 px-4 shadow-lg flex items-center justify-center text-xl md:text-xl z-20`}>
      <p className="text-center">
        {texto}
      </p>
    </article>
  );
}

export default Descuento;
