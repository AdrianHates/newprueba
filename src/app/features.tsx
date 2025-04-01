interface Props {
  id: string;
}

const Features = ({ id }: Props) => {
  const list = [
    "Tallas disponibles: S - M - L - XL",
    "Telas suaves y frescas",
    "Ajuste cómodo y ergonómico",
    "Libertad de movimiento",
    "Diseño moderno",
  ];
  return (
    <section id={id} className="py-[100px] flex flex-col gap-10">
      <h2 className="text-3xl md:text-[40px] leading-[1] text-center font-semibold text-[#003e52]">
        Características
      </h2>
      <div className="bg-[#273a52]">
        <img
          src="/scattering.svg"
          alt="scaterring"
          className="w-full h-10 bg-[#273a52]"
        />
        <div className="text-center px-4 text-white md:w-[400px] mx-auto flex flex-col gap-10 py-10">
          <p className="text-2xl font-bold">Descubre nuestros 22 colores</p>
          <div className="flex flex-col gap-3 mx-auto sm:ml-40 md:mx-0">
            {list &&
              list.map((ulist, i) => (
                <div key={i} className="flex gap-3">
                  <img src="/check.svg" alt="check" className="w-6 h-6" />
                  <p className="text-base sm:text-lg font-normal">{ulist}</p>
                </div>
              ))}
          </div>
        </div>
        <img
          src="/scattering.svg"
          alt="scaterring"
          className="w-full h-10 bg-[#273a52] rotate-[180deg]"
        />
      </div>
    </section>
  );
};

export default Features;
