import { Fragment, useState } from 'react';
import { Menu } from '@headlessui/react';

function Dropdown({ options, onSelect, placeholder }) {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none hover:bg-transparent">
            {selectedOption ? selectedOption : placeholder}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
            </svg>
          </Menu.Button>

          <Menu.Items className={`${open ? 'block' : 'hidden'} absolute z-10 mt-12 bg-white rounded-md shadow-lg right-0`}>
            {options?.map(option => (
              <Menu.Item key={option} onClick={() => { setSelectedOption(option); onSelect(option); }}>
                {({ active }) => (
                  <button
                    className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700 w-max text-left`}
                  >
                    {option}
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}

export default Dropdown;
