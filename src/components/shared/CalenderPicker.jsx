import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import Modal from '../ui/Modal'
import {
  calculateTotalDays,
  findMatchingDates,
  formatDate,
  getDates
} from '../../utils/global-func'

const CalenderPicker = ({
  isOpen,
  setIsOpen,
  pricePerNight,
  serviceCharge
}) => {
  const [value, setValue] = useState([new Date(), new Date()])
  const [proceed, setProceed] = useState(true)

  const disabledStartDate = '2024-02-20'
  const disabledEndDate = '2024-02-25'

  // disabled dates
  const tileDisabled = ({ date }) => {
    const startDate = new Date(disabledStartDate)
    const endDate = new Date(disabledEndDate)
    return (
      date > new Date(startDate.setDate(startDate.getDate() - 1)) &&
      date <= endDate
    )
  }

  useEffect(() => {
    const selectedDates = getDates(value[0], value[1])
    const disabledDates = getDates(
      new Date(disabledStartDate),
      new Date(disabledEndDate)
    )

    const matchingDates = findMatchingDates(selectedDates, disabledDates)
    console.log('Matching Dates:', matchingDates)
    setProceed(true)
    if (matchingDates.length > 0) {
      alert('Select valid dates')
      setProceed(false)
    }
  }, [value])

  const totalDays = calculateTotalDays(value[0], value[1])
  const subtotal = pricePerNight * totalDays
  const hotelServiceCharge = serviceCharge * totalDays
  const total = subtotal + serviceCharge

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={'Booking Confirmation'}>
      <div className='border-b border-gray1 pb-[21px] mb-[21px]'>
        <p className='mt-[33px] mb-[20px] text-xl'>
          Enter <b>Checkin</b> and <b>Checkout</b> dates :
        </p>
        <Calendar
          onChange={setValue}
          value={value}
          selectRange={true}
          tileDisabled={tileDisabled}
        />
        {value && (
          <ul className='mt-[20px]'>
            <li>
              {formatDate(value[0])} - {formatDate(value[1])}
            </li>
            <li className='text-text text-xs'>{totalDays} Nights</li>
          </ul>
        )}
      </div>
      <div>
        <p className='text-xl font-semibold'>Booking Summary</p>
        <div className='mt-[20px]'>
          <div className='flex justify-between'>
            <p>Subtotal</p>
            <p>
              {pricePerNight} X {totalDays}
            </p>
          </div>
          <div className='flex justify-between mt-[10px]'>
            <p>Service Charge</p>
            <p>{hotelServiceCharge}</p>
          </div>
          <div className='flex justify-between mt-[25px] font-semibold'>
            <p>Total</p>
            <p>{total}</p>
          </div>
        </div>
        <button
          disabled={!proceed}
          className='bg-primary disabled:bg-gray1 disabled:text-secondary py-[13px] text-center text-xl text-white w-full rounded-[30px] my-[50px]'
        >
          Proceed to payment
        </button>
      </div>
    </Modal>
  )
}

export default CalenderPicker
