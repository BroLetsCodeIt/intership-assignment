import {GridColDef} from '@mui/x-data-grid';
const colums : GridColDef[]  = [
    {
       field:'id',
       headerName:'ID',
       width:90
    },
    {
      field:'userId',
      headerName:'User ID',
      width:90,
      
      editable:false
    },
    {
      field:'title',
      headerName:'Title',
      width:500,
      editable:false

    },
    {
        field:'body',
        headerName:'Body',
        width:900,
        editable:false
         
    }
]

export default colums;