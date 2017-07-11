import React from 'react';
import * as BooksAPI from './BooksAPI'

class SearchBook extends React.Component {

    state = {
        query: '',
        booksFound: []
    }
    updatequery = (query) => {
        this.setState({
            query: query,
        });
        if(query.length>0){
        BooksAPI
        .search(query.trim(), 5)
        .then((books) => {
            
            // this.setState({
            //     booksFound: booksFound
            // });
                console.log("books >> "+ JSON.stringify(books));
                console.log("query >> "+ query);
        })
        }
       
        
    }
    render() {
        const {query,booksFound} = this.state;
        const {onMoveBook,returnToBooks} = this.props;

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
                        
                        {booksFound.length > 0 ? booksFound.map((book) => (
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
                                        <select value={book.shelf} onChange={(event) =>onMoveBook(book, event.target.value)}>
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
                        )) : <p>Nothing to show</p>}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBook;