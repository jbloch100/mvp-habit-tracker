import React from 'react';
import HabitPage from './pages/HabitPage';
import { HabitProvider } from './context/HabitContext';

function App() {
  return (
    <HabitProvider>
      <HabitPage />
    </HabitProvider>
  );
}

export default App;