const ContenedorCirculos = ({children}) => {
  return (
    <section className="bg-bg-dark">
      <header className="pt-24 pb-14">
        <h4 className="text-center text-2xl md:text-4xl font-baskerville text-bg-light">Nuestras Variedades</h4>
      </header>
      <main className="pb-32 flex justify-center items-center flex-wrap sm:flex-row sm:gap-4">
        {children}
      </main>
    </section>
  );
}

export default ContenedorCirculos;