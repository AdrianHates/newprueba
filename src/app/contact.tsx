import { useContext } from "react";
import { FormContext } from "../context/form/FormContext";
import data from "../data/data.json";

interface Props {
  id: string;
}
const Contact = ({ id }: Props) => {
  const formContext = useContext(FormContext);
  if (!formContext) {
    throw new Error("Contact debe estar dentro de un FormProvider");
  }
  const { formData, updateFormData, removeProduct } = formContext;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  return (
    <section
      id={id}
      className="mt-[-50px] py-[100px] pb-[50px] flex flex-col gap-16 px-6 sm:px-10 md:px-32 lg:px-16 tracking-normal"
    >
      <h2 className="text-3xl md:text-[40px] leading-[1.5] text-center font-semibold text-[#003e52]">
        Elige tu Color y Talla – Compra Fácil y Rápida
      </h2>

      <div className="flex items-center justify-center flex-col lg:flex-row gap-10 xl:gap-16">
        <div className="w-full lg:w-[50%]">
          <p className="text-2xl">
            Selecciona las prendas que más te gusten y llena el siguiente
            formulario para realizar tu pedido.
          </p>

          <div className="text-2xl sm:text-3xl flex flex-wrap mt-10">
            <img src="star.svg" alt="star" className="w-5 h-5" />
            <span className="bg-[#3ebcba] rounded-lg pt-1 pb-2 px-1.5 text-center w-full max-w-[25ch] lg:max-w-none">
              📍 Compra Ahora y Paga Contra Entrega
            </span>{" "}
            <img
              src="star.svg"
              alt="star"
              className="w-5 h-5 self-end max-[427px]:ml-auto lg:ml-auto"
            />
            <p className="pl-6 mt-5">
              Realiza tu pedido y paga al momento de la entrega con total
              confianza.
            </p>
            <p className="text-base mt-5 text-[#003e52] italic">
              📞 Serás contactado en menos de 24 horas para confirmar tu pedido.
            </p>
            <p className="text-[red] font-semibold mt-8 italic text-xl">
              Las prendas íntimas no tienen cambio. Ley 1480 de 2011.
            </p>
          </div>
        </div>

        <form
          action={`https://formsubmit.co/herlessoliverramosespinoza@gmail.com`}
          method="POST"
          className="bg-[#273a52] flex flex-col relative text-white w-full max-w-none lg:max-w-[51%] xl:max-w-[50%] px-4.5 sm:px-10 py-8 rounded-xl gap-2 sm:gap-6"
        >
          <input type="hidden" name="_captcha" value="false" />
          <label className="flex flex-col gap-1.5">
            <p className="font-bold">
              Nombre Completo <span className="text-[red]">*</span>
            </p>
            <input
              type="text"
              required
              name="nombreCompleto"
              value={formData.nombreCompleto}
              onChange={handleChange}
              className="border rounded-2xl px-3 py-1"
            />
          </label>
          <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-6 xl:gap-10 w-full">
            <label className="flex flex-col w-full sm:w-[60%] gap-1.5">
              <p className="font-bold">
                Número de Documento <span className="text-[red]">*</span>
              </p>

              <input
                required
                type="text"
                pattern="\d+"
                name="documento"
                value={formData.documento}
                onChange={handleChange}
                className="border rounded-2xl px-3 py-1"
              />
            </label>
            <label className="flex flex-col w-full sm:w-[40%] gap-1.5">
              <p className="font-bold">
                WhatsApp <span className="text-[red]">*</span>
              </p>
              <input
                required
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                className="border rounded-2xl px-3 py-1"
              />
            </label>
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-6 xl:gap-10 w-full">
            <label className="flex flex-col w-full sm:w-[50%] gap-1.5">
              <p className="font-bold">
                Ciudad <span className="text-[red]">*</span>
              </p>
              <input
                required
                type="text"
                name="ciudad"
                value={formData.ciudad}
                onChange={handleChange}
                className="border rounded-2xl px-3 py-1"
              />
            </label>
            <label className="flex flex-col w-full sm:w-[50%] gap-1.5">
              <p className="font-bold">
                Barrio <span className="text-[red]">*</span>
              </p>
              <input
                type="text"
                required
                name="barrio"
                value={formData.barrio}
                onChange={handleChange}
                className="border rounded-2xl px-3 py-1"
              />
            </label>
          </div>
          <label className="flex flex-col gap-1.5">
            <p className="font-bold">
              Dirección <span className="text-[red]">*</span>
            </p>
            <input
              type="text"
              required
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              className="border rounded-2xl px-3 py-1"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <p className="font-bold">Oficina (Opcional)</p>
            <input
              type="text"
              name="oficina"
              value={formData.oficina}
              onChange={handleChange}
              className="border rounded-2xl px-3 py-1"
            />
          </label>
          <div className="flex flex-col gap-1.5">
            <p className="font-bold">Productos Seleccionados:</p>
            <div className="flex flex-wrap gap-2">
              {formData.productos.map((producto, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 border border-white/50 px-2 py-1 rounded-2xl hover:bg-black/30 duratin-300"
                >
                  <span>
                    {producto.talla} - {producto.color}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeProduct(index)} // Llama a la función de eliminación
                    className="cursor-not-allowed"
                  >
                    <img src="eliminar.svg" className="w-4 h-4" alt="remove" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <label className="flex flex-col gap-1.5 opacity-0 absolute pointer-events-none">
            <p className="font-bold">Productos Seleccionados:</p>
            <input
              type="text"
              name="productos"
              value={formData.productos
                .map((producto) => `${producto.talla} - ${producto.color}`)
                .join(", ")} // Muestra los productos con formato "talla - color"
              readOnly
              className="border rounded-2xl px-3 py-1 text-gray-600"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <p className="font-bold">Observaciones (Opcional)</p>
            <textarea
              name="observaciones"
              value={formData.observaciones}
              onChange={handleChange}
              className="border rounded-2xl px-3 py-1 resize-none min-h-[100px]"
              placeholder="Escribe aquí cualquier comentario adicional..."
            />
          </label>
          <button
            type="submit"
            className="bg-[#3ebcba] rounded-2xl mt-3 px-3 py-2 font-semibold cursor-pointer hover:saturate-150 hover:scale-105 duration-300"
          >
            Enviar Información
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
