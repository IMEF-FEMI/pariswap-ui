import { useState } from "react"
import CurrencyModal from "./CurrencyModal"
import { MouseEventHandler } from 'react'
import Accordion from "./Accordion"
import Timer from "./Timer"

interface ModalProps {
    setOpen: (value: boolean) => void
    inputValue: number | undefined
}

const Modal = ({setOpen, inputValue}: ModalProps) => {
    const [openModal, setOpenModal] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    
    const state = {
        symbol: "USDC",
        logoURI: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png"
    }

    const [selectedCoin, setSelectedCoin] = useState(state);


    const handleClose = () => { 
        setOpen(false)
    }

    const handleCurrencyModal: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation()
        setIsOpen(false)
        setOpenModal(() => !openModal)
    }

    const handleCurrencyClose = () => { 
        setOpenModal(false)
    }

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => { 
        e.stopPropagation()
    }

   

    return (
        <div className="modalContainer">

            <div className="modalContent" onClick={handleCurrencyClose}>
                <div className="cancelBtn" onClick={handleClose}>
                    <p>X</p>
                </div>
                
                <h1 className="title">Make Payment</h1>

                <p className="betValue">You're paying <span>{inputValue}</span> USDC</p>

                <Timer/>

                <Accordion
                    title="Breakdown of Payment"
                    bettingAmount={inputValue}
                    platformFee="0.001"
                    swapFee="0.0001"
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />



                <div className="currencyContainer">
                    
                    <button className="currencyBtn" onClick={handleCurrencyModal}>
                        
                        <div className='imageContainer'>
                            <img src={selectedCoin?.logoURI ? selectedCoin?.logoURI : state?.logoURI} className="" alt="selected coin logo" />
                        </div>
                        <p className="coinBtnName">{selectedCoin?.symbol ? selectedCoin?.symbol : state?.symbol}</p>
                        <div className={`arrowDropDown ${openModal ? 'open' : ''}`}></div>
                    </button>
                    
                    {openModal && (
                        <CurrencyModal
                            setIsOpen={setIsOpen}
                            handleClick={handleClick}
                            setOpenModal={setOpenModal}
                            selectedCoin={selectedCoin}
                            setSelectedCoin={setSelectedCoin}
                        />
                    )}
                    
                </div>
                
                
            </div>
            

            

            <div className="poweredContainer">
                <p >Powered By IMEF.</p>
            </div>


        </div>
    )
}

export default Modal