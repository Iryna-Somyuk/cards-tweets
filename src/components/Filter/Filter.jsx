// import { FilterContainer, FilterBtn } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { statusFilters } from "../../redux/constans";
import { setFilter } from 'redux/filterSlice';
import { useState } from 'react';
import { AiOutlineCaretDown,  AiOutlineCaretUp } from 'react-icons/ai';
// import { selectFilter } from 'redux/selector';

export const Filter = () => {
const [isOpen, setIsOpen] = useState(false);
  // const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilterChange = filter => {
    dispatch(setFilter(filter));
  }
  
  return (
    <div className='relative mb-5'>
    <button className='flex items-center justify-between py-3 px-7 w-[150px] h-[50px] font-semibold font-fontMoserrat text-slate-50 text-center border-0 rounded-[10px] bg-[#481ea9]' type='button' onClick={() => setIsOpen(prev => !prev)}>
     Filter {!isOpen ? <AiOutlineCaretDown/> : <AiOutlineCaretUp/> }
    
    </button>
    {isOpen && 
    (<div className='absolute flex flex-col  items-start w-[150px] rounded-[10px] text-slate-50 bg-[#481ea9]'> 
      <button className='font-Monserrat font-medium  w-full py-2 px-3' type='button' onClick={() => handleFilterChange(statusFilters.all)}>show all</button>
   <button className='font-Monserrat font-medium  w-full py-2 px-3' type='button' onClick={() => handleFilterChange(statusFilters.follow)}>follow</button>
  <button className='font-Monserrat font-medium  w-full py-2 px-3' type='button' onClick={() => handleFilterChange(statusFilters.followings)}>followings</button>
  </div>)}
  </div>);
};