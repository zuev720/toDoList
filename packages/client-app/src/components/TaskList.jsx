import { useSelector } from 'react-redux';

export const TaskList = () => {
  const tasks = useSelector(state => state.data)
  console.log(tasks)
  return (
    <ul className='list-group taskList'>
      <li class='list-group-item d-flex justify-content-between align-items-center'>
        A list item
        <span class='badge bg-primary rounded-pill'>14</span>
      </li>
    </ul>
    // <div className={'list-group taskList'}>
    //   <Link
    //     href='#'
    //     class='list-group-item list-group-item-action active'
    //     aria-current='true'
    //   >
    //     <div class='d-flex w-100 justify-content-between'>
    //       <h5 class='mb-1'>List group item heading</h5>
    //       <small>3 days ago</small>
    //     </div>
    //     <p class='mb-1'>Some placeholder content in a paragraph.</p>
    //     <small>And some small print.</small>
    //   </Link>
    // </div>
  )
}
