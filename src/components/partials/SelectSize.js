import {Select, MenuItem} from '@mui/material';
function SelectSize({setSelectedSize}){
    const handleChange = (event) => {
        setSelectedSize(event.target.value);
      };
    return <>
        <Select  sx={{ height: '50px' }} className='flex w-full border-2 border-[#dcf2f3] py-1.5 pl-1' onChange={handleChange} defaultValue="2x3">
            <MenuItem value="2x3" selected={true}>2x3</MenuItem>
            <MenuItem value="3x4">3x4</MenuItem>
            <MenuItem value="4x6">4x6</MenuItem>
            <MenuItem value="6x9">6x9</MenuItem>
            <MenuItem value="9x13">9x13</MenuItem>
            <MenuItem value="10x15">10x15</MenuItem>
            <MenuItem value="13x18">13x18</MenuItem>
            <MenuItem value="15x20">15x20</MenuItem>
        </Select>
    </>
}

export default SelectSize;