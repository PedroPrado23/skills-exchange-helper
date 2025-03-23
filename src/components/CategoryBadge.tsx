
import React from "react";
import { CategoryType } from "@/lib/data";
import { cn } from "@/lib/utils";

interface CategoryBadgeProps {
  category: CategoryType;
  className?: string;
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category, className }) => {
  const Icon = category.icon;
  
  return (
    <div 
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium glass",
        className
      )}
    >
      <Icon className="h-3.5 w-3.5" />
      <span>{category.name}</span>
    </div>
  );
};

export default CategoryBadge;
