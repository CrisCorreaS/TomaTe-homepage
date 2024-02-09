const ContenedorBlog = ({children}) => {
  return (
    <section className="w-full py-20 px-80 bg-primary-brown-light grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
      {children}
    </section>
  );
};

export default ContenedorBlog;
