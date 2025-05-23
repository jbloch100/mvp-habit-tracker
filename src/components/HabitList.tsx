import React from 'react';
import { useHabits } from '../context/HabitContext';

const HabitList = () => {
  const { habits, toggleHabit } = useHabits();

  return (
    <ul>
      {habits.map(habit => (
        <li key={habit.id}>
          <label>
            <input
              type="checkbox"
              checked={habit.completed}
              onChange={() => toggleHabit(habit.id)}
            />
            {habit.name}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default HabitList;
