// List

import React, { useContext, useEffect, useState } from 'react';
import { SettingsContext } from '../../Context/Settings';


function List (props) {

  const settings = useContext(SettingsContext);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [taskList, setTaskList] = useState([]);
  const [start, setStart] = useState(settings.itemsPerPage * (activePage - 1));
  const [end, setEnd] = useState(start + settings.itemsPerPage);
  
  useEffect(() => {
    setStart(settings.itemsPerPage * (activePage - 1))
    }, [activePage, settings.itemsPerPage])

  return (
    <div>
      <p>List</p>
    </div>
  )
}

export default List;
