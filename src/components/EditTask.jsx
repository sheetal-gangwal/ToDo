import React, { useEffect, useState } from 'react';
import { Button, Form, Icon, Modal } from 'semantic-ui-react';
import { getTaskById, updateTaskById } from '../service/task-service';
import PriorityDropdown from './PriorityDropdown';

const EditTask = ({ itemId }) => {
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

  useEffect(() => {
    loadTask();
  }, []);

  const onInputChange = (e, { name, value }) => {
    setTask({ ...task, [name]: value });
  };

  const loadTask = async () => {
    const result = await getTaskById(itemId);
    setTask(result);
  };

  const onSubmit = async e => {
    e.preventDefault();
    await updateTaskById(itemId, task);
    setOpen(false);
    window.location.reload();
  };

  const { title, description, dueDate, priority } = task;
  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button icon color='blue'>
            <Icon name='edit'></Icon>
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
              value={title}
              onChange={onInputChange}
            />
            <Form.TextArea
              name='description'
              label='Description'
              placeholder='description'
              maxLength='500'
              minLength='10'
              required
              value={description}
              onChange={onInputChange}
            />

            <Form.Group widths='equal'>
              <Form.Input
                name='dueDate'
                label='Due date'
                type='date'
                fluid
                required
                value={dueDate}
                onChange={onInputChange}
              />
              <PriorityDropdown onChange={onInputChange} value={priority} />
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

export default EditTask;
