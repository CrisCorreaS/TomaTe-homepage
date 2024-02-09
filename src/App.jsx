import Descuento from "./components/descuento";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Button from "./components/button";
import Hero from "./components/hero";
import QuoteTitle from "./components/quoteTitle";
import Quote from "./components/quote";
import CtaDerecha from "./components/ctaDerecha";
import CtaIzquierda from "./components/ctaIzquierda";
import CtaImages from "./components/ctaImages";
import CircleButton from "./components/circleButton";
import ContenedorCirculos from "./components/contenedorCirculos";
import ContenedorBlog from "./components/contenedorBlog";
import BlogPost from "./components/blogPost";

export default function App() {
  return (
    <>
      <header>
        <Descuento></Descuento>
        <NavBar altura="top-6" alturaValor="6"></NavBar>
      </header>
      <main className="bg-bg-dark">
        <Hero temporada="Verano">
          <Button>Ver Más</Button>
        </Hero>
        <QuoteTitle
          colorBg="bg-primary-brown-light"
          colorTxt="text-bg-dark"
          titulo="Lujo en cada sorbo"
          texto="Explora la perfección gracias a nuestra selección orgánica y mezclas artesanales. Un lujo digno de saborear"
        ></QuoteTitle>
        <Quote
          colorBg="bg-secondary-brown"
          colorTxt="text-bg-light"
          texto="Cultivando la experiencia en una taza"
        ></Quote>
        <CtaDerecha>
          <Button>Más Info</Button>
        </CtaDerecha>
        <QuoteTitle
          colorBg="bg-secondary-green"
          colorTxt="text-bg-dark"
          titulo="Té a tu medida"
          texto="Encuentra tu té ideal, una experiencia personalizada"
        >
          <Button
            colorLetras="bg-bg-dark"
            fondo="text-bg-light"
            animacion="hover:bg-gray-700"
          >
            Hacer el test
          </Button>
        </QuoteTitle>
        <CtaIzquierda>
          <Button>Descubre Más</Button>
        </CtaIzquierda>
        <CtaImages>
          <Button>Saber Más</Button>
        </CtaImages>
        <ContenedorCirculos>
          <CircleButton
            colorCirculo="#A8B30D"
            colorCircunferencia="bg-te-verde"
            borderColor="text-bg-dark"
          >
            Té Verde
          </CircleButton>
          <CircleButton
            colorCirculo="#FBEFCF"
            colorCircunferencia="bg-te-blanco"
            borderColor="text-bg-dark"
          >
            Té Blanco
          </CircleButton>
          <CircleButton
            colorCirculo="#FAD5A0"
            colorCircunferencia="bg-te-amarillo"
            borderColor="text-bg-dark"
          >
            Té Amarillo
          </CircleButton>
          <CircleButton
            colorCirculo="#F79F32"
            colorCircunferencia="bg-te-azul"
            borderColor="text-bg-dark"
          >
            Té Azul
          </CircleButton>
          <CircleButton
            colorCirculo="#CE560A"
            colorCircunferencia="bg-te-infusiones"
            borderColor="text-bg-dark"
          >
            Infusiones
          </CircleButton>
          <CircleButton
            colorCirculo="#9C2803"
            colorCircunferencia="bg-te-negro"
            borderColor="text-bg-dark"
          >
            Té Negro
          </CircleButton>
          <CircleButton
            colorCirculo="#6F0A0E"
            colorCircunferencia="bg-te-rojo"
            borderColor="text-bg-dark"
          >
            Té Rojo
          </CircleButton>
        </ContenedorCirculos>
        <ContenedorBlog>
          <BlogPost
            colorFondo="bg-primary-brown-dark"
            imageNumber="0"
            titulo="Té & Horóscopo"
            texto="Tu horóscopo revela tus gustos más refinados. Acompáñanos en un viaje de sabor y estrellas en busca de tu té ideal."
          >
            <Button>Leer Más</Button>
          </BlogPost>
          <BlogPost
            imageNumber="1"
            titulo="Té Matcha"
            texto="Sumérgete en el mundo del té matcha con nosostros, mientras exploramos su preparación perfecta y sus beneficios"
          >
            <Button>Leer Más</Button>
          </BlogPost>
          <BlogPost
            colorFondo="bg-secondary-brown"
            imageNumber="2"
            titulo="Té & Estado de Ánimo"
            texto="Los matices del té se adaptan a tu estado de ánimo. Un recorrido emocional a través del té"
          >
            <Button>Leer Más</Button>
          </BlogPost>
        </ContenedorBlog>
        <Quote
          colorBg="bg-secondary-green"
          colorTxt="text-primary-green"
          texto="Cultivamos, seleccionamos y servimos solo lo mejor"
        ></Quote>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}
