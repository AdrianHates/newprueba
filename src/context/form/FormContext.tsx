import { createContext } from "react";

interface Product {
  talla: string;
  color: string;
}

export interface FormData {
  nombreCompleto: string;
  documento: string;
  whatsapp: string;
  ciudad: string;
  barrio: string;
  direccion: string;
  oficina: string;
  productos: Product[];
}

interface FormContextProps {
  formData: FormData;
  addProduct: (talla: string, color: string) => void;
  updateFormData: (newData: Partial<FormData>) => void;
}

export const FormContext = createContext<FormContextProps | undefined>(
  undefined
);
