import React from 'react';
import { MantineProvider } from '@mantine/core';
import SettingsProvider from './Contexts/Settings';
import Todo from './Components/Todo';

function App() {

  return (
    <MantineProvider>
      <SettingsProvider>
        <Todo />
      </SettingsProvider>
    </MantineProvider>
  );

}

export default App;