import './AddBook.css'

const AddBook = (props) => {
    return (
        <div className="formDiv">
            <h3>Add a Book</h3>

            <form onSubmit={props.addBookFunction}>
                <label htmlFor='firstName'>First Name: </label>
                <input id='firstName' name='firstName' 
                value={formData.firstName} onChange={handleFormData}/>

                <label htmlFor='lastName'>Last Name: </label>
                <input id='lastName' name='lastName' 
                value={formData.lastName} onChange={handleFormData}/>

                <button type='submit'>Submit your name</button>
            </form>
                {/* Form will go here */}
        </div>
    )
} 

export default AddBook;