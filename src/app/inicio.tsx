interface Props {
  id: string;
  numberPhone: number;
}
const Inicio = ({ id, numberPhone }: Props) => {
  return (
    <section
      id={id}
      className="relative min-h-[100vh] pt-[80px] flex items-center justify-center"
    >
      <div className="absolute w-full h-full top-0 left-0">
        <div className="bg-black/50 w-full h-[100vh] absolute top-0 left-0" />
        <div className="bg-[url(/bg-inicio.webp)] bg-fixed bg-center bg-cover w-full h-full"></div>
      </div>

      <div className="relative z-10 text-center text-white px-3 sm:px-10 md:px-0 w-full md:w-[600px] flex flex-col gap-10">
        <h1 className="text-2xl min-[400px]:text-3xl md:text-4xl leading-[1.5] font-bold">
          Más Wear Medellín – Comodidad y Frescura en Todo Momento
        </h1>
        <p className="text-base md:text-lg">
          Bienvenido a Más Wear Medellín, la marca de ropa interior masculina
          diseñada para brindarte la máxima comodidad y frescura durante todo el
          día. Nuestra tecnología y materiales te permiten moverte con total
          libertad, hasta el punto de olvidar que llevas ropa interior.
        </p>
        <a
          href={`https://wa.me/+57${numberPhone}`}
          aria-label="Chatea por WhatsApp con Maswear"
          target="_blank"
          rel="noreferrer"
          className="bg-[#273a52] px-6 py-2 font-bold self-center rounded-3xl hover:bg-[#3ebcba] hover:scale-105 duration-300"
        >
          Comprar Ahora
        </a>
      </div>
    </section>
  );
};

export default Inicio;
