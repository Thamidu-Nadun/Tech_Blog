import React from "react";

function CategoryCard({
  category_name = "Default Category",
  category_count = 0,
  category_color = "text-orange-500",
  CategoryIcon = "Globe",
}) {
  return (
    <div className="relative shine-effect border-2 border-orange-900/30 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-1000 group cursor-pointer bg-black ease-in-out">
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-lg bg-gradient-to-r from-orange-600/20 to-amber-500/20 border border-orange-500/30">
          <CategoryIcon className={`w-6 h-6 ${category_color}`} />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors">
        {category_name}
      </h3>
      <p className="text-gray-400 text-sm">{category_count} articles</p>
    </div>
  );
}

export default CategoryCard;
