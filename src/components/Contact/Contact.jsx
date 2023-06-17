import PropTypes from 'prop-types';
import { useState } from 'react';
import { ContactItem, ContactInfo, DeleteBtn } from './Contact.styled';
import Logo  from "../../images/Logo.png";
import Picture from "../../images/picture.png"

export const Contact = ({ user: { id, avatar, tweets, followers } }) => {


  const [count, setCount] = useState(followers);
  const [isEditingBtn, setIsEditingBtn] = useState(false);

  return (
    <ContactItem>
      <img src={Logo} alt=''/>
      <img src={Picture} alt=''/>
      <img src={avatar} alt='' width={80}/>

      <ContactInfo>
        {tweets} TWEETS
      </ContactInfo>
      <span>{count} FOLLOWERS</span>
{!isEditingBtn ? (<DeleteBtn type='button' onClick={() => { setIsEditingBtn(true);
  setCount(prev => prev + 1);}}>Follow</DeleteBtn>) : (<DeleteBtn type='button' onClick={() => {setIsEditingBtn(false);
    setCount(prev => prev - 1)}}>Following</DeleteBtn>)}


    </ContactItem>
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
