import './Library.css'

const Library = (props) => {
    
    return (
        <div className="book-cards-div">
            <h2>Library</h2>
            <div className="book-cards">

                {props.books.map((book, i) => {
                    return <div className="book-card" key={i}>
                        <p><span>Title:</span> {book.title}</p>
                        <p><span>Author:</span> {book.author}</p>
                    </div>
                })}

            </div>
        </div>
    )

}

export default Library;