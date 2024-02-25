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
    <div className='filter-box'>
        <div className='filter-group'>
            <Select
            multiple
            renderValue={(selected) => (
                <Box sx={{ display: 'flex', gap: '0.25rem' }}>
                {selected.map((selectedOption) => (
                    <Chip variant="soft" color="primary">
                    {selectedOption.label}
                    </Chip>
                ))}
                </Box>
            )}
            sx={{
                minWidth: '15rem',
            }}
            slotProps={{
                listbox: {
                sx: {
                    width: '100%',
                },
                },
            }}
            >
            <Option value="dog">Dog</Option>
            <Option value="cat">Cat</Option>
            <Option value="fish">Fish</Option>
            <Option value="bird">Bird</Option>
            </Select>
        </div>
        <div className='filter-group'>
            <Select
          
            onChange={(e) => handleSelect('size', e.target.value)}
            >
                <Option value="small">Small</Option>
                <Option value="medium">Medium</Option>
                <Option value="large">Large</Option>
                <Option value="x-large">X-Large</Option>
            </Select>
        </div>
        <div className='filter-group'>
            <Select
            label="Color"
            onChange={(e) => handleSelect('color', e.target.value)}
            >
                <Option value="black">Black</Option>
                <Option value="white">White</Option>
                <Option value="blue">Blue</Option>
                <Option value="red">Red</Option>
            </Select>
        </div>

        <div className='filter-group'>
            <Select
            label="Brand"
           
            onChange={(e) => handleSelect('brand', e.target.value)}
            >
                <Option value="nike">Nike</Option>
                <Option value="adidas">Adidas</Option>
                <Option value="puma">Puma</Option>
                <Option value="under armour">Under Armour</Option>
            </Select>
        </div>
    </div>
        
    </>
    );
};

export default FilterBtnGroup
