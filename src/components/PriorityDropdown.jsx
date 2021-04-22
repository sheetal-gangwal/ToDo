import React from 'react';
import { Form, Select } from 'semantic-ui-react';

const PriorityDropdown = ({ onChange, value }) => {
  const options = [
    { name: 'no', text: 'None', value: 'none' },
    { name: 'lw', text: 'Low', value: 'low' },
    { name: 'md', text: 'Medium', value: 'medium' },
    { name: 'hi', text: 'High', value: 'high' }
  ];
  return (
    <>
      <Form.Select
        name='priority'
        label='Priority'
        options={options}
        placeholder='none'
        fluid
        control={Select}
        required
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default PriorityDropdown;
