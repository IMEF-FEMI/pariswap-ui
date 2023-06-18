import React, { useState } from 'react'
import coinData from '../../tokenlist.json' // Assuming the JSON file is in the root directory

const CurrencyModal = ({ handleClick, setOpenModal, selectedCoin, setSelectedCoin }: any) => {
    
    const [filter, setFilter] = useState('')


    const truncateName = (name:any) => {
        if (name.length <= 8) {
            return name
        }
        return name.slice(0, 8) + '...'
    }

    const truncateAddress = (address:any) => {
        if (address.length <= 6) {
            return address
        }
        const firstThree = address.slice(0, 3)
        const lastThree = address.slice(-3)
        return `${firstThree}...${lastThree}`
    }

    const handleFilterChange = (event: any) => {
        setFilter(event.target.value)
    }

    const filteredCoins = coinData.filter((coin) => {
        const nameMatch = coin.name.toLowerCase().includes(filter.toLowerCase())
        const addressMatch = coin.address.toLowerCase().includes(filter.toLowerCase())
        return nameMatch || addressMatch
    })


    const handleCoinClick = (coin: any) => {
        setSelectedCoin(coin);
        setOpenModal(false) 
    };



    return (
        <div className='currencyModal' onClick={handleClick}>
            <div className='currencyContainers'>
                <div className='searchContainer'>
                    <input
                        type="text"
                        placeholder="Search by token or paste address"
                        value={filter}
                        onChange={handleFilterChange}
                    />
                    <button className="closeInput" onClick={() => setOpenModal(false)}>
                        X
                    </button>
                </div>
            </div>
            <div className='coinContainer'>
                {filteredCoins.map((coin, index) => (
                    <div className="coinContent" key={index} onClick={() => handleCoinClick(coin)}>
                        <div className='imageContainer'>
                            <img src={coin.logoURI} alt="" />
                        </div>
                        <div className='rightCoin'>
                            <div className='topContent'>
                                <p className='symbol'>{coin.symbol}</p>
                                <p >{truncateAddress(coin.address)}</p>
                            </div>
                            <p className='coinName'>{truncateName(coin.name)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CurrencyModal