import React, { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';

const DatePicker = () => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);

    // Define disabledDates array to disable dates from 12th Feb to 25th Feb
    const disabledDates = [
        {
            startDate: new Date('2024-02-12'),
            endDate: new Date('2024-02-25'),
        }
    ];

    return (
        <div>
            <DateRange
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
                // disabledDates={disabledDates} // Pass disabledDates array to the DateRange component
            />
        </div>
    );
};

export default DatePicker;
