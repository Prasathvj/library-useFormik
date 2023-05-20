import React from 'react'
import Base from '../Base/Base'
import { Button, TextField } from '@mui/material'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';



function UpdateBook({book,setBook}) {
    const history = useHistory();
    const {id} = useParams();
    const editBook = book[id];
    const [name,setName] = useState();
    const [authorName,setAname] = useState();
    const [genre,setGenre] = useState();
    const [pages,setPage] = useState();
    const [publishYear,setYear] = useState();

    useEffect(()=>{
        setName(editBook.name)
        setAname(editBook.authorName)
        setGenre(editBook.genre)
        setPage(editBook.pages)
        setYear(editBook.publishYear)
    },[editBook])

    const editbooks = async()=>{
        const editthebooks = {
            name,
            authorName,
            genre,
            pages,
            publishYear
        }

        const response = await fetch(`https://6467503eba7110b663b50284.mockapi.io/books/${editBook.id}`,{
            method:'PUT',
            body:JSON.stringify(editthebooks),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data = await response.json();
        if(data){
            book[id]= editthebooks
            setBook([...book])
            history.push('/')
        }

        
    }
  return (
    <Base
    title={'UPDATE THE BOOK DETAILS'}
    describe={''}
    >
        <div className='input'>
            <TextField sx={{ m: 1, width: '45ch' }}
            id="outlined-basic" 
            label="Book Name" 
            variant="outlined"
            placeholder='Enter Book Name'
            type='name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />

            <TextField sx={{ m: 1, width: '45ch' }}
            id="outlined-basic" 
            label="Author Name" 
            variant="outlined"
            placeholder='Enter Author Name'
           
            value={authorName}
            onChange={(e)=>setAname(e.target.value)}
            />

            <TextField sx={{ m: 1, width: '45ch' }}
            id="outlined-basic" 
            label="Genre" 
            variant="outlined" 
            placeholder='Enter Genre'
            value={genre}
            onChange={(e)=>setGenre(e.target.value)}
            />

            <TextField sx={{ m: 1, width: '45ch' }}
            id="outlined-basic" 
            label="Total Pages" 
            variant="outlined" 
            placeholder='Enter the Total Pages '
           
            value={pages}
            onChange={(e)=>setPage(e.target.value)}
            />

            <TextField sx={{ m: 1, width: '45ch' }}
            id="outlined-basic" 
            label="Publish Year" 
            variant="outlined" 
            placeholder='Enter Publish Year'
          
            value={publishYear}
            onChange={(e)=>setYear(e.target.value)}
            />
            
            <Button variant="contained"
            onClick={editbooks}
            >Submit</Button>
            
        </div> 

    </Base>
  )
}

export default UpdateBook