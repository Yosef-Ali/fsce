import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Control, UseControllerProps, useController } from "react-hook-form";
import * as z from "zod";

type FormFieldProps = {
  control: Control;
  name: string;
  label: string;
  description: string;
  type: string;
  placeholder: string;
  // ... other props
};

const FormField = <T extends z.ZodTypeAny>({
  control,
  name,
  label,
  description,
  type,
  placeholder,
  rows,
}: FormFieldProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <FormItem className="mb-4">
      <FormLabel>{label}</FormLabel>
      <FormControl>
        {type === "input" ? (
          <Input placeholder={placeholder} {...field} />
        ) : (
          <Textarea placeholder={placeholder} {...field} rows={rows} />
        )}
      </FormControl>
      <FormDescription className="text-sm">{description}</FormDescription>
      {error && <FormMessage className="text-sm">{error.message}</FormMessage>}
    </FormItem>
  );
};

export default FormField;
