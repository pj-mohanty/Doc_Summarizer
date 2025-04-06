import React, { useState } from 'react';
import './PaperList.css';

const data = [
  { id: 1, title: 'Paper 1', description: 'Title, 1' },
  { id: 2, title: 'Paper 2', description: 'Title, 2' },
  { id: 3, title: 'Paper 3', description: 'Title, 3' },
  { id: 4, title: 'Paper 4', description: 'Title, 4' },
  { id: 5, title: 'Paper 5', description: 'Title, 5' },
  { id: 6, title: 'Paper 6', description: 'Title, 6' },
  { id: 7, title: 'Paper 7', description: 'Title, 7' },
  { id: 8, title: 'Paper 8', description: 'Title, 8' },
];

const Paper = ({ title, description }) => (
  <div className="paper">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const PaperList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    setFilteredData(data.filter(item => item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query)));
  };

  return (
    <div className="app">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search papers..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <div className="cards-container">
        {filteredData.map((paper) => (
          <Paper key={paper.id} title={paper.title} description={paper.description} />
        ))}
      </div>
    </div>
  );
};

export default PaperList;
