import React from 'react'
import logo from '../../assets/jayga-logo.png'
import { TbWorld } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import Dropdown from '../ui/Dropdown'

const Navbar = () => {
  const options = ['Option 1', 'Option 2', 'Option 3']
  const handleSelect = option => {
    console.log(`Selected option: ${option}`)
  }
  const navLinks = (
    <>
      <li>
        <Link className='navLink' to={''}>
          Why Jayga?
        </Link>
      </li>
      <li>
        <Link to={''} className='flex font-semibold navLink'>
          <TbWorld className='text-xl' /> EN
        </Link>
      </li>
      <li>
        <button className='actionButton'>List your property</button>
      </li>
      <li className='ms-[58px]'>
        <div className='avatar p-0'>
          <div className='w-[44px] rounded-full'>
            <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
          </div>
        </div>
      </li>
      <li>
        <Dropdown options={options} onSelect={handleSelect} />
      </li>
    </>
  )
  return (
    <div>
      <div className='navbar px-[92px] mb-16'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              {navLinks}
            </ul>
          </div>
          <img src={logo} alt='jayga-logo' />
        </div>
        <div className='navbar-center hidden lg:flex'></div>
        <div className='navbar-end'>
          <ul className='menu menu-horizontal px-1 flex items-center'>
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
