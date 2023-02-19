function Category({ categories, setCategory }) {
  console.log("categories-rerender");
  return (
    <div className="btn-container">
      {categories.map((category, idx) => (
        <button
          key={idx}
          className="filter-btn"
          onClick={() => setCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Category;
