import React from 'react';
import Book from './Book';

class Bookshelf extends React.Component {
    render() {

        const {books, onMoveBook, shelf} = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books
                        .filter((book) => book.shelf === shelf.code)
                        .map((book, index) => (
                            <Book key={book.id+index} onMoveBook={onMoveBook} book={book}/>
                        ))}
                    </ol>

                </div>
            </div>
        )
    }
}

export default Bookshelf;