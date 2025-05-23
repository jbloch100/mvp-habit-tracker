import React from 'react';
import HabitInput from '../components/HabitInput';
import HabitList from '../components/HabitList';

const HabitPage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Daily Habit Tracker</h1>
      <HabitInput />
      <HabitList />
    </div>
  );
};

export default HabitPage;
