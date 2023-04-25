import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Input } from '../input';
import { Button } from '@material-tailwind/react'
import { formatCurrency } from "@/utils";

interface IFormProps {
  kilometers: number;
  autonomy: number;
  fuelValue: number;
}

export const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormProps>();
  const [ travelCost, setTravelCost ] = useState<number>();

  console.log('errors', errors);

  const onSubmit = async ({
  autonomy,
  fuelValue,
  kilometers
  }: IFormProps) => {
    const calculatedTravelCost = (kilometers / autonomy) * fuelValue;
    setTravelCost(calculatedTravelCost);
  };

  return (
    <div className="w-full h-screenh max-w-lg m-auto py-10 mt-10 px-10">
      <form
        // className="w-full h-screenh max-w-lg m-auto py-10 mt-10 px-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mt-4">
          <Input
            label="Insira em kilômetros a distância de sua viagem."
            type="number"
            name="kilometers"
            step="any"
            placeholder="Informe a kilometragem."
            required
            register={register}
            errors={errors}
          />
        </div>

        <div className="mt-4">
          <Input
            label="Informe a autonomia do seu veículo em km/l."
            type="number"
            name="autonomy"
            step="any"
            placeholder="14.4"
            required
            errors={errors}
            register={register}
          />
        </div>

        <div className="mt-4">
          <Input
            label="Informe o valor do combustível."
            type="number"
            name="fuelValue"
            step="any"
            placeholder="00,00"
            required
            errors={errors}
            register={register}
          />
        </div>

        <Button
          className="mt-4 w-full font-semibold text-sm rounded"
          type="submit"
        >
          Calcular
        </Button>
      </form>

      {travelCost && (
        <div className="text-gray-600 font-medium mt-6 text-lg">
          Sua viagem custará {formatCurrency(travelCost)}
        </div>
      )}
    </div >
  );
};
