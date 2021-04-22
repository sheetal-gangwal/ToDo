import React from 'react';
import { Form, Select } from 'semantic-ui-react';

const GroupByDropdown = ({ onChange }) => {
  const options = [
    { key: 'no', text: 'None', value: 'none' },
    { key: 'crtOn', text: 'Created On', value: 'createdOn' },
    { key: 'penOn', text: 'Pending', value: 'pending' },
    { key: 'prty', text: 'Priority', value: 'priority' }
  ];
  return (
    <>
      <Form.Select
        name='groupBy'
        label='Group by'
        options={options}
        placeholder='none'
        control={Select}
        onChange={onChange}
        fluid
      />
    </>
  );
};

export default GroupByDropdown;
