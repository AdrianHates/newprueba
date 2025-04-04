import { useState } from "react";
import { FormContext, FormData } from "./FormContext"; // Importamos el contexto

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState<FormData>({
    nombreCompleto: "",
    documento: "",
    whatsapp: "",
    ciudad: "",
    barrio: "",
    direccion: "",
    oficina: "",
    productos: [],
    observaciones: "",
  });

  const updateFormData = (newData: Partial<FormData>) => {
    setFormData((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  const addProduct = (talla: string, color: string) => {
    setFormData((prev) => ({
      ...prev,
      productos: [...prev.productos, { talla, color }],
    }));
  };

  const removeProduct = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      productos: prev.productos.filter((_, i) => i !== index),
    }));
  };

  return (
    <FormContext.Provider
      value={{ formData, addProduct, updateFormData, removeProduct }}
    >
      {children}
    </FormContext.Provider>
  );
};
