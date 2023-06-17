import { useState } from "react"
import CurrencyModal from "./CurrencyModal"
import { MouseEventHandler } from 'react'
import Accordion from "./Accordion"

interface ModalProps {
    setOpen: (value: boolean) => void
    inputValue: number | undefined
}

const Modal = ({setOpen, inputValue}: ModalProps) => {
    const [openModal, setOpenModal] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const handleClose = () => { 
        setOpen(false)
    }

    
    const handleCurrencyModal: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation()
        setIsOpen(false)
        setOpenModal(true)
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

                <div className="timer">
                    <p>Starts in:</p>
                    <p><span>00</span> : <span>00</span> : <span>00</span></p>
                </div>


                <Accordion
                    title="Breakdown of Payment"
                    bettingAmount={inputValue}
                    platformFee="0.001"
                    swapFee="0.0001"
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />



                <div className="currencyContainer">
                    
                    <button onClick={handleCurrencyModal}>
                        <img src="" alt="selected coin logo" />
                        <p>GOBI</p>
                        <div className="icon"></div>
                    </button>
                    
                    {openModal && (
                        <CurrencyModal
                            setIsOpen={setIsOpen}
                            handleClick={handleClick}
                        />
                    )}
                    
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Modal