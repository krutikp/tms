import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import TaskService from '../services/TaskService'


const maxDescriptionLength = 1000;
function MyForm({onClick}) {
const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [status, setStatus] = React.useState('');

  const [statusData,setStatusData] = React.useState([]);
  const [message, setMessage] = React.useState(null);
const statuses = [];

  const fetchStatus = () => {
      TaskService.getAllStatus().then(data=>setStatusData(data));
      };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
TaskService.createTask({ title, "desc":description, "statusId":status })
.then(res=>{
   setMessage("Task created successfully.");

  setTitle('');
  setDescription('');
  setStatus('');

});

  };
    const handleDescriptionChange = (event) => {
      const { value } = event.target;
      if (value.length <= maxDescriptionLength) {
        setDescription(value);
      }
    };

let initialized= false;
React.useEffect(() => {
   if(!initialized){
      fetchStatus();
      initialized=true;
   }
}, []);

for(let i=0;i<statusData.length;i++){
    let res={ id: '', name: '' };
        res.id=statusData[i].id;
        res.name=statusData[i].name;

        statuses.push(res);
}
  return (
 <form onSubmit={handleSubmit} noValidate autoComplete="off" >
 {message && <div style={{
                               backgroundColor: '#f0f0f0',
                               color: '#D61A3C',
                               border: '1px solid #ccc',
                               padding: '10px',
                               marginTop: '20px',
                               textAlign: 'center',
                             }} >{message}</div>}
      <Grid container spacing={2} justify="center">
        <Grid item xs={8}>
      <TextField
        id="title"
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}

        margin="normal"
fullWidth      />
       </Grid>
              <Grid item xs={8}>
      <TextField
        id="description"
        label="Description"
        value={description}
        onChange={ handleDescriptionChange}
        multiline
        rows={4}
        margin="normal"
fullWidth
  helperText={`${description.length}/${maxDescriptionLength}`}/>
       </Grid>
              <Grid item xs={8}>
      <TextField
        id="statusId"
        select
        label="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        margin="normal"
fullWidth      >
        {statuses.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </TextField>
       </Grid>
              <Grid item xs={8}>
      <Button type="submit" variant="contained" color="primary" >
        Submit
      </Button>
        <span/>
        <Button type="submit" variant="contained" color="primary" onClick={onClick} >
              Close
            </Button>
     </Grid>
      </Grid>   </form>
  );
}

export default MyForm;