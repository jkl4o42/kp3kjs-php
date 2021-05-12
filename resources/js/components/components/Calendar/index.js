import React, {useState} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({ returnDateFunc }) => {
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = (date) => {
        if (returnDateFunc) {
            returnDateFunc(date);
        }

        setStartDate(date);
    };

    return (
        <DatePicker selected={startDate} onChange={date => handleChange(date)} />
    );
};

export default Calendar;
