import React from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import ClearIcon from '@material-ui/icons/Clear';

import TaskService from '../services/TaskService'

function MyGrid() {
 let result=[];
const [items, setItems] = React.useState(result);
const [editItem, setEditItem] = React.useState(false);
  const [status, setStatus] = React.useState([]);
    const [message, setMessage] = React.useState(null);
let statusOptions= [];

const handleEdit = (row) => {
    setEditItem(!editItem);
  };

  const handleSave = (row) => {
      setEditItem(!editItem);
      let findStatus = status.find((r)=> r.name === row.status);
      let task = { "taskid":row.taskid,"title":row.title, "desc":rows.description, "statusId":findStatus.id }
  TaskService.updateTask(task).then(res=>{fetchTask();})
     .catch(error => {
           console.log(error.response.data);
            setMessage(JSON.stringify(error.response.data));
        });
    };
const handleRemove = (row) => {
  TaskService.removeTask(row.taskid).then(res=>{fetchTask();})
   .catch(error => {
         console.log(error.response.data);
          setMessage(JSON.stringify(error.response.data));
      });
}
const handleClear = ()=>{
 setEditItem(!editItem);
}

const columns = [
  {field: "id", hide:true},
  {field: 'taskid', headerName: 'Task Id', width: 150 },
  { field: 'title', headerName: 'Title', width: 250 },
  { field: 'desc', headerName: 'Description', width: 300 },
  { field: 'status', headerName: 'Status', width: 130, editable: editItem,
   type: 'singleSelect',
         valueOptions: statusOptions
    },
  {
      field: 'actions',
      headerName: 'Actions',
      width: 180,
      renderCell: (params) => (
        <div>
        {
        !editItem  &&
          <IconButton aria-label="edit">
            <EditIcon onClick={()=> handleEdit(params.row) } />
          </IconButton>
        } {editItem &&
          <IconButton aria-label="save">
               <SaveIcon onClick={()=>handleSave(params.row)} />
          </IconButton>
           } {editItem &&
           <IconButton aria-label="clear">
                <ClearIcon  onClick={handleClear} />
           </IconButton>
           }
          <IconButton aria-label="delete">
            <DeleteIcon onClick = {()=>handleRemove(params.row)} />
          </IconButton>
        </div>
      ),
    }
];

let rows = [];
const fetchTask = () => {
    TaskService.getAllTask().then(data=>setItems(data)  );
    };
const fetchStatus = () => {
    TaskService.getAllStatus().then(data=>setStatus(data)  );
    };

let initialized= false;
React.useEffect(() => {
if(!initialized){
   fetchTask();
   fetchStatus();
   initialized=true;
   }

}, []);

    let counter=1;
    for(let i=0;i<items.length;i++){
        let res={id:"",taskid:"",title:"",desc:"", status:""};

            res.id=counter++;
            res.taskid=items[i].taskid;
            res.title=items[i].title;
            res.desc=items[i].desc;
            res.status=items[i].status.name;
            rows.push(res);
    }

    for(let i=0;i<status.length;i++){
        statusOptions.push(status[i].name);
    }

  return (
    <div style={{ height: '540px', width: '100%' }}>
     {message && <div style={{
                                   backgroundColor: '#f0f0f0',
                                   color: '#D61A3C',
                                   border: '1px solid #ccc',
                                   padding: '10px',
                                   marginTop: '20px',
                                   textAlign: 'center',
                                 }} >{message}</div>}
      <DataGrid rows={rows} columns={columns} pageSize={25} editMode="row" slots={{ toolbar: GridToolbar }}
       isCellEditable={(params) => params.field === 'status'}/>
    </div>

  );
}

export default MyGrid;