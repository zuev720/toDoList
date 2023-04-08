import React, {
  useEffect,
  useState,
} from 'react';

import { useDispatch } from 'react-redux';

import {
  createTask,
  fetchTasks,
} from '../store/toDoSlice';
import { TaskList } from './TaskList';

export const MainPage = () => {

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userTask, setUserTask] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
}, [dispatch]);

const handleUserNameChange = (e) => {
  setUserName(e.target.value);
}

const handleUserEmailChange = (e) => {
  setUserEmail(e.target.value);
}

const handleUserTaskChange = (e) => {
  setUserTask(e.target.value);
}

const handleSubmit = (e) => {
  const obj = {
    user_name: userName,
    user_email: userEmail,
    action: userTask
  };
  dispatch(createTask(obj))
  // debugger;
}

  return (
    <div className={'toDoWrapper'}>
      <form onSubmit={handleSubmit} className={'taskForm'}>
        <input onChange={handleUserNameChange} type={'text'} className={'userName'} value={userName}/>
        <input onChange={handleUserEmailChange}  className={'userEmail'} value={userEmail} />
        <textarea onChange={handleUserTaskChange} className={'userTask'} value={userTask}/>
        <button type={'submit'} className={'btn btn-primary'} onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <TaskList />
    </div>
  )
}