import styles from './App.module.css'
import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom'

// import getBooks from './services/books';

import Landing from './components/Landing/Landing';

const App = () => {

  return (
    <main className={styles.app}>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </main>
  );
}

export default App;
