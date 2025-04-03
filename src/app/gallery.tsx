import data from "../data/data.json";
import { useState } from "react";

interface Props {
  id: string;
}

const Gallery = ({ id }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectIndexImage, setSelectedIndexImage] = useState(0);
  const [selectIndexSize, setSelectIndexSize] = useState(0);
  const [transformStyle, setTransformStyle] = useState(
    "translate(0%, 0%) scale(1)"
  );

  const producto = data?.productos?.[selectedIndex];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const xPercent = ((e.clientX - left) / width) * 100;
    const yPercent = ((e.clientY - top) / height) * 100;

    const xFromCenter = xPercent - 50;
    const yFromCenter = yPercent - 50;

    const maxTranslate = 16.4; // Máxima cantidad que puede moverse (8%)
    const translateX = (xFromCenter / 50) * maxTranslate; // Extrapolamos la distancia X
    const translateY = (yFromCenter / 50) * maxTranslate;
    setTransformStyle(`translate(${-translateX}%, ${-translateY}%)`); // Ajustar la intensidad del efecto
  };

  const handleMouseLeave = () => {
    setTransformStyle("translate(0%, 0%) scale(1)"); // Volver a la posición inicial
  };

  return (
    <section id={id} className="py-[50px] flex flex-col gap-10 bg-[#f2f4f4]">
      <p className="text-3xl md:text-[40px] leading-[1] text-center font-semibold text-[#003e52]">
        Galería
      </p>
      <p className="font-semibold text-xl text-center">
        Nuestro 22 colores disponibles
      </p>

      <div className="text-center flex flex-col px-4 sm:px-16">
        <div className="flex flex-col items-center w-full max-w-[500px] gap-4 mx-auto mt-0">
          <div
            className="overflow-hidden relative group"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {producto?.imágenes?.length > 0 && (
              <>
                <img
                  src={producto?.imágenes[selectIndexImage]}
                  className="w-full h-full object-cover"
                />
                <img
                  src={producto?.imágenes[selectIndexImage]}
                  className="group-hover:opacity-100 opacity-0 group-hover:duration-300 duration-[0s] transition-opacity ease-in-out w-full h-full object-cover scale-[1.5] absolute top-0 cursor-crosshair"
                  style={{ transform: transformStyle }}
                />
              </>
            )}
          </div>
          <div className="flex justify-between gap-4 w-full">
            {producto?.imágenes?.length > 0 &&
              producto?.imágenes?.map((img, i) => (
                <div
                  key={i}
                  className="rounded-xl w-[100px] cursor-pointer relative"
                  onClick={() => {
                    setSelectedIndexImage(i);
                  }}
                >
                  <img src={img} key={i} className="rounded-xl w-full" />
                  {i !== selectIndexImage && (
                    <div className="absolute w-full h-full top-0 bg-white/40 rounded-xl" />
                  )}
                </div>
              ))}
          </div>
          <div className="mt-10 flex flex-col gap-8 items-center px-10">
            <select
              value={selectedIndex}
              onChange={(e) => {
                setSelectedIndexImage(0);
                setSelectedIndex(Number(e.target.value));
              }}
              className="border-2 text-white bg-[#273a52] rounded-2xl py-1 px-3 font-semibold text-base text-center"
            >
              {data?.productos.map((_, index) => (
                <option key={index} value={index}>
                  {data?.productos[index].nombre}
                </option>
              ))}
            </select>
            <div className="text-lg flex items-center gap-2 font-extralight italic">
              {data?.productos?.[selectedIndex]?.tallas?.map((talla, i) => (
                <div
                  className={`cursor-pointer border border-black/50 ${
                    i === selectIndexSize &&
                    "border-black/100 border-2 font-semibold"
                  } rounded-lg w-10 h-10 flex items-center justify-center`}
                  key={i}
                  onClick={() => {
                    setSelectIndexSize(i);
                  }}
                >
                  {talla}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
