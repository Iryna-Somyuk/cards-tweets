
import { Contact } from '../Contact/Contact';
// import { ListContacts } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectContacts } from 'redux/selector';

export const ContactsList = () => {
  const users = useSelector(selectContacts);
  const [noOfElement, setNoOfElement] = useState(3);
  const slice = users.slice(0, noOfElement);

  const handleLoadMore = () => {
    setNoOfElement(noOfElement + noOfElement);
  }
  return (
    <>
    <ul className='flex flex-wrap gap-2'>
      {slice.map(user => (
        <Contact key={user.id} user={user}/>
      ))}
    </ul>
    <button className='mt-4 py-3 px-7 w-[196px] h-[50px] font-semibold font-fontMoserrat text-slate-50 hover:text-slate-900 text-center border-0 rounded-[10px] bg-[#481ea9] hover:bg-[#EBD8FF]' onClick={handleLoadMore}>Load More</button>
    </>
  );
};
