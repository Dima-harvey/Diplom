import React, { useState } from 'react';

import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import Axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';

const initialUser = {
  Name: '',
  Executor: '',
  Age: 0,
  Category: 0,
  Cost: '1',
  service: 0,
  subRows: undefined,
};

const AddUserDialog = (props) => {
  const [user, setUser] = useState(initialUser);
  const { addUserHandler, data } = props;
  const [open, setOpen] = React.useState(false);

  const [switchState, setSwitchState] = React.useState({
    addMultiple: false,
  });

  const handleSwitchChange = (name) => (event) => {
    setSwitchState({ ...switchState, [name]: event.target.checked });
  };

  const resetSwitch = () => {
    setSwitchState({ addMultiple: false });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    resetSwitch();
  };

  const handleAdd = (event) => {
    console.log('user', user);
    addUserHandler(user);
    console.log(data);
    console.log(data.length);
    Axios.post('http://localhost:3003/api/Graph/insert', {
      id: data.length,
      Name: user.Name,
      Executor: user.Executor,
      Age: user.Age,
      Category: user.Category,
      Cost: user.Cost,
      service: user.service,
    });
    setUser(initialUser);
    switchState.addMultiple ? setOpen(true) : setOpen(false);
  };

  const handleChange =
    (name) =>
    ({ target: { value } }) => {
      setUser({ ...user, [name]: value });
    };

  return (
    <div>
      <Tooltip title="Add">
        <IconButton aria-label="add" onClick={handleClickOpen}>
          <AddIcon />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Price</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Наименование услуги"
            type="text"
            fullWidth
            value={user.Name}
            onChange={handleChange('Name')}
          />
          <TextField
            margin="dense"
            label="Исполнитель"
            type="text"
            fullWidth
            value={user.Executor}
            onChange={handleChange('Executor')}
          />
          <TextField
            margin="dense"
            label="Возраст"
            type="number"
            fullWidth
            value={user.Age}
            onChange={handleChange('Age')}
          />
          <TextField
            margin="dense"
            label="Категория"
            type="number"
            fullWidth
            value={user.Category}
            onChange={handleChange('Category')}
          />
          <TextField
            margin="dense"
            label="Стоимость"
            type="text"
            fullWidth
            value={user.Cost}
            onChange={handleChange('Cost')}
          />
          <TextField
            margin="dense"
            label="Стоимость повторной услуги"
            type="number"
            fullWidth
            value={user.service}
            onChange={handleChange('service')}
          />
        </DialogContent>
        <DialogActions>
          <Tooltip title="Add multiple">
            <Switch
              checked={switchState.addMultiple}
              onChange={handleSwitchChange('addMultiple')}
              value="addMultiple"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </Tooltip>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

AddUserDialog.propTypes = {
  addUserHandler: PropTypes.func.isRequired,
};

export default AddUserDialog;
