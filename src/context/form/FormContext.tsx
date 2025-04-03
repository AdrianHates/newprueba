import { createContext } from "react";

export type Product = {
  talla: string;
  color: string;
};

export type FormData = {
  nombreCompleto: string;
  documento: string;
  whatsapp: string;
  ciudad: string;
  barrio: string;
  direccion: string;
  oficina: string;
  productos: Product[];
};

export type FormContextProps = {
  formData: FormData;
  addProduct: (talla: string, color: string) => void;
  updateFormData: (newData: Partial<FormData>) => void;
  removeProduct: (index: number) => void;  // Función para eliminar un producto
};

export const FormContext = createContext<FormContextProps | undefined>(
  undefined
);
