// import { Controller, Control } from "react-hook-form";
// //
// import {
//   Select,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
// } from "@/components/ui/select";

// interface CategorySelectorProps {
//   control: Control<any>; // or replace 'any' with the actual type of your form values
// }

// const categories = ["ABOUT", "PROGRAMS", "NEWS", "EVENTS", "OTHERS"];

// const CategorySelector: React.FC<CategorySelectorProps> = ({ control }) => {
//   return (
//     <Controller
//       control={control}
//       name="category"
//       render={({ field }) => (
//         <Select onValueChange={field.onChange} defaultValue={field.value}>
//           <SelectTrigger>
//             <SelectValue placeholder="Select a category" />
//           </SelectTrigger>
//           <SelectContent>
//             {categories.map((category) => (
//               <SelectItem key={category} value={category}>
//                 {category}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       )}
//     />
//   );
// };

// export default CategorySelector;

// import React, { useEffect } from 'react';
// import { Control, useController } from 'react-hook-form';
// import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// interface CategorySelectorProps {
//   control: Control<any>;
//   categories: { _id: string; title: string }[];
// }

// const CategorySelector: React.FC<CategorySelectorProps> = ({ control, categories }) => {
//   const {
//     field: { onChange, value },
//     fieldState: { error }
//   } = useController({
//     name: 'category',
//     control,
//     rules: { required: 'Category is required' },
//   });

//   useEffect(() => {
//     if (categories.length > 0 && !value) {
//       onChange(categories[0].title);
//     }
//   }, [categories, value, onChange]);

//   return (
//     <FormItem>
//       <FormLabel>Category</FormLabel>
//       <Select onValueChange={onChange} value={value}>
//         <FormControl>
//           <SelectTrigger>
//             <SelectValue placeholder="Select a category" />
//           </SelectTrigger>
//         </FormControl>
//         <SelectContent>
//           {categories.map((category) => (
//             <SelectItem key={category._id} value={category.title}>
//               {category.title}
//             </SelectItem>
//           ))}
//         </SelectContent>
//       </Select>
//       {error && <FormMessage>{error.message}</FormMessage>}
//     </FormItem>
//   );
// };

// export default CategorySelector;

import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface CategorySelectorProps {
  control: Control<any>;
  categories: { _id: string; title: string }[];
  defaultValue?: string;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ control, categories, defaultValue }) => {
  return (
    <Controller
      name="category"
      control={control}
      defaultValue={defaultValue || (categories[0] && categories[0].title)}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Category</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category._id} value={category.title}>
                  {category.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CategorySelector;