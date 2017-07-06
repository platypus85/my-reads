import React from 'react';
import PropTypes from 'prop-types';
import sortBy from 'sort-by';

class SearchBook extends React.Component {

     static propTypes = {
        books: PropTypes.array.isRequired,
        onMoveBook: PropTypes.func.isRequired

    }
    render() {
        const {books, onMoveBook} = this.props;
        
        const SHELF_CURRENTLY_READING = 'currentlyReading';
        const SHELF_WANT_TO_READ = 'wantToRead';
        const SHELF_READ = 'read';

        books.sort(sortBy('title'));

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                 <ol className="books-grid">
                                    {books.filter((book) => book.shelf === SHELF_CURRENTLY_READING).map((book) => (
                                        <li key={book.id}>
                                           
                                               <div className="book">
                                            <div className="book-top">
                                                <div
                                                    className="book-cover"
                                                    style={{
                                                    width: 128,
                                                    height: 193,
                                                    backgroundImage: 'url("'+book.imageLinks.smallThumbnail+'")'
                                                }}></div>
                                                <div className="book-shelf-changer">
                                                    <select value={book.shelf} onChange={(event) => onMoveBook(book, event.target.value)}>
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
                                                {book.authors.map((author, index) => (
                                                    <span key={index}> {author} </span>
                                                ))}
                                            </div>
                                        </div>
                                              
                                        </li>
                                    ))}
                                </ol>
                               
                            </div>
                        </div>

                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                 <ol className="books-grid">
                                    {books.filter((book) => book.shelf === SHELF_WANT_TO_READ).map((book) => (
                                        <li key={book.id}>
                                           
                                               <div className="book">
                                            <div className="book-top">
                                                <div
                                                    className="book-cover"
                                                    style={{
                                                    width: 128,
                                                    height: 193,
                                                    backgroundImage: 'url("'+book.imageLinks.smallThumbnail+'")'
                                                }}></div>
                                                <div className="book-shelf-changer">
                                                    <select value={book.shelf} onChange={(event) => onMoveBook(book, event.target.value)}>
                                                        <option value="none" disabled>Move to...</option>
                                                        <option value="currentlyReading">Currently Reading</option>
                                                        <option value="wantToRead" defaultChecked>Want to Read</option>
                                                        <option value="read">Read</option>
                                                        <option value="none">None</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="book-title">{book.title}</div>
                                            <div className="book-authors">
                                                {book.authors.map((author, index) => (
                                                    <span key={index}> {author} </span>
                                                ))}
                                            </div>
                                        </div>
                                              
                                        </li>
                                    ))}
                                </ol>
                               
                            </div>
                        </div>

                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                 <ol className="books-grid">
                                    {books.filter((book) => book.shelf === SHELF_READ).map((book) => (
                                        <li key={book.id}>
                                           
                                               <div className="book">
                                            <div className="book-top">
                                                <div
                                                    className="book-cover"
                                                    style={{
                                                    width: 128,
                                                    height: 193,
                                                    backgroundImage: 'url("'+book.imageLinks.smallThumbnail+'")'
                                                }}></div>
                                                <div className="book-shelf-changer">
                                                    <select value={book.shelf} onChange={(event) => onMoveBook(book, event.target.value)}>
                                                        <option value="none" disabled>Move to...</option>
                                                        <option value="currentlyReading">Currently Reading</option>
                                                        <option value="wantToRead">Want to Read</option>
                                                        <option value="read" defaultChecked>Read</option>
                                                        <option value="none">None</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="book-title">{book.title}</div>
                                            <div className="book-authors">
                                                {book.authors.map((author, index) => (
                                                    <span key={index}> {author} </span>
                                                ))}
                                            </div>
                                        </div>
                                              
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <a onClick={() => this.setState({showSearchPage: true})}>Add a book</a>
                </div>
            </div>
        )
    }
}

export default SearchBook;