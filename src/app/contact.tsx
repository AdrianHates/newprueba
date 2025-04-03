import { useState } from "react";

interface Props {
  id: string;
}
const Contact = ({ id }: Props) => {
  const [formData, setFormData] = useState({
    fullName: "",
    documentNumber: "",
    whatsapp: "",
    city: "",
    neighborhood: "",
    address: "",
    officeName: "",
    selectedSize: "M",
    selectedColor: "Negro Clásico",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    try {
      const response = await fetch(
        "https://formsubmit.co/herlessoliverramosespinoza@gmail.com",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        alert("✅ Formulario enviado correctamente");
        setFormData({
          fullName: "",
          documentNumber: "",
          whatsapp: "",
          city: "",
          neighborhood: "",
          address: "",
          officeName: "",
          selectedSize: "M",
          selectedColor: "",
        });
      } else {
        alert("❌ Error al enviar el formulario");
      }
    } catch (error) {
      alert("❌ Hubo un problema al enviar el formulario");
      console.log(error);
    }
  };

  const colors = [
    "Negro Clásico",
    "Blanco Puro",
    "Gris Elegante",
    "Azul Navy",
    "Rojo Pasión",
    "Verde Esmeralda",
    "Mostaza Vibrante",
    "Vino Tinto",
    "Naranja Neón",
    "Azul Rey",
    "Fucsia Impactante",
    "Turquesa Claro",
    "Lila Suave",
    "Café Tierra",
    "Beige Natural",
    "Gris Oxford",
    "Rojo Intenso",
    "Verde Militar",
    "Azul Celeste",
    "Amarillo Brillante",
    "Rosa Pastel",
    "Negro con Detalles Dorados",
  ];

  const sizes = ["S", "M", "L", "XL"];

  return (
    <section
      id={id}
      className="py-[50px] flex flex-col gap-16 px-6 sm:px-10 md:px-32 lg:px-16 tracking-normal"
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

          <div className="text-2xl sm:text-3xl flex flex-wrap mt-16">
            <img src="star.svg" alt="star" className="w-5 h-5" />
            <span className="bg-[#3ebcba] rounded-lg pt-0.5 pb-1 px-1">
              📍 Compra Contra Entrega
            </span>{" "}
            <img
              src="star.svg"
              alt="star"
              className="w-5 h-5 self-end max-[387px]:ml-auto"
            />
            <p className="pl-6 mt-5">
              Recibe tu pedido y paga al momento de la entrega con total
              confianza.
            </p>
            <p className="text-base mt-5 text-[#003e52] italic">
              📞 Serás contactado en menos de 24 horas para confirmar tu pedido.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#273a52] flex flex-col text-white w-full max-w-none lg:max-w-[51%] xl:max-w-[50%] px-4.5 sm:px-10 py-8 rounded-xl gap-2 sm:gap-6"
        >
          <label className="flex flex-col gap-1.5">
            <p className="font-bold">
              Nombre Completo <span className="text-[red]">*</span>
            </p>
            <input
              name="fullName"
              value={formData.fullName}
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
                name="documentNumber"
                value={formData.documentNumber}
                onChange={handleChange}
                className="border rounded-2xl px-3 py-1"
              />
            </label>
            <label className="flex flex-col w-full sm:w-[40%] gap-1.5">
              <p className="font-bold">
                WhatsApp <span className="text-[red]">*</span>
              </p>
              <input
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
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="border rounded-2xl px-3 py-1"
              />
            </label>
            <label className="flex flex-col w-full sm:w-[50%] gap-1.5">
              <p className="font-bold">
                Barrio <span className="text-[red]">*</span>
              </p>
              <input
                name="neighborhood"
                value={formData.neighborhood}
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
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border rounded-2xl px-3 py-1"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <p className="font-bold">Oficina (Opcional)</p>
            <input
              name="officeName"
              value={formData.officeName}
              onChange={handleChange}
              className="border rounded-2xl px-3 py-1"
            />
          </label>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-10">
            <label className="flex flex-col gap-1.5">
              <p className="font-bold">
                Talla <span className="text-[red]">*</span>
              </p>
              <select
                name="selectedSize"
                value={formData.selectedSize}
                onChange={handleChange}
                className="text-white bg-[#273a52] border rounded px-3 py-1"
              >
                {sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1.5">
              <p className="font-bold">
                Color <span className="text-[red]">*</span>
              </p>
              <select
                name="selectedColor"
                value={formData.selectedColor}
                onChange={handleChange}
                className="text-white bg-[#273a52] border rounded px-3 py-1"
              >
                {colors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <button className="bg-[#3ebcba] rounded-2xl mt-3 px-3 py-2 font-semibold cursor-pointer hover:saturate-150 hover:scale-105 duration-300">
            Enviar Información
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
