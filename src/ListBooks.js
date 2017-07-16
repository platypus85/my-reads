import React from 'react';
import PropTypes from 'prop-types';
import sortBy from 'sort-by';
import {Link} from 'react-router-dom';
import Bookshelf from './Bookshelf';

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

        const shelves = [
            {
                title: 'Currently Reading',
                code: SHELF_CURRENTLY_READING
            }, {
                title: 'Want to Read',
                code: SHELF_WANT_TO_READ
            }, {
                title: 'Read',
                code: SHELF_READ
            }
        ];

        books.sort(sortBy('title'));

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelves.map((shelf) => (
                           <Bookshelf key={shelf.code} books={books} onMoveBook={onMoveBook} shelf={shelf}/>
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">
                        Add a book
                    </Link>
                </div>
            </div>
        )
    }
}

export default SearchBook;