interface Props {
  id: string;
}

const Gallery = ({ id }: Props) => {
  return (
    <section id={id} className="py-[50px] flex flex-col gap-10 bg-[#f2f4f4]">
      <p className="text-3xl md:text-[40px] leading-[1] text-center font-semibold text-[#003e52]">
        Galería
      </p>

      <div className="text-center">
        <p className="font-semibold text-xl">Nuestro 22 colores disponibles</p>
        <div>AQUI VAN LOS PRODUCTOS</div>
      </div>
    </section>
  );
};

export default Gallery;
