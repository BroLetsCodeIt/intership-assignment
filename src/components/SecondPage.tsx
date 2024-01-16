import {  Box, Typography } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";
import Post from "../types/type";
import { DataGrid } from '@mui/x-data-grid';
import colums from "../colums/colums";
import Department from './Department';
const SecondPage:React.FC = () => {
  const [posts , setpost] =  useState<Post[]>([]) ;
  useEffect(()=>{
    const fetchingdata = async () =>{
        try{
            const postdata = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setpost(postdata.data);
        }
        catch(error){
            console.log(error);
            console.log('something we wrong');
        }
    }
    fetchingdata();

  },[]) 

  return (
    <>
     <Typography align="center" fontSize={'2rem'}>Post Details</Typography>
     <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={posts}
        columns={colums}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    <Department />
    </>
  )
}

export default SecondPage
