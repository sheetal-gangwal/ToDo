import React from 'react';
import { List } from 'semantic-ui-react';

import DeleteTask from './DeleteTask';
import EditTask from './EditTask';
import MarkDoneTask from './MarkDoneTask';

const DataTableActions = ({ itemId }) => {
  return (
    <>
      <List horizontal>
        <List.Item>
          <EditTask itemId={itemId} />
        </List.Item>
        <List.Item>
          <MarkDoneTask itemId={itemId} />
        </List.Item>
        <List.Item>
          <DeleteTask itemId={itemId} />
        </List.Item>
      </List>
    </>
  );
};

export default DataTableActions;
