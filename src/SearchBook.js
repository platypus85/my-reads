import React from 'react';
import * as BooksAPI from './BooksAPI'
import Book from './Book';

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
                            // To hide books already in my shelves use the filter below. books =
                            // books.filter(o1 => !this.props.shelfBooks.some(o2 => o1.id === o2.id));
                            this.setState({booksFound: books});
                        } else {
                            this.setState({booksFound: []});
                        }
                    })
            }
        }

    }
    render() {
        const {query, booksFound} = this.state;
        const {shelfBooks, onMoveBook, returnToBooks} = this.props;

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
                            ? booksFound.map(function (book, index) {

                                return (<Book
                                    shelfBooks={shelfBooks}
                                    key={book.id+index}
                                    onMoveBook={onMoveBook}
                                    book={book}/>)
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