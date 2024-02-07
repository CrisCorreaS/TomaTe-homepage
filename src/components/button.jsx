function Button({ texto }) {
  return (
    <button
      type="button"
      className="font-baskerville uppercase py-2 px-7 inline-flex items-center font-semibold rounded-full border border-transparent bg-bg-light text-bg-dark hover:bg-gray-100"
    >
      {texto}
    </button>
  );
}

export default Button;
