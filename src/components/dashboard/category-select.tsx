import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type CategorySelectProps = {
  options: { value: string; label: string }[];
};


export const CategorySelect = ({ options }: CategorySelectProps) => {
  return (
    <div className="grid gap-3 w-full">
      <Label htmlFor="category">Categories</Label>
      <Select>
        <SelectTrigger id="category" aria-label="Select category">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};