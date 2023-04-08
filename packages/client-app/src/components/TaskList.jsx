import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const TaskList = () => {
  const navigate = useNavigate();
  const tasks = useSelector(state => state.data);

  const Task = props => {
    const status = props.status ? 'bg-success' : 'bg-primary';
    const handleTaskClick = (id) => {
      navigate(`/edit/${id}`)
    }

    return (
      <li onClick={() => handleTaskClick(props.id)} className={'list-group-item d-flex justify-content-between align-items-center Task'}>
        <div>
          <p>{props.user_name}</p>
          <p>{props.user_email}</p>
        </div>
        <div>{props.action}</div>
        <span className={`badge ${status} rounded-pill`}>status</span>
      </li>
    )
  }

  console.log(tasks)
  return (
    <ul className={'list-group taskList'}>
      {tasks.map(elem => (
        <Task key={elem.id} {...elem} />
      ))}
    </ul>
  )
}
