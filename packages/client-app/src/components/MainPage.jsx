import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { fetchTasks } from '../store/toDoSlice';
import { TaskList } from './TaskList';

export const MainPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
}, [dispatch]);

  return (
    <div className={'toDoWrapper'}>
      <form className={'taskForm'}>
        <input type={'text'} className={'userName'} />
        <input type={'email'} className={'userEmail'} />
        <textarea className={'userTask'} />
        <button type={'submit'} className={'btn btn-primary'}>
          Submit
        </button>
      </form>
      <TaskList />
    </div>
  )
}

