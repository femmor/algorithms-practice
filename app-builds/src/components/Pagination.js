import { useState, useEffect } from 'react';
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const Pagination = () => {
  const [tasks, setTasks] = useState([]);
  const [tasksPerPage, setTasksPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchTasks = async () => {
    try {
      const resp = await axios.get(apiUrl);
      const { data } = resp;
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const totalNumOfPages = Math.ceil(tasks.length / tasksPerPage);

  const pages = [...Array(totalNumOfPages + 1).keys()].slice(1);

  const indexOfLastTask = currentPage + tasksPerPage;
  const indexofFirstTask = indexOfLastTask - tasksPerPage;

  const visibleTasks = tasks.slice(indexofFirstTask, indexOfLastTask);

  const handlePrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage !== totalNumOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className='container'>
      <h1>Pagination</h1>
      <select
        class='form-select'
        aria-label='Select tasks to display'
        onChange={(e) => setTasksPerPage(e.target.value)}
      >
        <option selected>Select how many tasks to display</option>
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='30'>30</option>
        <option value='40'>40</option>
        <option value='50'>50</option>
      </select>
      <div>
        {visibleTasks.map((task) => {
          return <p key={task.id}>{task.title}</p>;
        })}
      </div>
      <nav aria-label='Page navigation'>
        <ul className='pagination' onClick={handlePrevPage}>
          <li
            className={`page-item ${currentPage === 1 && 'disabled'}`}
          >
            <a className='page-link'>Previous</a>
          </li>
          {pages?.map((page, idx) => {
            return (
              <li
                className={`page-item ${
                  page === currentPage ? 'active' : null
                }`}
                key={idx}
                onClick={() => setCurrentPage(page)}
              >
                <a className='page-link'>{page}</a>
              </li>
            );
          })}
          <li
            className={`page-item ${
              currentPage === totalNumOfPages && 'disabled'
            }`}
            onClick={handleNextPage}
          >
            <a className='page-link'>Next</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
