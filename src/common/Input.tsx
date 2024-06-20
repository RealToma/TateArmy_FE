/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'

interface Props {
  label?: string
  onChange?: (e: any) => void
  value?: string
}

export const Input = ({ label, value, onChange }: Props) => {
  const [focus, setFocus] = useState(false)

  const handleOnBlur = (e: any) => {
    if (!e.target.value) {
      setFocus(false)
    }
  }

  return (
    <label className='border w-full inline-block relative border-solid py-3 pl-4 lg:pl-[43px] rounded-[12px] border-[#E7EEFB]'>
      <span
        className={` transition-all px-2 bg-[#060609] duration-150 ${
          focus ? '-top-3' : 'top-1/2 -translate-y-1/2'
        } absolute inline-block text-[#F5F5FA]  text-[14px] lg:text-base font-medium leading-6 text-left`}
      >
        {label}
      </span>
      <input
        value={value}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={handleOnBlur}
        className='w-full text-[#F5F5FA]  outline-none border-none bg-transparent h-full'
      />
    </label>
  )
}
