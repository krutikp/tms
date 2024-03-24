import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core//Divider'
import TaskService from '../services/TaskService'

function MyAppBar( {onClick}) {

  const { window } = "";
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container = window !== undefined ? () => window().document.body : undefined;


 const styles = {
colorButton: {
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            borderRadius: '5px',
            fontSize: '12px',
            marginTop: '10px'
 }}
  return (

    <AppBar  position="static" component="nav">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
              Task Management
        </Typography>
        <Divider/>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Button  style ={styles.colorButton } onClick={onClick}>Create Task</Button>
          </Box>
      </Toolbar>
    </AppBar>

  );
}

export default MyAppBar;