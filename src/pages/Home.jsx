import React, { useState } from 'react'
import { TbCurrencyTaka } from 'react-icons/tb'
import Rating from 'react-rating'
import { FaRegStar, FaStar } from 'react-icons/fa'
import {
  MdOutlinePeopleAlt,
  MdOutlineBed,
  MdOutlineShower
} from 'react-icons/md'
import img1 from '../assets/image 47.png'
import img2 from '../assets/booking-2-1.png'
import DatePicker2 from '../components/shared/CalenderPicker'
import CalenderPicker from '../components/shared/CalenderPicker'
import Features from '../components/shared/Features'

const Home = () => {
  const [showMore, setShowMore] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const hotel = {
    name: 'Rajshahi Mango Garden Holiday Home',
    location: 'Rajshahi, Rajshahi Division, Bangladesh',
    pricePerNight: 5000,
    serviceCharge: 700,
    roomInfo: {
      beds: 2,
      bathroom: 2,
      guests: 4
    },
    ratings: 4.5,
    totalRatings: 500,
    description:
      'The guest house is located in the middle 31 acres of massive mango garden. Experience Rajshahi staying in air conditioned comfy guest house with a lake in front! The guest house is located in the middle of a massive mango garden. uring mango season you can pick mangoes by own hand from trees & fishing facility on the lake in front of the house. The guest house is located in the middle of a massive mango garden. uring mango season you can pick mangoes by own hand from trees & fishing facility on the lake in front of the house.',
    images: [`${img1}`, `${img2}`, `${img2}`],
    features: [
      { name: 'Gym', available: true },
      { name: 'Garden', available: true },
      { name: 'Free Breakfast', available: true },
      { name: 'Wifi', available: true },
      { name: 'TV', available: true },
      { name: 'Air Conditioning', available: true },
      { name: 'Fridge', available: true },
      { name: 'Oven', available: true }
    ]
  }

  const largeDescription = hotel?.description.length > 346
  const fullDescription = hotel?.description
  const shortDescription = hotel?.description.slice(0, 346)

  return (
    <div className='flex justify-between gap-4 pb-[150px]'>
      <div className='max-w-[810px] w-[55%]'>
        <h2 className='font-bold text-5xl mb-[15px] text-secondary'>
          {hotel?.name}
        </h2>
        <p className='text-2xl text-text'>{hotel?.location}</p>
        <div className='flex justify-between items-center mt-[30px]'>
          <div className=''>
            <p className='flex items-center text-[60px] font-bold'>
              <TbCurrencyTaka className='' />
              {hotel?.pricePerNight}
              <span className='text-sm font-normal mt-6 ms-1'> / night</span>
            </p>
          </div>
          <div className='text-center'>
            <div className='flex items-center'>
              <p>{hotel?.ratings}</p>
              <Rating
                placeholderRating={hotel?.ratings}
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar />}
                fullSymbol={<FaStar />}
                readonly
                className='text-warming mt-1 ms-1'
              />
            </div>
            <p className='text-text'>{hotel?.totalRatings} reviews</p>
          </div>
        </div>
        <div className='flex items-center justify-between my-[50px]'>
          <div className='flex items-center'>
            <MdOutlinePeopleAlt className='text-[26px] me-[15px]' />{' '}
            {hotel?.roomInfo?.guests} guests
          </div>
          <div className='flex items-center'>
            <MdOutlineBed className='text-[26px] me-[15px]' />{' '}
            {hotel?.roomInfo?.beds} beds
          </div>
          <div className='flex items-center'>
            <MdOutlineShower className='text-[26px] me-[15px]' />{' '}
            {hotel?.roomInfo?.bathroom} bathrooms
          </div>
        </div>
        <p className='text-secondary leading-[18.8px]'>
          {!showMore ? shortDescription : fullDescription}
          {largeDescription && !showMore && '...'}
          <br />
          <button
            className='text-primary underline mt-[15px]'
            onClick={() => setShowMore(!showMore)}
          >
            {!showMore ? 'Show more' : 'Show less'}
          </button>
        </p>
        <div>
          <Features features={hotel?.features} />
        </div>
        <button
          className='w-full bg-primary text-white text-center rounded-[50px] mt-[70px] py-[21px] text-2xl'
          onClick={() => setIsOpen(true)}
        >
          Book Now
        </button>
        <CalenderPicker
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          pricePerNight={hotel?.pricePerNight}
          serviceCharge={hotel?.serviceCharge}
        />
      </div>
      <div className='max-w-[710px] w-[45%]'>
        <div className='flex flex-col items-center'>
          <div className='flex justify-center mb-[15px]'>
            <img src={hotel?.images[0]} alt='First Image' />
          </div>
          <div className='flex justify-center gap-[15px] w-full'>
            {hotel?.images.slice(1).map((image, index) => (
              <div key={index} className='w-full'>
                <img
                  src={image}
                  alt={`Image ${index + 2}`}
                  className='w-full h-auto'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
