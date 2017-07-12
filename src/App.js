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
      })
  }

  moveBook = (book,shelf) => {
    BooksAPI
      .update(book,shelf)
      .then((result) => {
        this.getAllBooks();
      })
  }

  render() {
    return (
      <div className="app">
        <Route
          path="/search"
          render={({history}) => (
            <SearchBook
              shelfBooks={this.state.books}
              returnToBooks={() => {
                history.push('/');
              }}
              onMoveBook={this.moveBook}/>
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
