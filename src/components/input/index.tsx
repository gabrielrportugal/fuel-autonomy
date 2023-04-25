import { InputHTMLAttributes, FC } from "react"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  defaultValue?: string;
  required?: boolean;
  errors?: FieldErrors<FieldValues>;
}


export const Input: FC<InputProps> = ({
  name, 
  label,
  placeholder = '',
  register,
  defaultValue = '',
  required = false, 
  errors,
  ...rest
}) => {

  return (
    <>
      <label className="text-gray-600 font-medium">{label}</label>
      <input
        className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
        placeholder={placeholder}
        defaultValue={defaultValue}
        autoFocus
        {...register(name,  { required })}
        {...rest}
      />
      {errors && errors[name]?.type === "required" && (
        <div className="mb-3 text-normal text-red-500">
          {`Este campo é obrigatório.`}
        </div>
      )}
      {errors && errors[name] && (
        <div className="mb-3 text-normal text-red-500">
          {`${errors[name]?.message}`}
        </div>
      )}
    </>
  )
}