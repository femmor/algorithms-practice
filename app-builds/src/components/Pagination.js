import { useState, useEffect } from 'react';
import axios from 'axios';

const Pagination = () => {
  const [tasks, setTasks] = useState([]);
  const [tasksPerPage, setTasksPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchTasks = async () => {
    try {
      const resp = await axios.get(
        `https://jsonplaceholder.typicode.com/todos`
      );
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

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;

  const visibleTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

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
        className='form-select'
        aria-label='Select tasks to display'
        onChange={(e) => setTasksPerPage(e.target.value)}
      >
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
        <ul className='pagination'>
          <li
            className={`page-item ${currentPage === 1 && 'disabled'}`}
          >
            <button className='page-link' onClick={handlePrevPage}>
              Previous
            </button>
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
          >
            <button className='page-link' onClick={handleNextPage}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
