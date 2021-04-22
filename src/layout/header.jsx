import React from 'react';
import { Segment } from 'semantic-ui-react';
import AddTask from '../components/AddTask';

const Header = () => {
  return (
    <Segment.Group horizontal>
      <Segment>
        <h1>To Do App</h1>
      </Segment>
      <Segment>
        <AddTask />
      </Segment>
    </Segment.Group>
  );
};

export default Header;
