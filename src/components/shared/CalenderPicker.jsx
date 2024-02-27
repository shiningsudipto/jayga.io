import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from '../ui/Modal';

const CalenderPicker = ({ isOpen, setIsOpen }) => {
    const [value, onChange] = useState(new Date());

    console.log(value);
    // Function to check if a date is disabled
    const tileDisabled = ({ date }) => {
        // Disable dates from 20th Feb to 25th Feb
        const disabledStartDate = new Date('2024-02-20');
        const disabledEndDate = new Date('2024-02-25');
        return date >= disabledStartDate && date <= disabledEndDate;
    };
    return (
        <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title={'Booking Confirmation'}
        >
            <Calendar
                onChange={onChange}
                value={value}
                selectRange={true}
                tileDisabled={tileDisabled} // Pass the tileDisabled function
            />
        </Modal>
    );
};

export default CalenderPicker;
