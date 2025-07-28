import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

const App = () => {
  return (
    <>
      <Sidebar />
      <Main tasks={tasks} /> {/* Pass tasks as prop to Main */}
    </>
  );
};

export default App;