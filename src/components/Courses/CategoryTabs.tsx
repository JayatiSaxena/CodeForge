interface CategoryTabsProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function CategoryTabs({
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategoryTabsProps) {
  return (
    <div className="mb-10 flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
            selectedCategory === category
              ? "bg-red-600 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}