import React from 'react'

const CurrencyModal = ({handleClick}: any) => {
    return (
        <div className='currencyModal' onClick={handleClick}>

            <div className='currencyContainer'>
                <div className='searchContainer'>
                    <input type="text" placeholder='Search by token or paste address' />
                </div>
            </div>

            <div className='coinContainer'>
                <div className="coinContent">
                    <img src="" alt="" />

                    <div className='rightCoin'>
                        <div className='topContent'>
                            <p>USDC</p>

                            <p>address</p>
                        </div>
                        <p>USD coin</p>
                    </div>
                </div>

                <div className="coinContent">
                    <img src="" alt="" />

                    <div className='rightCoin'>
                        <div className='topContent'>
                            <p>USDC</p>

                            <p>address</p>
                        </div>
                        <p>USD coin</p>
                    </div>
                </div>


                <div className="coinContent">
                    <img src="" alt="" />

                    <div className='rightCoin'>
                        <div className='topContent'>
                            <p>USDC</p>

                            <p>address</p>
                        </div>
                        <p>USD coin</p>
                    </div>
                </div>

                <div className="coinContent">
                    <img src="" alt="" />

                    <div className='rightCoin'>
                        <div className='topContent'>
                            <p>USDC</p>

                            <p>address</p>
                        </div>
                        <p>USD coin</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CurrencyModal