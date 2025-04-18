import React from 'react'

const Books = ({img, name, writer, about}) => {
  return (
    <>
       <div className="flex gap-4  h-35 bg-[#FFFFFF] items-center rounded-2xl px-5 py-3">
        <img className='w-18 rounded' src={img} alt="" />
        <div className="d">
            <p className='text-[24px]' >{name}</p>
            <p className='text-[9px]'  >{writer}</p>
            <p className='text-[10px] mt-4'  >{about}</p>
        </div>
        </div> 
    </>
  )
}

export default Books