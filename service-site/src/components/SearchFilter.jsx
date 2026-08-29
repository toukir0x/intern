
export default function SearchFilter({
  search,
  setSearch,
  category,
  setCategory,
  categories,
}) {
  return (
    <div className="filters">
      <h1>filter</h1>
      <div className="search-box">
        <span>⌕</span>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search services..."
        />
      </div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>
    </div>
  );
}
