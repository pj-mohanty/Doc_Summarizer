// 

import React, { useState } from 'react';
import './PaperList.css';

const data = [
  { id: 1, title: 'Paper 1', description: 'Title, 1' },
  { id: 2, title: 'Paper 2', description: 'Title, 2' },
  { id: 3, title: 'Paper 3', description: 'Title, 3' },
  { id: 4, title: 'Paper 4', description: 'Title, 4' },
  // { id: 5, title: 'Paper 5', description: 'Title, 5' },
  // { id: 6, title: 'Paper 6', description: 'Title, 6' },
  // { id: 7, title: 'Paper 7', description: 'Title, 7' },
  // { id: 8, title: 'Paper 8', description: 'Title, 8' },
];

const Paper = ({ title, description, id, handleDelete, handleDisscuss }) => (
  <div className="paper">
    <h3>{title}</h3>
    <p>{description}</p>
    <button onClick={() => handleDisscuss (id)} className="discuss-btn">Discuss</button>
    <button onClick={() => handleDelete(id)} className="delete-btn">Delete</button> 
  </div>
);

const PaperList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newPdfLink, setNewPdfLink] = useState('');  
  const [newQuestion, setNewQuestion] = useState('');

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredData(data.filter(item => item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query)));
  };

  const handleAddCard = () => {
    if (newTitle && newDescription) {
      const newCard = {
        id: data.length + 1, 
        title: newTitle,
        description: newDescription
      };
      data.push(newCard);
      setFilteredData([...data]);
      setNewTitle('');
      setNewDescription('');
    }
  };

  const handleDelete = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setFilteredData(updatedData);
  };
  const handleDisscuss  = (id) => {
    console.log(`Start discussion for Paper ID: ${id}`);
  };

  return (
    <div className="app">
      {/* Header */}
      <h1 className="header">Discussion Forum</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search papers..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      
      <h2 className="header">your post</h2>
      
      {/* Add New Card Form */}
      <div className="add-card">
        <input
          type="text"
          placeholder="Enter title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter PDF Link"
          value={newPdfLink}
          onChange={(e) => setNewPdfLink(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ask a question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <button onClick={handleAddCard} className="add-btn">Add Paper</button>
      </div>


      {/* Cards Grid */}
      <div className="cards-container">
        {filteredData.map((paper) => (
          <Paper
            key={paper.id}
            title={paper.title}
            description={paper.description}
            id={paper.id}
            handleDisscuss={handleDisscuss }
            handleDelete={handleDelete}
            
          />
        ))}
      </div>
      <h2 className="header">Explore More Papers</h2>
      <div className="cards-container">
        {filteredData.map((paper) => (
          <Paper
            key={paper.id}
            title={paper.title}
            description={paper.description}
            id={paper.id}
            handleDisscuss={handleDisscuss }
            
          />
        ))}
      </div>
    </div>
  );
};

export default PaperList;

