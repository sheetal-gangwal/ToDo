import React from 'react';
import { Form, Segment } from 'semantic-ui-react';
import GroupByDropdown from '../components/GroupByDropdown';

const SubHeader = () => {
  return (
    <Segment>
      <Form>
        <Form.Group widths='equal'>
          <GroupByDropdown />
          <Form.Input
            label='Search'
            icon='search'
            placeholder='Search...'
            fluid
          />
        </Form.Group>
      </Form>
    </Segment>
  );
};

export default SubHeader;
