import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import ProductGrid from "../components/ProductGrid";
import { products } from "../data/products";
import { filterAndSortProducts } from "../utils/helpers";

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialGender = searchParams.get("gender") || "All";

  const [filters, setFilters] = useState({
    search: "",
    gender: initialGender,
    category: "All",
    maxPrice: 4000,
    sort: "newest",
  });

  // Keep the gender filter in sync if the user arrives via a footer/hero link
  useEffect(() => {
    const gender = searchParams.get("gender");
    if (gender) {
      setFilters((f) => ({ ...f, gender, category: "All" }));
    }
  }, [searchParams]);

  const filteredProducts = useMemo(
    () => filterAndSortProducts(products, filters),
    [filters]
  );

  return (
    <section className="section shop-page">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">The Full Closet</span>
            <h2>Shop All Products</h2>
          </div>
          <SearchBar
            value={filters.search}
            onChange={(search) => setFilters((f) => ({ ...f, search }))}
          />
        </div>

        <div className="shop-layout">
          <FilterPanel filters={filters} setFilters={setFilters} />

          <div className="shop-results">
            <p className="shop-results__count">
              {filteredProducts.length} item
              {filteredProducts.length !== 1 ? "s" : ""} found
            </p>
            <ProductGrid
              products={filteredProducts}
              emptyMessage="Try adjusting your filters or search term."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
