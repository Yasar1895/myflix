import React, { useState } from 'react';

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav style={{ padding: '20px', background: '#111', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>Netflix Clone</h1>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={handleChange}
        style={{ padding: '5px 10px', borderRadius: '5px', border: 'none' }}
      />
    </nav>
  );
}