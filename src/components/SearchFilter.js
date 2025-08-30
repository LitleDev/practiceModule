import React, { useState, useEffect } from 'react';

const Search = () => {
  const data = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape', 'Guava'];
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (search.trim() === '') {
        setFilteredData([]);
        setShowDropdown(false);
        return;
      }

      const results = data.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(results);
      setShowDropdown(true);
    }, 300);

    return () => clearTimeout(handler);
  }, [search]);

  const handleSelect = (item) => {
    setSearch(item);
    setShowDropdown(false);
  };

  return (
    <div style={{ position: 'relative', width: '300px' }}>
      <input
        type="text"
        placeholder="Search here"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: '100%', padding: '8px' }}
      />

      {showDropdown && filteredData.length > 0 && (
        <ul
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'white',
            border: '1px solid #ccc',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            maxHeight: '150px',
            overflowY: 'auto',
            zIndex: 1000,
          }}
        >
          {filteredData.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelect(item)}
              style={{
                padding: '8px',
                cursor: 'pointer',
                borderBottom: '1px solid #eee',
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
