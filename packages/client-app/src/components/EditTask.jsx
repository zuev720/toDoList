import React, {
  useEffect,
  useState,
} from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchTask } from '../store/toDoSlice';

export const EditTask = () => {
  const { id } = useParams();
  const [taskValue, setTaskValue] = useState('');
  const [taskStatus, setTaskStatus] = useState(false);
  const task = useSelector(state => state.data);
  const dispatch = useDispatch();
console.log(task);
  useEffect(() => {
    dispatch(fetchTask(id));
  }, [dispatch, id]);


  useEffect(() => {
    setTaskValue(task.action);
    const status = task.status ? true : false;
    setTaskStatus(status);
  }, [task]);

  return (
  <form className={'editForm'}>
    <div className={'mb-3'}>
    <label htmlFor={'taskValue'} className={'form-label'}>Task description</label>
    <textarea className={'form-control'} id={'taskValue'} value={taskValue}></textarea>
  </div>
    <div className={'mb-3 form-check'}>
      <input type={'checkbox'} className={'form-check-input'} id={'exampleCheck1'} value={true}/>
      <label className={'form-check-label'} htmlFor={'exampleCheck1'}>Change status</label>
    </div>
    <button type={'submit'} className={'btn btn-primary'}>Submit</button>
  </form>
  )
}
