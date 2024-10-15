import './AddBookForm.css'

const AddBookForm = (props) => {
    
    return (
        <div className="formDiv">
            
            <h3>Add a Book</h3>

            <form onSubmit={props.handleSubmit}>

                <label htmlFor='title'>Title: </label>
                <input id='title' name='title' 
                value={props.newBook.title} onChange={props.handleNewBook}/>

                <label htmlFor='author'>Author: </label>
                <input id='author' name='author' 
                value={props.newBook.author} onChange={props.handleNewBook}/>

                <button type='submit'>Submit your book</button>

            </form>

        </div>
    )
    
} 

export default AddBookForm;