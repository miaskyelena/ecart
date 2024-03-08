import * as React from 'react';
import { useState } from 'react';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { Box, Chip } from '@mui/joy';
const FilterBtnGroup = ({ onFilterSelect }) => {
    const [filters, setFilters] = useState({
        condition: '',
        size: '',
        color: '',
        brand: '',
    })

    const handleSelect = (category, value) => {
        setFilters(prevFilters => ({
          ...prevFilters,
          [category]: value
        }));
        onFilterSelect(category, value)
      };
    
    return (
    <>
    </>
    )
};

export default FilterBtnGroup
