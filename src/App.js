import './App.css';
import BookList from './Components/BookList';
import { useEffect, useState } from 'react';
import AddBook from './Components/AddBook';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import UpdateBook from './Components/UpdateBook';

function App() {
  const [book,setBook] = useState([]);
useEffect(()=>{
async function getBook(){
  const response = await fetch('https://6467503eba7110b663b50284.mockapi.io/books',{
    method:'GET'
  })
  const data =await response.json();
  if(data){
    setBook(data)
  }
}
getBook();
},[])

  return (
    <div className="App">

      <Switch>
          <Route exact path='/'>
            <BookList
              book={book}
              setBook={setBook}/>
          </Route>

          <Route path='/addbook'>
            <AddBook
              book={book}
              setBook={setBook}/>
          </Route>

          <Route path='/edit/:id'>
            <UpdateBook
              book={book}
              setBook={setBook}/>
          </Route>

      </Switch>
      

      
    </div>
  );
}

export default App;
