import React from 'react';
import axios from 'axios'
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import TaskService from '../services/TaskService'

const fetchTaskURL = "http://localhost:8080/api/task"

const VISIBLE_FIELDS = ['taskid', 'title', 'desc', 'status'];
const columns = [
  {field: "id", hideable:true},
   {field: 'taskid', headerName: 'Task Id', width: 120 },
  { field: 'title', headerName: 'Title', width: 130 },
  { field: 'desc', headerName: 'Description', width: 190 },
  { field: 'status', headerName: 'Status', width: 130 }
];

function MyGrid() {
 let result=[];
const [items, setItems] = React.useState(result);



const fetchTask = () => {
    TaskService.getAllTask().then(data=>setItems(data));};

React.useEffect(() => {
   result=fetchTask();
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
      <DataGrid rows={rows} columns={columns} pageSize={100}  slots={{ toolbar: GridToolbar }}  visibleFields={VISIBLE_FIELDS}  />
    </div>

  );


}

export default MyGrid;