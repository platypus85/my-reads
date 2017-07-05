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
    BooksAPI
      .getAll()
      .then((books) => {
        this.setState({books});
        console.log(books);
      })
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
        <Route path="/" exact render={() => (<ListBooks books={this.state.books}/>)}/>
      </div>
    )
  }
}

export default BooksApp
