import React from "react";
import { useForm } from "react-hook-form";

import { Input } from '../input';

export const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

   const onSubmit = async (data: any) => {
      console.log('data ->', data);
   };

  return (
    <>
      <form
        className="w-full h-full max-w-lg m-auto py-10 mt-10 px-10 border"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <Input
            label="Insira em kilômetros a distância de sua viagem."
            name="kilometers"
            type="number"
            placeholder="Informe a kilometragem."
            register={register}
            required
            errors={errors}
          />
        </div>

        <div>
          <Input
            label="Informe a autonomia do seu veículo em km/l."
            name="autonomy"
            type="number"
            placeholder="14.4"
            required
            register={register}
            errors={errors}
          />
        </div>

        <div>
          <Input
            label="Informe o valor do combustível."
            name="fuelValue"
            type="number"
            placeholder="00,00"
            register={register}
            required
            errors={errors}
          />
        </div>
        

        <button
          className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded"
          type="submit"
        >
          Calcular
        </button>
      </form>
    </>
  );
};
