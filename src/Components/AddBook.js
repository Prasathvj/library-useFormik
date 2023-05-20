import React from 'react'
import Base from '../Base/Base'
import { Button, TextField } from '@mui/material'
import { useHistory } from 'react-router-dom';
import * as yup from 'yup'
import { useFormik } from 'formik';

   //yup

export const fieldValidationSchema = yup.object({
    name: yup.string().required('Please fill the book name'),
    authorName: yup.string().required('Please fill the author name'),
    genre: yup.string().required('Please fill the genre'),
    pages: yup.string().required('Please fill the total no of pages'),
    publishYear: yup.string().required('Please fill the published year')
   
})

function AddBook({book,setBook}) {
    const history = useHistory();

  //Formik

    const {handleSubmit,values, handleChange,handleBlur,errors} =useFormik({
        initialValues :{
           name:"",
           authorName:"",
           genre:"",
           pages:"",
           publishYear:""
        },
        validationSchema: fieldValidationSchema,
        onSubmit : (addnewbooksdata)=>{
            console.log('onsubmit',addnewbooksdata)
            addnewbooks(addnewbooksdata)
        }
   })

    const addnewbooks = async(addbooks)=>{
        const response = await fetch('https://6467503eba7110b663b50284.mockapi.io/books',{
            method:'POST',
            body:JSON.stringify(addbooks),
            headers:{
                'Content-Type':'application/json'
            }
            
        })
        const data = await response.json();
        if(data){
            setBook([...book,data])
            history.push('/')
        }
    }

  return (
    <Base
    title={'ADD THE NEW BOOK'}
    describe={'Fill the all informations'}
    >
        <div className='input2'>

            <form onSubmit={handleSubmit} className='input'>
                <TextField sx={{ m: 1, width: '40ch' }}
               
                label="Book Name" 
                variant="outlined"
                placeholder='Enter Book Name'
                type='name'
                name='name'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                <div style={{color:'crimson'}}>{errors ? errors.name : ""}</div>

                <TextField sx={{ m: 1, width: '40ch' }}
               
                label="Author Name" 
                variant="outlined"
                placeholder='Enter Author Name'
                type='authorName'
                name='authorName'
                value={values.authorName}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                <div style={{color:'crimson'}}>{errors ? errors.authorName : ""}</div>

                <TextField sx={{ m: 1, width: '40ch' }}
              
                label="Genre" 
                variant="outlined" 
                placeholder='Enter Genre'
                type='genre'
                name='genre'
                value={values.genre}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                <div style={{color:'crimson'}}>{errors ? errors.genre : ""}</div>

                <TextField sx={{ m: 1, width: '40ch' }}
              
                label="Total Pages" 
                variant="outlined" 
                placeholder='Enter the Total Pages '
                type='pages'
                name='pages'
                value={values.pages}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                <div style={{color:'crimson'}}>{errors ? errors.pages : ""}</div>

                <TextField sx={{ m: 1, width: '40ch' }}
             
                label="Publish Year" 
                variant="outlined" 
                placeholder='Enter Publish Year'
                type='publishYear'
                name='publishYear'
                value={values.publishYear}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                <div style={{color:'crimson'}}>{errors ? errors.publishYear : ""}</div>

                <Button variant="contained"
                type='submit'
                >Submit</Button>
            </form>
        </div> 

    </Base>
  )
}

export default AddBook