// components/Categories.tsx
import React, { FC } from 'react';

const Categories: FC = () => {
  const categories = [
    { name: 'Programs', postCount: 2 },
    { name: 'Events', postCount: 10 },
    { name: 'News', postCount: 7 },
    { name: 'Success Stores', postCount: 4 }
  ];

  return (
    <div>
      <h2 className="scroll-m-20 text-xl font-semibold tracking-tight text-center">Categories</h2>
      <ul className="divide-y divide-gray-200">
        {categories.map((category, index) => (
          <li key={index} className="flex">
            <a href="" className="leading-7 [&:not(:first-child)]:mt-6 py-2 block flex-1">
              {category.name}
            </a>
            <span className="text-gray-700 text-lg font-thin p-2">{category.postCount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;