function Button({
  colorLetras = "bg-bg-light",
  fondo = "text-bg-dark",
  animacion = "hover:bg-gray-100",
  children = "Leer Más",
  outro = "",
  onClick,
}) {
  return (
    <button
      type="button"
      className={`${colorLetras} ${fondo} ${outro} font-baskerville uppercase py-2 px-7 inline-flex items-center font-normal rounded-full border border-transparent ${animacion} cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
