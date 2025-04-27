import { FormContext } from "../context/form/FormContext";
import data from "../data/data.json";
import { useContext, useState } from "react";

interface Props {
  id: string;
}

const Gallery = ({ id }: Props) => {
  const ALL_SIZES = ["S", "M", "L", "XL"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectIndexImage, setSelectedIndexImage] = useState(0);
  const [selectIndexSize, setSelectIndexSize] = useState(0);
  const [transformStyle, setTransformStyle] = useState(
    "translate(0%, 0%) scale(1)"
  );

  const context = useContext(FormContext);

  if (!context) {
    throw new Error("Gallery must be used within a FormProvider");
  }
  const { addProduct } = context;
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

  const handleAddToCart = () => {
    const selectedProduct = {
      talla: ALL_SIZES?.[selectIndexSize],
      color: producto?.nombre,
    };

    addProduct(selectedProduct.talla, selectedProduct.color);
    alert("✅Producto agregado al pedido");
  };

  return (
    <section
      id={id}
      className="mt-[-50px] pt-[95px] pb-[50px] flex flex-col gap-10 bg-[#f2f4f4]"
    >
      <p className="text-3xl md:text-[40px] leading-[1] text-center font-semibold text-[#003e52]">
        Galería
      </p>
      <p className="font-normal text-xl text-center">
        Nuestro 22 colores disponibles
      </p>
      <div className="flex justify-between gap-2 flex-wrap max-w-[500px] w-full self-center px-4 sm:px-0">
        {data?.productos?.map((producto, i) => (
          <div
            onClick={() => {
              setSelectedIndex(i);
              setSelectIndexSize(0);
            }}
            key={i}
            className={`hover:text-[#3ebcba] hover:bg-[#273a52] duration-300 cursor-pointer border-2 italic border-[#273a52] px-2 py-0.5 rounded-2xl font-semibold ${
              i === selectedIndex
                ? "text-[#3ebcba] bg-[#273a52]"
                : "bg-[#273a52]/10 text-[#273a52]/90"
            }`}
          >
            {producto?.nombre}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 items-center px-10">
        <div className="flex sm:flex-row flex-col items-center justify-center gap-2">
          <p className="text-md font-semibold">
            Elige el color que deseas ver:
          </p>
          <select
            value={selectedIndex}
            onChange={(e) => {
              setSelectedIndexImage(0);
              setSelectedIndex(Number(e.target.value));
            }}
            className="border-2 text-white bg-[#273a52]/100 italic rounded-2xl py-1 px-3 font-semibold text-base text-start"
          >
            {data?.productos.map((_, index) => (
              <option key={index} value={index}>
                {data?.productos[index].nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="text-lg flex items-center gap-4 sm:gap-16 font-extralight italic flex-col sm:flex-row">
          <div className="flex gap-2">
            {ALL_SIZES.map((talla, i) => {
              const isAvailable =
                data?.productos?.[selectedIndex]?.tallas?.includes(talla);
              const isSelected = i === selectIndexSize;

              return (
                <div
                  key={talla}
                  onClick={() => {
                    if (isAvailable) {
                      setSelectIndexSize(i);
                    }
                  }}
                  className={`relative cursor-pointer border rounded-lg w-10 h-10 flex items-center justify-center transition
          ${
            isAvailable
              ? "border-black/50 text-black"
              : "border-gray-300 text-gray-400 cursor-not-allowed"
          }
          ${
            isAvailable && isSelected
              ? "border-black/100 border-2 font-semibold bg-gray-200"
              : ""
          }
        `}
                >
                  {talla}
                  {!isAvailable && (
                    <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-black/30 text-3xl font-extralight not-italic">
                      ✕
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex flex-col border px-2 font-normal">
            <p className="border-b font-semibold">Precios:</p>
            <p className="w-28 flex justify-between">
              1 x <span className="text-[#3ebcba] font-semibold">$35,000</span>
            </p>
            <p className="w-28 flex justify-between">
              3 x <span className="text-[#3ebcba] font-semibold">$99,900</span>
            </p>
            <p className="w-28 flex justify-between">
              6 x <span className="text-[#3ebcba] font-semibold">$180,000</span>
            </p>
            <p className="w-28 flex justify-between">
              12 x{" "}
              <span className="text-[#3ebcba] font-semibold">$299,900</span>
            </p>
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          className="px-3 py-1.5 bg-[#273a52] text-white rounded-2xl font-semibold hover:bg-[#3ebcba] mt-3 hover:scale-105 cursor-pointer duration-300"
        >
          Agregar al pedido
        </button>
      </div>
      <div className="text-center flex flex-col px-4 sm:px-16 mt-[-4px]">
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
                  alt={producto?.nombre}
                />
                <img
                  src={producto?.imágenes[selectIndexImage]}
                  className="group-hover:opacity-100 opacity-0 group-hover:duration-300 duration-[0s] transition-opacity ease-in-out w-full h-full object-cover scale-[1.5] absolute top-0 cursor-crosshair"
                  style={{ transform: transformStyle }}
                  alt={producto?.nombre}
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
                  <img
                    src={img}
                    key={i}
                    className="rounded-xl w-full"
                    alt={`img-${i + 1}`}
                  />
                  {i !== selectIndexImage && (
                    <div className="absolute w-full h-full top-0 bg-white/40 rounded-xl" />
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
