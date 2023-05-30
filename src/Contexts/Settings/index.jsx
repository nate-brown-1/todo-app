import React, { useEffect } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {

  const [itemsPerPage, setItemsPerPage] = React.useState(3);
  const [hideCompleted, setHideCompleted] = React.useState(true);
  const [sortBy, setSortBy] = React.useState('difficulty');

  const saveSettingsToLocalStorage = () => {
    localStorage.setItem('toDoSettings', JSON.stringify({
      itemsPerPage: itemsPerPage,
      hideCompleted: hideCompleted,
      sortBy: sortBy.toLowerCase()
    }))
  }

  useEffect(() => {
    if (localStorage.getItem('toDoSettings')) {
      let savedSettings = JSON.parse(localStorage.getItem('toDoSettings'));
      setItemsPerPage(savedSettings.itemsPerPage);
      setHideCompleted(savedSettings.hideCompleted);
      setSortBy(savedSettings.sortBy);
    }
  }, [])

  return (
    <SettingsContext.Provider value={{ itemsPerPage, setItemsPerPage, hideCompleted, setHideCompleted, sortBy, setSortBy, saveSettingsToLocalStorage }}>
      {props.children}
    </SettingsContext.Provider>
  )

}

export default SettingsProvider;