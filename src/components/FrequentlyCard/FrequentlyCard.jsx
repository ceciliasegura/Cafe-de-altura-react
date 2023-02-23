import { useState } from "react"

export const FrequentlyCard = ({ text1, text2 }) => {

    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(prev => !prev)
    }


    return (
        <div  className="qa-div flex flex-col justify-center gap-4 p-6 bg-white rounded-[10px] text-black w-full">
            <div onClick={handleClick} className="qa-div-click flex justify-between items-center">
                <p className="text-lg font-semibold">{text1}</p>
                <img src="assets/cocodrilo.png" className={`flex justify-between items-center w-2 h-1 ${show ? 'rotate-180' : ''}`} alt="" />
            </div>
            <div className={`border	border-beige-coffe w-full ${show ? '' : 'hidden'}`}></div>
            <div className={`w-full h-px bg-grey opacity-30 ${show ? '' : 'hidden'} `}></div>
            <p className={`font-normal ${show ? '' : 'hidden'}`}>{text2}</p>
        </div>
    )
}