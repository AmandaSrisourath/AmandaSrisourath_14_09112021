import React from "react";
import Select from "react-select";

function DepartmentDropdown() {
    const departmentOptions = [
        { value: 'Sales', label: 'Sales' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Engineering', label: 'Engineering' },
        { value: 'Human Resources', label: 'Human Resources' },
        { value: 'Legal', label: 'Legal' },
    ];
    const departmentDefaultOption = departmentOptions[0];

    return (
        <Select options={departmentOptions} defaultValue={departmentDefaultOption}/>
    )
}

export default DepartmentDropdown;