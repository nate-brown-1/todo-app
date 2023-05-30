import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../..';
// import Auth from '../Contexts/Auth/Auth';
import { SettingsContext } from '../../Contexts/Settings';
import { Pagination, Container } from '@mantine/core';
import Task from '../Task';

function List(props) {

  // reaching up into our cloud
  // let { isLoggedIn, can, user } = useContext(AuthContext);

  // console.log(can('read'));
  // console.log('Are we logged in??', isLoggedIn);
  // console.log('Who is the current user', user);

  const settings = useContext(SettingsContext);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [taskList, setTaskList] = useState([]);
  const [start, setStart] = useState(settings.itemsPerPage * (activePage - 1));
  const [end, setEnd] = useState(start + settings.itemsPerPage);

  useEffect(() => {
    setStart(settings.itemsPerPage * (activePage - 1))
  }, [activePage, settings.itemsPerPage])

  useEffect(() => {
    setEnd(start + settings.itemsPerPage)
  }, [start, settings.itemsPerPage])


  useEffect(() => {
    props.data.sort((a, b) => {
      if (a[settings.sortBy] < b[settings.sortBy]){
        return -1;
      } else if (a[settings.sortBy] > b[settings.sortBy]){
        return 1;
      } else return 0;
    })
  }, [props.data, settings.sortBy])


  useEffect(() => {
    settings.hideCompleted
    ?
    setTaskList(props.data.filter(item => !item.complete).slice(start, end))
    :
    setTaskList(props.data.slice(start, end));
  }, [settings.hideCompleted, props.data, start, end])

  useEffect(() => {
    settings.hideCompleted
    ?
    setTotalPages(Math.ceil((props.data.filter(item => !item.complete).length) / settings.itemsPerPage))
    :
    setTotalPages(Math.ceil(props.data.length / settings.itemsPerPage))
  }, [props.data, settings.hideCompleted, settings.itemsPerPage])

  return (
    // <Auth capability='read'>
    <Container style={{minWidth: "65%"}}>
      {taskList.map(item => {
        return <Task item={item} toggleComplete={props.toggleComplete} deleteItem={props.deleteItem} />
      })}
      <Pagination value={activePage} onChange={setActivePage} total={totalPages} />
      </Container>
    // </Auth>
  )

}

export default List;
