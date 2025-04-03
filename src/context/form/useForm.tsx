import { useContext } from "react";
import { FormContext } from "./FormContext";

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm debe ser usado dentro de un FormProvider");
  }
  return context;
};