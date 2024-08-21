import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AddButton = ({link, text}) => {
  return (
      <Link to={link} className="flex px-4 py-2 bg-orange-500 hover:bg-orange-700 rounded-full items-center gap-2 text-white font-bold">
        <FontAwesomeIcon icon={faPlus}/>
        {text}
      </Link>
  );
}

export default AddButton;
