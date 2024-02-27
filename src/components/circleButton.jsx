const CircleButton = ({
  children,
  onClick,
  colorCirculo = "#A8B30D",
  colorCircunferencia = "bg-te-verde",
  borderColor = "text-bg-dark",
}) => {
  return (
    <a src="/" target="_blank" rel="noreferrer" className="mx-5 mb-20 sm:mb-0">
      <button
        onClick={onClick}
        className={` relative flex flex-col items-center justify-center w-20 h-20 ${colorCircunferencia} rounded-full focus:outline-none`}
      >
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <svg
            className={`w-20 h-20 ${borderColor}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <circle
              cx="10"
              cy="10"
              r="8"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle
              cx="10"
              cy="10"
              r="8"
              stroke="currentColor"
              strokeWidth="2"
              fill={colorCirculo}
            />
          </svg>
        </div>
        <div className="mt-32 w-28 font-baskerville text-bg-light">{children}</div>
      </button>
    </a>
  );
};

export default CircleButton;
