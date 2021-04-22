import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import { deleteTask } from '../service/task-service';

const DeleteTask = ({ itemId }) => {
  const [open, setOpen] = React.useState(false);

  const removeTask = async () => {
    await deleteTask(itemId);
    setOpen(false);
    window.location.reload();
  };

  return (
    <>
      <Modal
        closeIcon
        open={open}
        trigger={
          <Button icon color='google plus'>
            <Icon name='trash alternate' />
          </Button>
        }
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Header icon='trash' content='Delete task' />
        <Modal.Content>
          <p>
            Your inbox is getting full, would you like us to enable automatic
            archiving of old messages?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='grey' onClick={() => setOpen(false)}>
            <Icon name='remove' /> No
          </Button>
          <Button color='red' onClick={() => removeTask()}>
            <Icon name='trash' /> Delete
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default DeleteTask;
