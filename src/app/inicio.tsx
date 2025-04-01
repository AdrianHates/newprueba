interface Props {
  id: string;
  numberPhone: number;
}
const Inicio = ({ id, numberPhone }: Props) => {
  return (
    <section
      id={id}
      className="relative bg-[url(/bg-inicio.png)] bg-fixed bg-center bg-cover min-h-[100vh] pt-[96px] flex items-center justify-center"
    >
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
          target="_blank"
          rel="noreferrer"
          className="bg-[#273a52] px-6 py-2 font-bold self-center rounded-3xl hover:bg-[#3ebcba] hover:scale-105 duration-300"
        >
          Comprar Ahora
        </a>
      </div>
      <div className="bg-black/80 w-full h-full absolute top-0" />
    </section>
  );
};

export default Inicio;
