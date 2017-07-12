import React from 'react';
import * as BooksAPI from './BooksAPI'

class SearchBook extends React.Component {

    state = {
        query: '',
        booksFound: []
    }
    updatequery = (query) => {

        const trimmedQuery = query.trim();

        if (!trimmedQuery.length) {
            this.setState({query: '', booksFound: []});
        } else {
            this.setState({query});

            if (query.length) {
                BooksAPI
                    .search(trimmedQuery, 5)
                    .then((books) => {
                        if (books.length) {
                            this.setState({booksFound: books});
                        }else{
                            this.setState({booksFound: []});
                        }
                    })
            }
        }

    }
    render() {
        const {query, booksFound} = this.state;
        const {onMoveBook, returnToBooks} = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={returnToBooks}>Close</a>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updatequery(event.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">

                        {booksFound.length
                            ? booksFound.map(function (book) {

                                let thumbnail = book.imageLinks
                                    ? book.imageLinks.thumbnail
                                    : 'https://books.google.com/googlebooks/images/no_cover_thumb.gif';
                                let authors = book.authors
                                    ? book.authors
                                    : [];

                                return (
                                    <li key={book.id}>
                                        <div className="book">
                                            <div className="book-top">
                                                <div
                                                    className="book-cover"
                                                    style={{
                                                    width: 128,
                                                    height: 193,
                                                    backgroundImage: 'url("' + thumbnail + '")'
                                                }}></div>
                                                <div className="book-shelf-changer">
                                                    <select
                                                        value={book.shelf}
                                                        onChange={(event) => onMoveBook(book, event.target.value)}>
                                                        <option value="none" disabled>Move to...</option>
                                                        <option value="currentlyReading">Currently Reading</option>
                                                        <option value="wantToRead">Want to Read</option>
                                                        <option value="read">Read</option>
                                                        <option value="none">None</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="book-title">{book.title}</div>
                                            <div className="book-authors">
                                                {authors.length
                                                    ? authors.map((author, index) => (
                                                        <span key={index}>
                                                            {author} 
                                                        </span>
                                                    ))
                                                    : <span>N/A</span>}
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                            : <div>
                                <p>No results found :(</p>
                                <p>Try searching 'Android', 'Art', 'Artificial Intelligence'...</p>
                            </div>}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBook;