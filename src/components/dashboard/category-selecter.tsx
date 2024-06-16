import { Controller, Control } from "react-hook-form";
//
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";

interface CategorySelectorProps {
  control: Control<any>; // or replace 'any' with the actual type of your form values
}

const categories = ["ABOUT", "PROGRAMS", "NEWS", "EVENTS", "OTHERS"];

const CategorySelector: React.FC<CategorySelectorProps> = ({ control }) => {
  return (
    <Controller
      control={control}
      name="category"
      render={({ field }) => (
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
  );
};

export default CategorySelector;
