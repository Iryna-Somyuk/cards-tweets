import PropTypes from 'prop-types';
import { useState } from 'react';
// import { ContactItem, ContactInfo, DeleteBtn } from './Contact.styled';
import Logo  from "../../images/Logo.png";
import Picture from "../../images/picture.png"
// import { useDispatch, useSelector } from 'react-redux';
// import { selectContacts } from 'redux/selector';
// import { editingContact } from 'redux/operations';
// import { followUser, unfollowUser } from '../../redux/contactSlice';

export const Contact = ({ user }) => {
  // const dispatch = useDispatch();
  const [count, setCount] = useState(user.followers);
  const [isEditingBtn, setIsEditingBtn] = useState(false);



  return (
    <li className='flex flex-col items-center w-[380px] h-[460px] shadow-3xl rounded-[20px] bg-[#481ea9]'>
      <img className='mt-5 flex' src={Logo} alt='logo GoIT' />
      <img className='relative bottom-[14px]' src={Picture} alt='bgPhoto'/>
      <div className='relative bottom-[32px] flex flex-col items-center '>
      <img className='mb-[26px] rounded-full border-8  border-[#EBD8FF]' src={user.avatar} alt='avatar user' width={80}/>

      <span className='mb-4 font-medium text-lg text-[#EBD8FF] font-fontMoserrat'>
        {user.tweets} TWEETS
      </span>
      <span className='mb-[26px] font-medium text-lg text-[#EBD8FF] font-fontMoserrat'>{count} FOLLOWERS</span>

{!isEditingBtn ? (<button className='py-[14px] px-7 w-[196px] h-[50px] rounded-[10px] bg-[#EBD8FF] text-lg  font-fontMoserrat font-semibold' type='button' onClick={() => { setIsEditingBtn(true);
  setCount(prev => prev + 1);}}>FOLLOW</button>) : (<button className='py-[14px] px-7 w-[196px] h-[50px] rounded-[10px] bg-[#5CD3A8] text-lg  font-fontMoserrat font-semibold' type='button' onClick={() => {setIsEditingBtn(false);
    setCount(prev => prev - 1)}}>FOLLOWING</button>)}
</div>


    </li>
  );
};

Contact.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }).isRequired,
};
