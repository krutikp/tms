import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function MyForm({onclick}) {

  return (
    <form noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained" color="primary" onClick={onclick}>
        Submit
      </Button>
    </form>
  );
}

export default MyForm;