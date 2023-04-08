import { useSelector } from 'react-redux';

export const TaskList = () => {
  const tasks = useSelector(state => state.data)

  const Task = props => {
    const status = props.status ? 'bg-success' : 'bg-primary'

    return (
      <li className={'list-group-item d-flex justify-content-between align-items-center Task'}>
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
