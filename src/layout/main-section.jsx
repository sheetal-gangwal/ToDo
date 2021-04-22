import React, { useEffect, useState } from 'react';
import { Input, Loader, Menu, Segment, Tab } from 'semantic-ui-react';
//import { Loader, Tab } from 'semantic-ui-react';
import DataTable from '../components/DataTable';
import { getTasks } from '../service/task-service';

const MainPanel = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const result = await getTasks();
    setTasks(result);
  };

  const columnHeaders = [
    'Summary',
    'Priority',
    'Created On',
    'Due By',
    'Actions'
  ];

  const getCompletedTasks = () =>
    tasks.filter(item => item.currentState === 'completed');
  const getPendingTasks = () =>
    tasks.filter(item => item.currentState === 'pending');

  const panes = [
    {
      menuItem: 'All',
      render: () => (
        <Tab.Pane>
          <Loader />
          <DataTable columnData={tasks} columnHeaders={columnHeaders} />
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Pending',
      render: () => (
        <Tab.Pane>
          <DataTable
            columnData={getPendingTasks()}
            columnHeaders={columnHeaders}
          />
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Completed',
      render: () => (
        <Tab.Pane>
          <DataTable
            columnData={getCompletedTasks()}
            columnHeaders={columnHeaders}
          />
        </Tab.Pane>
      )
    }
  ];

  return (
    <div>
      <Tab panes={panes} />
    </div>
  );
};

export default MainPanel;
