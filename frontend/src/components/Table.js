import React from "react";
import { useNavigate } from "react-router-dom";
import searchIcon from "../assets/icons/search-icon.svg";
import Pagination from "./Pagination";
import { FilterButton } from "./FilterModal";
import AddButton from "./AddButton";

const Table = ({ data, onFilterClick, onAddStoryClick }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredData, setFilteredData] = React.useState(data);
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 20;
  const navigate = useNavigate();

  React.useEffect(() => {
    setFilteredData(
      data.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.writer_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, data]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleRowClick = (id) => {
    navigate(`/editstories/${id}`);
  };

  return (
    <div className="p-4 shadow-lg rounded-xl">
      <div className="flex items-center mb-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search by Writers/Title"
            className="border w-1/4 p-2 pl-10 rounded-xl bg-gray-200"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <img src={searchIcon} alt="search icon" className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6" />
        </div>
        <div className="flex space-x-2 ml-4">
          <FilterButton onClick={onFilterClick} />
          <AddButton link="/addstories" text={"Add Story"} />
        </div>
      </div>
      <table className="w-full text-left border">
        <thead>
          <tr className="border-b">
            <th className="p-2">No</th>
            <th className="p-2">Title</th>
            <th className="p-2">Writers</th>
            <th className="p-2">Category</th>
            <th className="p-2">Keywords</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index} className="border-b cursor-pointer" onClick={() => handleRowClick(item.id)}>
              <td className="p-2">{indexOfFirstItem + index + 1}</td>
              <td className="p-2">{item.title}</td>
              <td className="p-2">{item.writer_name}</td>
              <td className="p-2">{item.category}</td>
              <td className="p-2">
                {item.tags.split(',').map((keyword, idx) => (
                  <span key={idx} className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs mr-2">{keyword}</span>
                ))}
              </td>
              <td className="p-2">
                <span className={`px-2 py-1 text-xs rounded-full ${item.status === 'publish' ? 'bg-green-200 text-green-700' : 'bg-yellow-200 text-yellow-700'}`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Table;
