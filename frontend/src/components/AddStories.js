import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import CreatableSelect from 'react-select/creatable';

const AddStories = () => {
  const navigate = useNavigate();
  const [selectedTags, setSelectedTags] = useState([]);
  const [title, setTitle] = useState('');
  const [writer, setWriter] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [category, setCategory] = useState('Teen Fiction');
  const [coverImage, setCoverImage] = useState('');
  const [status, setStatus] = useState('publish');

  const handleCancel = () => {
    navigate('/');
  };

  const handleTagsChange = (tags) => {
    setSelectedTags(tags);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const story = {
      title,
      writer_name: writer,
      synopsis,
      category,
      tags: selectedTags.map(tag => tag.value).join(','),
      cover_image: coverImage,
      status
    };

    try {
      const response = await fetch('http://localhost:5000/stories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(story),
      });

      if (response.ok) {
        navigate('/');
      } else {
        console.error('Failed to add story:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const customStyles = {
    multiValue: (styles) => {
      return {
        ...styles,
        backgroundColor: '#ffb347',
        borderRadius: '20px',
        padding: '2px',
      };
    },
    multiValueLabel: (styles) => ({
      ...styles,
      color: '#ffffff',
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      color: '#ffffff',
      ':hover': {
        backgroundColor: '#ff6347',
        color: 'white',
      },
    }),
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-start flex-col px-7 py-4 mb-4 gap-3">
        <h1 className="text-2xl font-bold text-gray-600 ">Add Stories</h1>
        <div>
          <button onClick={handleCancel} className="text-gray-900 font-bold px-4 py-1 rounded-full bg-gray-300 mb-4 text-sm">← Back</button>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-bold text-gray-700">Title</label>
            <input 
              type="text" 
              placeholder="Title" 
              className="mt-1 p-2 border rounded w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700">Writer Name</label>
            <input 
              type="text" 
              placeholder="Writer Name" 
              className="mt-1 p-2 border rounded w-full"
              value={writer}
              onChange={(e) => setWriter(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block font-bold text-gray-700">Synopsis</label>
          <textarea 
            placeholder="Synopsis" 
            className="mt-1 p-2 border rounded w-full" 
            rows="4"
            value={synopsis}
            onChange={(e) => setSynopsis(e.target.value)}
          ></textarea>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-bold text-gray-700">Category</label>
            <select 
              className="mt-1 p-2 border rounded w-full"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Teen Fiction">Teen Fiction</option>
              <option value="Romance">Romance</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Non Fiction">Non Fiction</option>
            </select>
          </div>
          <div>
            <label className="block font-bold text-gray-700">Tags/Keywords Story</label>
            <CreatableSelect
              isMulti
              value={selectedTags}
              onChange={handleTagsChange}
              className="mt-1"
              classNamePrefix="select"
              placeholder="Type and press enter..."
              styles={customStyles}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-bold text-gray-700">Cover Image</label>
            <input 
              type="text" 
              placeholder="Cover Image URL" 
              className="mt-1 p-2 border rounded w-full"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700">Status</label>
            <select 
              className="mt-1 p-2 border rounded w-full"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="publish">Publish</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-950 font-bold px-4 py-2 rounded-full" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-6 py-2 rounded-full">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddStories;
