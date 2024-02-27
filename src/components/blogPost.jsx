import imagen6 from "../assets/img/img6.jpg"
import imagen7 from "../assets/img/img7.png"
import imagen8 from "../assets/img/img8.jpg"

const BlogPost = ({ children, colorFondo = "bg-primary-green", imageNumber, titulo = "Té & Horóscopo", texto="Tu horóscopo revela tus gustos más refinados. Acompáñanos en un viaje de sabor y estrellas en busca de tu té ideal"}) => {
  let imagenes=[imagen6, imagen7, imagen8]

  return (
    <article className={`${colorFondo} text-bg-light w-80 m-auto overflow-hidden shadow-lg cursor-pointer transition duration-100 ease-in-out transform hover:shadow-2xl xl:w-96 md:h-full 2xl:h-lvh`}>
      <a href="#" className="block w-full h-full">
        <img
          alt="blog photo"
          src= {imagenes[imageNumber]}
          className="object-cover w-full max-h"
        />
        <main className="w-full py-6 px-16 font-alegreya flex flex-col items-center text-center">
          <p className="mb-2 text-xl uppercase font-bold">
            {titulo}
          </p>
          <p className="font-baskerville font-light py-5">
            {texto}
          </p>
        </main>
        <footer className="pb-10 w-full flex justify-center">{children}</footer>
      </a>
    </article>
  );
};

export default BlogPost;
