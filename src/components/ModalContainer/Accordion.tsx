import React from 'react'

interface AccordionProps {
    title: string
    bettingAmount: number | undefined,
    platformFee: string | undefined
    swapFee: string | undefined
    isOpen: boolean
    setIsOpen: (value: boolean) => void
}

const Accordion: React.FC<AccordionProps> = ({ title,  bettingAmount, platformFee, swapFee, isOpen, setIsOpen }) => {

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    }

    const total = Number(bettingAmount) + Number(platformFee) + Number(swapFee)

    return (
        <>
            <div className="paymentBreakdown" onClick={toggleAccordion}>
                <p>{title}</p>
                <button className="toggleButton">
                    {isOpen ? '-' : '+'}
                </button>    
            </div>

            {isOpen && (
                <div className="accordionContent">
                    <p>Betting amount: <span>{bettingAmount} USDC</span></p> 	
                    <p>Platform fee: <span>{platformFee} USDC</span></p>
                    <p>Swap fee: <span>{swapFee} USDC</span></p>
                    <p>Total Amount: <span>{total} USDC</span></p>
                </div>
            )}
        </>

    )
}

export default Accordion