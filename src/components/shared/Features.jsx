import React from 'react'
import { CgGym } from 'react-icons/cg'
import { PiFlowerTulip } from 'react-icons/pi'
import { MdOutlineBreakfastDining } from 'react-icons/md'
import { FaWifi } from 'react-icons/fa6'
import { MdOutlineMonitor } from 'react-icons/md'
import { MdSevereCold } from 'react-icons/md'
import { TbFridge } from 'react-icons/tb'
import { TbCooker } from 'react-icons/tb'

const Features = ({ features }) => {
  const renderIcon = featureName => {
    switch (featureName) {
      case 'Gym':
        return <CgGym />
      case 'Garden':
        return <PiFlowerTulip />
      case 'Free Breakfast':
        return <MdOutlineBreakfastDining />
      case 'Wifi':
        return <FaWifi />
      case 'TV':
        return <MdOutlineMonitor />
      case 'Air Conditioning':
        return <MdSevereCold />
      case 'Fridge':
        return <TbFridge />
      case 'Oven':
        return <TbCooker />
      default:
        return null
    }
  }

  return (
    <div>
      <div className='flex flex-wrap mt-[50px] gap-[38px]'>
        {features?.map((feature, index) => (
          <div key={index} className='flex items-center'>
            <div className='border-[1.6px] font-medium rounded-[30px] border-secondary text-secondary py-3 px-[18px] ml-2 flex items-center hover:border-primary hover:text-primary'>
              {feature.available && renderIcon(feature.name)}
              <p className='ms-2'>{feature.available && feature.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features
