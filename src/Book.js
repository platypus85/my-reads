import React from 'react';

class Book extends React.Component {
    render() {
        const {book, onMoveBook} = this.props;

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
                        {Array.isArray(authors) ? authors.join(' & '): authors.map((author, index) => (
                            <span key={index}>
                                {author}
                            </span>
                        ))}
                    </div>
                </div>

            </li>
        )
    }
}

export default Book;