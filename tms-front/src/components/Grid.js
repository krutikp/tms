import React from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import TaskService from '../services/TaskService'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
const columns = [
  {field: "id", hide:true},
   {field: 'taskid', headerName: 'Task Id', width: 150 },
  { field: 'title', headerName: 'Title', width: 250 },
  { field: 'desc', headerName: 'Description', width: 300 },
  { field: 'status', headerName: 'Status', width: 130 },
  {
      field: 'actions',
      headerName: 'Actions',
      width: 130,
      renderCell: (params) => (
        <div>
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    }
];

function MyGrid() {
 let result=[];
const [items, setItems] = React.useState(result);

const fetchTask = () => {
    TaskService.getAllTask().then(data=>setItems(data));};
let initialized= false;
React.useEffect(() => {
if(!initialized){
   result=fetchTask();
   initialized=true;
   }
}, []);

let rows = [];
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
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={25}  slots={{ toolbar: GridToolbar }}  />
    </div>

  );


}

export default MyGrid;