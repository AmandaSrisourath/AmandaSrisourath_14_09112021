import React from "react";
import Select from "react-select";

function StateDropdown() {
    const stateOptions = [
        { value: 'Alabama', label: 'Alabama' },
        { value: 'California', label: 'California' },
        { value: 'Florida', label: 'Florida' },
        { value: 'Indiana', label: 'Indiana' },
        { value: 'Massachusetts', label: 'Massachusetts' },
    ];
    const stateDefaultOption = stateOptions[0];

    return (
        <Select options={stateOptions} defaultValue={stateDefaultOption}/>
    )
}

export default StateDropdown;