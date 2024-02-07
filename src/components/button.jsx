function Button({ children = "Leer Más", enlace = "http://127.0.0.1:5173/" }) {
  return (
      <a href={enlace} target="_blank" rel="noreferrer">
        <button
          type="button"
          className="font-baskerville uppercase py-2 px-7 inline-flex items-center font-semibold rounded-full border border-transparent bg-bg-light text-bg-dark hover:bg-gray-100 cursor-pointer" 
        >
          {children}
        </button>
      </a>
  );
}

export default Button;
