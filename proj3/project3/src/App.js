import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import GoalList from './components/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

function App() {
  const [courseGoals, setCourseGoals] = useState
  ([
    {id: 'cg1', text: 'Finish the course'},
    {id: 'cg2', text: 'Finish the Project'},
  ]);

  const addNewGoalHandler = (newGoal) => {
    //setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) =>  prevCourseGoals.concat(newGoal));
  };

  return (
    <div className="course-goals">
      <h2>Course goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
      
    </div>
  );
}

export default App;
