const GENDERS = ["All", "Men", "Women", "Accessories"];

const CATEGORIES_BY_GENDER = {
  All: ["All"],
  Men: ["All", "Shirts", "Oversized Tees", "Hoodies", "Jackets", "Jeans"],
  Women: ["All", "Dresses", "Tops", "Jackets", "Denim", "Skirts"],
  Accessories: ["All", "Watches", "Bags", "Caps", "Sunglasses", "Jewelry"],
};

const SORT_OPTIONS = [
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
];

export default function FilterPanel({ filters, setFilters }) {
  const categoryOptions = CATEGORIES_BY_GENDER[filters.gender] || ["All"];

  const handleGenderChange = (gender) => {
    setFilters((f) => ({ ...f, gender, category: "All" }));
  };

  return (
    <aside className="filter-panel">
      <div className="filter-group">
        <h4>Gender</h4>
        <div className="filter-chips">
          {GENDERS.map((g) => (
            <button
              key={g}
              className={`filter-chip ${filters.gender === g ? "is-active" : ""}`}
              onClick={() => handleGenderChange(g)}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h4>Category</h4>
        <div className="filter-chips">
          {categoryOptions.map((c) => (
            <button
              key={c}
              className={`filter-chip ${filters.category === c ? "is-active" : ""}`}
              onClick={() => setFilters((f) => ({ ...f, category: c }))}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h4>Max Price: ₹{filters.maxPrice.toLocaleString("en-IN")}</h4>
        <input
          type="range"
          min="400"
          max="4000"
          step="100"
          value={filters.maxPrice}
          onChange={(e) =>
            setFilters((f) => ({ ...f, maxPrice: Number(e.target.value) }))
          }
        />
      </div>

      <div className="filter-group">
        <h4>Sort By</h4>
        <select
          value={filters.sort}
          onChange={(e) => setFilters((f) => ({ ...f, sort: e.target.value }))}
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <button
        className="btn btn-outline btn-block"
        onClick={() =>
          setFilters({
            search: "",
            gender: "All",
            category: "All",
            maxPrice: 4000,
            sort: "newest",
          })
        }
      >
        Reset Filters
      </button>
    </aside>
  );
}
