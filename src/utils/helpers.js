// Formats a number as Indian Rupees, e.g. 1299 -> "₹1,299"
export function formatPrice(amount) {
  return `₹${Number(amount).toLocaleString("en-IN")}`;
}

// Returns a shallow-filtered + sorted copy of the product list based on
// the current shop filters. Kept framework-agnostic so it's easy to test.
export function filterAndSortProducts(products, { search, category, gender, maxPrice, sort }) {
  let result = [...products];

  if (search) {
    const term = search.toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
    );
  }

  if (gender && gender !== "All") {
    result = result.filter((p) => p.gender === gender);
  }

  if (category && category !== "All") {
    result = result.filter((p) => p.category === category);
  }

  if (maxPrice) {
    result = result.filter((p) => p.price <= maxPrice);
  }

  switch (sort) {
    case "price-low":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      result.sort((a, b) => b.price - a.price);
      break;
    case "newest":
      result.sort((a, b) => b.id - a.id);
      break;
    default:
      break;
  }

  return result;
}
