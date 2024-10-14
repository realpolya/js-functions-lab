import './Money.css'

const Money = (props) => {
    return (
        <>
            <div className='money-balance'>
                <h4>Your balance: ${props.money}</h4>
            </div>

        </>
    )
}

export default Money;