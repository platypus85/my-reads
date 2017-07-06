import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom';
import SearchBook from './SearchBook';
import ListBooks from './ListBooks';

import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
      BooksAPI
      .getAll()
      .then((books) => {
        this.setState({books});
        console.log(books);
      })
  }

  moveBook = (book,shelf) => {
    BooksAPI
      .update(book,shelf)
      .then((result) => {
        console.log(result);
        this.getAllBooks();
      })
    console.log(book);
    console.log(shelf);
  }

  render() {
    return (
      <div className="app">
        <Route
          path="/search"
          render={({history}) => (
            <SearchBook
              returnToBooks={() => {
                history.push('/');
              }}/>
          )}/>
        <Route path="/" exact render={() => (
          <ListBooks 
          books={this.state.books}
          onMoveBook={this.moveBook}/>
          )}/>
      </div>
    )
  }
}

export default BooksApp
