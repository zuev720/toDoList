import React, {
  useEffect,
  useState,
} from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  useNavigate,
  useParams,
} from 'react-router-dom';

import {
  deleteTask,
  editTask,
  fetchTask,
} from '../store/toDoSlice';

export const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [taskValue, setTaskValue] = useState('');
  const [taskStatus, setTaskStatus] = useState(false);
  const task = useSelector(state => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTask(id));
  }, [dispatch, id]);

  useEffect(() => {
    setTaskValue(task.action);
    const status = task.status ? true : false;
    setTaskStatus(status);
  }, [task])

  const handlerTextArea = e => {
    setTaskValue(e.target.value);
  }

  const handlerCheckStatus = () => {
    if(!taskStatus) {
      setTaskStatus(true)
    } else setTaskStatus(false);
  }


  const handlerSubmit = () => {
    const obj = {
      id: task.id,
      user_name: task.user_name,
      user_email: task.user_email,
      action: taskValue,
      status: taskStatus,
    };

    dispatch(editTask(obj));
    dispatch(fetchTask(task.id));
  }

  const handlerDeleteTask = () => {
    dispatch(deleteTask(task.id));
    navigate('/');
  }

  return (
    <form onSubmit={handlerSubmit} className={'editForm'}>
      <div>
        <h4>{task.user_name}</h4>
      </div>
      <div>
        <h5>{task.user_email}</h5>
      </div>
      <div className={'mb-3'}>
        <label htmlFor={'taskValue'} className={'form-label'}>
          Task description
        </label>
        <textarea
          onChange={handlerTextArea}
          className={'form-control'}
          id={'taskValue'}
          value={taskValue}
        ></textarea>
      </div>
      <div className={'mb-3 form-check'}>
        <input
        onChange={handlerCheckStatus}
          type={'checkbox'}
          className={'form-check-input'}
          id={'exampleCheck1'}
          checked={taskStatus}
        />
        <label className={'form-check-label'} htmlFor={'exampleCheck1'}>
          Current status
        </label>
      </div>
      <div>
      <button type={'submit'} className={'btn btn-primary'}>
        Edit task
      </button>
      <button onClick={handlerDeleteTask} type={'button'} className={'btn btn-danger deleteTask'}>
        Delete task
      </button>
      </div>
    </form>
  )
}
