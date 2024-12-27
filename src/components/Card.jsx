import React from 'react'

export default function Card({item, checkCard}) {

  return (
    <div className={`relative w-[224px] h-[308px] group card cursor-pointer ${item.toFlip || !item.canFlip ? "visible" : ""}`} onClick={checkCard}>
        <div className={` [transform:rotateY(0deg)] absolute flex justify-center items-center w-full h-full transition-transform duration-500 ease-out card-face group/back card-back`}>
            <img src="../assets/Images/card.jpg" alt="" className="self-start transition-transform rounded-md duration-100 ease-in-out -translate-y-2.5 group-hover/back:translate-y-0" />
        </div>
        <div className={`[transform:rotateY(180deg)] absolute flex justify-center items-center w-full h-full duration-500 ease-out card-face group/front card-front`}>
            <img src={item.image} alt="" className="relative card-value transition-transform rounded-md duration-100 ease-in-out scale-100 group-hover/front:scale-105" />
        </div>

    </div>
  )
}
