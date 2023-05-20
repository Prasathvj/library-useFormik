import React from 'react'
import Base from '../Base/Base'
import { Avatar, Button, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import { blueGrey } from '@mui/material/colors';
import { useHistory } from 'react-router-dom';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


function BookList({book,setBook}){
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    async function deletebook(bookid){
      const response = await fetch(`https://6467503eba7110b663b50284.mockapi.io/books/${bookid}`,{
        method:'DELETE'
      })
      const data = await response.json();
        const remainBook= book.filter((book, idx)=>book.id !== bookid)
        setBook(remainBook)
    
    };

    function delete1(){
      console.log('delete')
    }


  return (
    <Base
    title={'BOOKS'}
    describe={''}
    >
    <div className='card'>
       {book.map((books,idx)=>(
        
         <Card  sx={{width:'300px', color:'Highlight'}}>
          
         <CardHeader
           avatar={
             <Avatar sx={{ bgcolor: blueGrey[500] }} aria-label="recipe">
               {idx+1}
             </Avatar>
           }
           action={
             <IconButton aria-label="settings"
             id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
             >
               
               
              
             </IconButton>
             
           }
           title={` Author Name: ${books.authorName}`}
           subheader={`Published Year: ${books.publishYear}`}
         />
         
         <CardMedia 
           component="img"
           height="80"
           image="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149331952.jpg?size=626&ext=jpg"
           alt="books"
         />
         <CardContent >
           <Typography variant="body2" color="text.secondary">
            <h3 style={{textAlign:'center'}}>{`Title : ${books.name}`}</h3>
           </Typography>

           <div className='card-p'>
           <Typography variant="body2" color="text.secondary">
           <span>{`Book Genre  : ${books.genre}`}</span>
           </Typography>
           <Typography variant="body2" color="text.secondary">
           {`No.of Pages : ${books.pages}`}
           </Typography>
           </div>
         </CardContent>
           <div className='btn1'>
            <Button variant="text" color='secondary'
            onClick={()=>history.push(`/edit/${books.id}`)}
            ><EditNoteOutlinedIcon/></Button>
            <Button variant="text" color='error'
            onClick={()=>deletebook(books.id)}
            ><DeleteForeverIcon/></Button>

            </div>
       </Card>
       ))}
    </div>
    
    </Base>
    
  )
}

export default BookList