import React, {useState} from "react";
import DatePicker from "react-date-picker";

function Date() {
    const [value, onChange] = useState('');

    return (
        <DatePicker onChange={onChange} value={value}/>
    )
}

export default Date;