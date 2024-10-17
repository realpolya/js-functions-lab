import { Link } from 'react-router-dom';
import './List.css';

function List({ mailboxes }) {
  return (
    <main id="mailboxes-list-main">
        {mailboxes.map(mailbox => {
            return <div className="mailbox-card">
                <h3><Link to={`/item/${mailbox._id}`}>Mailbox {mailbox._id}</Link></h3>
                <p><span>Boxholder:</span> {mailbox.boxholder}</p>
                <p><span>Size:</span> {mailbox.boxSize}</p>
            </div>
        })}
    </main>
  )
}

export default List