import './List.css';

function List({ mailboxes }) {
  return (
    <main id="mailboxes-list-main">
        {mailboxes.map(mailbox => {
            return <div className="mailbox-card">
                <h3>Mailbox {mailbox._id}</h3>
                <p><span>Boxholder:</span> {mailbox.boxholder}</p>
                <p><span>Size:</span> {mailbox.boxSize}</p>
            </div>
        })}
    </main>
  )
}

export default List