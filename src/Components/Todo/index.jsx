import React, { useEffect, useState } from 'react';
import useForm from '../../Contexts/hooks/form';

// import AuthProvider from '../../Contexts/Auth';
// import Login from '../../Contexts/Auth/Login';

import Header from '../Header';
import Footer from '../Footer';
import List from '../List';

import { v4 as uuid } from 'uuid';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SettingsPage from '../Settings';
import ItemForm from '../Form';
import { Group, Container, Title } from '@mantine/core';

const Todo = () => {

  // keep
  const [defaultValues] = useState({ difficulty: 4 });

  // keep
  const [list, setList] = useState([]);

  // keep
  const [incomplete, setIncomplete] = useState([]);

  // keep
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });
    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);

  return (
    <>
      {/* <AuthProvider> */}
      <Header data-testid="todo-header">
        {/* <Login /> */}
      </Header>
      <BrowserRouter>
        <Routes>
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/" element={
            <>
              <Container style={{ backgroundColor: "#333", color: "#eee", padding: "2rem" }}>
                <Title order={2} align="left">
                  To Do List: {incomplete} items pending
                </Title>
              </Container>
              <Group position="apart" grow style={{ margin: "1rem 5rem" }}>
                <ItemForm handleSubmit={handleSubmit} handleChange={handleChange} incomplete={incomplete} />
                <List data={list} toggleComplete={toggleComplete} deleteItem={deleteItem} />
              </Group>
            </>
          } />
        </Routes>
      </BrowserRouter>
      <Footer />
      {/* </AuthProvider> */}

    </>
  );
};

export default Todo;
