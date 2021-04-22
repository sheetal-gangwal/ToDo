import React, { useState } from 'react';
import { Button, Form, Icon, Modal } from 'semantic-ui-react';
import { addTask } from '../service/task-service';
import PriorityDropdown from './PriorityDropdown';

const AddTask = () => {
  const initialState = {
    title: '',
    description: '',
    createdAt: '',
    dueDate: '',
    priority: '',
    currentState: ''
  };
  const [task, setTask] = useState(initialState);
  const [open, setOpen] = useState(false);

  const onInputChange = (e, { name, value }) => {
    setTask({ ...task, [name]: value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    task.createdAt = createdAt();
    task.currentState = 'pending';
    await addTask(task);
    setOpen(false);
  };

  const createdAt = () => {
    return new Date().toLocaleString('en-In', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button floated='right' inverted title='Add task'>
            <Icon name='add circle' size='big' color='blue'></Icon>
          </Button>
        }
      >
        <Modal.Header>Add task</Modal.Header>
        <Modal.Content>
          <Form onSubmit={e => onSubmit(e)}>
            <Form.Input
              label='Title'
              type='text'
              placeholder='summary'
              maxLength='140'
              minLength='10'
              name='title'
              required
              onChange={onInputChange}
            />
            <Form.TextArea
              name='description'
              label='Description'
              placeholder='description'
              maxLength='500'
              minLength='10'
              required
              onChange={onInputChange}
            />

            <Form.Group widths='equal'>
              <Form.Input
                name='dueDate'
                label='Due date'
                type='date'
                fluid
                required
                onChange={onInputChange}
              />
              <PriorityDropdown onChange={onInputChange} />
            </Form.Group>
            <Form.Field>
              <Button type='submit' floated='right' positive>
                Submit
              </Button>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
            </Form.Field>
          </Form>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default AddTask;
