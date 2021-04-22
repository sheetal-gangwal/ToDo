import React, { useEffect, useState } from 'react';
import { getTaskById, updateTaskById } from '../service/task-service';

import { Button } from 'semantic-ui-react';

const MarkDoneTask = ({ itemId }) => {
  const initialState = {
    title: '',
    description: '',
    createdAt: '',
    dueDate: '',
    priority: '',
    currentState: ''
  };
  const [task, setTask] = useState(initialState);

  useEffect(() => {
    loadTask();
  }, []);

  // const onInputChange = (e, { name, value }) => {
  //   setTask({ ...task, [name]: value });

  // };

  const loadTask = async () => {
    const result = await getTaskById(itemId);
    setTask(result);
  };

  //   const onSubmit = async e => {
  //     e.preventDefault();
  //     await updateTaskById(itemId, task);
  //     setisDone(!isDone);
  //     window.location.reload();
  //   };

  const on_click = () => {
    const changeState =
      task.currentState === 'pending' ? 'completed' : 'pending';
    const data = { currentState: changeState };
    updateTaskById(itemId, data);
    window.location.reload();
  };

  const { currentState } = task;
  return (
    <div>
      <Button icon color='green' onClick={on_click}>
        {currentState === 'pending' ? 'Done' : 'Re-Open'}
      </Button>
    </div>
  );
};

export default MarkDoneTask;

// const MarkDoneTask = ({ itemId }) => {

//     const onSubmit = async e => {
//       e.preventDefault();
//       itemId.currentState = 'completed';
//       await updateTaskById(itemId, task);
//       setOpen(false);
//       window.location.reload();
//     };
// };

// export default MarkDoneTask;
