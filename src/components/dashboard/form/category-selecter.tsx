import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useController } from "react-hook-form";
const categories = {
  ABOUT: "about",
  PROGRAMS: "programs",
  NEWS: "news",
  EVENTS: "events",
  OTHERS: "others",
} as const;

type CategoryValue = (typeof categories)[keyof typeof categories];

const CategorySelector = ({ control }: { control: any }) => {
  const {
    field: { value, onChange },
  } = useController({
    name: "category",
    control,
  });
  return (

    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder="Select category">
          {value ? value : "Select category"}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {Object.values(categories).map((category: CategoryValue) => (
          <SelectItem key={category} value={category}>
            {category}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CategorySelector;