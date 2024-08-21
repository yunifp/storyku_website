import React, { useState, useEffect } from 'react';
import Table from "../components/Table";
import { FilterModal } from "../components/FilterModal";

const Dashboard = () => {
  const [stories, setStories] = useState([]);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch('http://localhost:5000/stories');
        const data = await response.json();
        setStories(data);
        setFilteredData(data); 
      } catch (error) {
        console.error('Error fetching stories:', error);
      }
    };

    fetchStories();
  }, []);

  const applyFilter = (filters) => {
    const { category, status } = filters;
    setFilteredData(
      stories.filter(item => 
        (!category || item.category === category) &&
        (!status || item.status === status)
      )
    );
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-600 px-7 py-4">Stories</h1>
        </div>
        <Table 
          data={filteredData} 
          onFilterClick={() => setIsFilterModalOpen(true)} 
          onAddStoryClick={() => {}} 
        />
      </div>
      <FilterModal 
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        applyFilter={applyFilter}
      />
    </div>
  );
}

export default Dashboard;
