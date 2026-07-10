interface CategoryTabsProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryTabs({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => onCategoryChange("All")}
        className={`rounded-full px-5 py-2 font-medium transition ${
          selectedCategory === "All"
            ? "bg-red-600 text-white shadow-md"
            : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
        }`}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`rounded-full px-5 py-2 font-medium transition ${
            selectedCategory === category
              ? "bg-red-600 text-white shadow-md"
              : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}