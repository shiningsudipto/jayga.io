import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import Modal from '../ui/Modal'
import { calculateTotalDays, formatDate } from '../../utils/global-func'

const CalenderPicker = ({ isOpen, setIsOpen }) => {
  const [value, onChange] = useState([new Date(), new Date()])

  // Function to check if a date is disabled
  const tileDisabled = ({ date }) => {
    // Disable dates from 20th Feb to 25th Feb
    const disabledStartDate = new Date('2024-02-20')
    const disabledEndDate = new Date('2024-02-25')
    return date >= disabledStartDate && date <= disabledEndDate
  }

  const totalDays = calculateTotalDays(value[0], value[1])
  const subtotal = 5000 * totalDays
  const serviceCharge = 300 * totalDays
  const total = subtotal + serviceCharge

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={'Booking Confirmation'}>
      <div className='border-b border-gray1 pb-[21px] mb-[21px]'>
        <p className='mt-[33px] mb-[20px] text-xl'>
          Enter <b>Checkin</b> and <b>Checkout</b> dates :
        </p>
        <Calendar
          onChange={onChange}
          value={value}
          selectRange={true}
          tileDisabled={tileDisabled}
        />
        {value && (
          <ul>
            <li>
              {formatDate(value[0])} - {formatDate(value[1])}
            </li>
            <li className='text-text text-xs'>{totalDays} Nights</li>
          </ul>
        )}
      </div>
      <div>
        <p className='text-xl font-semibold'>Booking Summary</p>
        <div>
          <div className='flex justify-between'>
            <p>Subtotal</p>
            <p>{subtotal}</p>
          </div>
          <div className='flex justify-between mt-[10px]'>
            <p>Service Charge</p>
            <p>{serviceCharge}</p>
          </div>
          <div className='flex justify-between mt-[25px] font-semibold'>
            <p>Total</p>
            <p>{total}</p>
          </div>
        </div>
        <button className='bg-primary py-[13px] text-center text-xl text-white w-full rounded-[30px] my-[50px]'>
          Proceed to payment
        </button>
      </div>
    </Modal>
  )
}

export default CalenderPicker
