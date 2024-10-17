import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Letter.css';

const initial = {
    address: '',
    content: '',
}

function Letter({ mailboxes, addLetter }) {

    const redirect = useNavigate();

    // letter form
    const [letter, setLetter] = useState(initial);

    // functions
    const handleSubmit = e => {
        
        e.preventDefault();

        // add mailbox
        addLetter(letter);
        setLetter(initial);

        redirect('/list');

    }

    const handleChange = e => setLetter({...letter, [e.target.name]: e.target.value });
  
  
    return (
        <main id="letter-main">
            <h2>New Letter Form</h2>

            <form className="new-letter-form" onSubmit={handleSubmit}>

                <div className="new-letter-form-div">
                    <label htmlFor="address">To whom:</label>
                    <select id="address" name="address" required onChange={handleChange}>
                        <option value="" disabled selected >---Recipient---</option>
                        {mailboxes.map((mailbox, i) => {
                            return <option key={i} value={mailbox._id}>{mailbox.boxholder}</option>
                        })}
                    </select>
                </div>


                <div className="new-letter-form-div">
                    <label htmlFor="content">Letter content:</label>
                    <textarea type="text" id="content" name="content"
                    value={letter.content} onChange={handleChange}>
                        Type here...
                    </textarea>
                </div>

                <div className="new-letter-form-div">
                    <button type="submit">Send letter</button>
                </div>
            </form>
        </main>
  )
}

export default Letter