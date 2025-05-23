import React, { useState } from 'react';
import { useHabits } from '../context/HabitContext';

const HabitInput = () => {
  const [input, setInput] = useState('');
  const { addHabit } = useHabits();

  const handleAdd = () => {
    if (input.trim()) {
      addHabit(input);
      setInput('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add new habit"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add Habit</button>
    </div>
  );
};

export default HabitInput;
