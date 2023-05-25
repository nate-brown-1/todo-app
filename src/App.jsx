import React from 'react';
import SettingsProvider from './context/settings';
import Todo from './Components/Todo';

export default class App extends React.Component {
  render() {
    return (
      <SettingsProvider>
        <Todo />
      </SettingsProvider>
    );
  }
}
