import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHome, faBook,  faChevronRight } from '@fortawesome/free-solid-svg-icons';
import title from '../assets/image/title.png';

const Sidebar = ({ activePage, setActivePage }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={`bg-[#FFFFFF] ${isOpen ? "w-64" : "w-20"} transition-all duration-300 h-full shadow-xl rounded-md`}>
            <div className="text-white p-10 cursor-pointer flex items-center justify-between" onClick={() => setIsOpen(!isOpen)}>
                <div className="flex items-center">
                    {isOpen && (
                        <div className="flex items-center gap-2">
                            <img src={title} alt="Title" className="h-6" />
                        </div>
                    )}

                </div>
                <FontAwesomeIcon icon={isOpen ?"" : faChevronRight} className="text-gray-600"/>
            </div>
            <ul>
                <li
                    className={`p-4 cursor-pointer flex items-center hover:bg-[#21BAD5] hover:text-white ${activePage === 'Dashboard' ? 'bg-[#21BAD5] text-white' : 'text-gray-600'
                        }`}
                    onClick={() => setActivePage('Dashboard')}
                >
                    <FontAwesomeIcon icon={faHome} className="mr-3" />
                    {isOpen && "Dashboard"}
                </li>
                <li
                    className={`p-4 cursor-pointer flex items-center hover:bg-[#21BAD5] hover:text-white ${activePage === 'Story Management' ? 'bg-[#21BAD5] text-white' : 'text-gray-600'
                        }`}
                    onClick={() => setActivePage('Story Management')}
                >
                    <FontAwesomeIcon icon={faBook} className="mr-3" />
                    {isOpen && "Story Management"}
                </li>
            </ul>


        </div>
    );
};

export default Sidebar;
