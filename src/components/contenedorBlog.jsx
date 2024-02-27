const ContenedorBlog = ({children}) => {
  return (
    <section className="w-full py-20 px-12 bg-primary-brown-light grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:gap-12 2xl:px-80">
      {children}
    </section>
  );
};

export default ContenedorBlog;
