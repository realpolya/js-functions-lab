import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Form.css'

const initial = {
    boxholder: '',
    boxSize: '',
}

function Form({sizes, addMailbox}) {

    const redirect = useNavigate();

    const [formData, setFormData] = useState(initial);

    const handleSubmit = e => {
        
        e.preventDefault();

        // add mailbox
        addMailbox(formData);
        setFormData(initial);

        redirect('/list');

    }

    const handleChange = e => setFormData({...formData, [e.target.name]: e.target.value });

    return (
        <main id="form-main">
            <h2>New Mailbox Form</h2>
            <form className="new-mailbox-form" onSubmit={handleSubmit}>

                <div className="new-mailbox-form-div">
                    <label htmlFor="boxholder">Boxholder:</label>
                    <input type="text" id="boxholder" name="boxholder"
                     value={formData.boxholder} onChange={handleChange}
                    />
                </div>

                <div className="new-mailbox-form-div">
                    <label htmlFor="boxSize">Box size:</label>
                    <select id="boxSize" name="boxSize" required onChange={handleChange}>
                        <option value="" disabled selected >---Size---</option>
                        {sizes.map((size, i) => {
                            return <option key={i} value={size}>{size}</option>
                        })}
                    </select>
                </div>

                <div className="new-mailbox-form-div">
                    <button type="submit">Create mailbox</button>
                </div>
            </form>
        </main>
    )
}

export default Form