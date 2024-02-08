function Button({
  colorLetras = "bg-bg-light",
  fondo = "text-bg-dark",
  animacion = "hover:bg-gray-100",
  children = "Leer Más",
  enlace = "http://127.0.0.1:5173/",
}) {
  return (
    <a href={enlace} target="_blank" rel="noreferrer">
      <button
        type="button"
        className={`${colorLetras} ${fondo} font-baskerville uppercase py-2 px-7 inline-flex items-center font-normal rounded-full border border-transparent ${animacion} cursor-pointer`}
      >
        {children}
      </button>
    </a>
  );
}

export default Button;
