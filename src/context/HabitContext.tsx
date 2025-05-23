import React, { createContext, useContext, useState } from 'react';

interface Habit {
  id: number;
  name: string;
  completed: boolean;
}

interface HabitContextType {
  habits: Habit[];
  toggleHabit: (id: number) => void;
  addHabit: (name: string) => void;
}

const HabitContext = createContext<HabitContextType>({
  habits: [],
  toggleHabit: () => {},
  addHabit: () => {}
});

export const HabitProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [habits, setHabits] = useState<Habit[]>([]);

  const toggleHabit = (id: number) => {
    setHabits(prev =>
      prev.map(h => h.id === id ? { ...h, completed: !h.completed } : h)
    );
  };

  const addHabit = (name: string) => {
    const newHabit: Habit = {
      id: Date.now(),
      name,
      completed: false
    };
    setHabits(prev => [...prev, newHabit]);
  };

  return (
    <HabitContext.Provider value={{ habits, toggleHabit, addHabit }}>
      {children}
    </HabitContext.Provider>
  );
};

export const useHabits = () => useContext(HabitContext);
