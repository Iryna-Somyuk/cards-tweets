import { useDispatch } from 'react-redux';
import { statusFilters } from "../../redux/constans";
import { setFilter } from 'redux/filterSlice';
import { useState } from 'react';
import { AiOutlineCaretDown,  AiOutlineCaretUp } from 'react-icons/ai';


export const Filter = () => {
const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleFilterChange = filter => {
    dispatch(setFilter(filter));
    setIsOpen(false)
  }
  
  return (
    <div className='relative mb-5'>
    <button className='flex items-center justify-between py-3 px-7 w-[150px] h-[50px] uppercase font-semibold font-fontMoserrat text-slate-50 text-center border-0 rounded-[10px] bg-[#481ea9]' type='button' onClick={() => setIsOpen(prev => !prev)}>
     filter {!isOpen ? <AiOutlineCaretDown/> : <AiOutlineCaretUp/> }
    </button>
    {isOpen && 
    (<div className='absolute z-10 flex flex-col w-[150px] rounded-[10px] shadow-3xl text-slate-50 bg-[#481ea9]'> 
      <button className='font-Monserrat font-medium text-start uppercase w-full py-2 px-7 hover:underline' type='button' onClick={() => handleFilterChange(statusFilters.all)}>show all</button>
   <button className='font-Monserrat font-medium text-start uppercase w-full py-2 px-7 hover:underline' type='button' onClick={() => handleFilterChange(statusFilters.follow)}>follow</button>
  <button className='font-Monserrat font-medium text-start uppercase w-full py-2 px-7 hover:underline' type='button' onClick={() => handleFilterChange(statusFilters.followings)}>followings</button>
  </div>)}
  </div>);
};