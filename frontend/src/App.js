import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import AddStories from "./components/AddStories";
import EditStories from './components/EditStories';

const App = () => {
  const [activePage, setActivePage] = useState('Story Management');
  
  return (
    <Router>
      <div className="App flex h-screen">
        <Sidebar activePage={activePage} setActivePage={setActivePage}/>
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/addstories" element={<AddStories />} />
            <Route path="/editstories/:id" element={<EditStories />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
