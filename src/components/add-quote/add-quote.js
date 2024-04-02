import React, { useState, useEffect } from "react";

function AddQuote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]); // Placeholder for categories

  useEffect(() => {
    // Fetch categories from your API and setCategories
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your logic to add the quote
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Quote"
        value={quote}
        onChange={(e) => setQuote(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select a category</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button type="submit">Add Quote</button>
    </form>
  );
}

export default AddQuote;
