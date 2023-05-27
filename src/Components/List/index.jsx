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



// {paginate(list, currentPosition, settings.itemsToDisplay).map(item => (
//   <div key={item.id}>
//     <p>{item.text}</p>
//     <p><small>Assigned to: {item.assignee}</small></p>
//     <p><small>Difficulty: {item.difficulty}</small></p>
//     <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
//     <hr />
//   </div>
// ))}

// <Pagination
//   onChange={(page) => setCurrentPosition(page)}
//   total={calculateTotal()}
//   color="indigo"
//   size="lg"
//   radius="md"
//   initialPage={currentPosition} />
// </>