import PropTypes from 'prop-types';
import { useState } from 'react';
import Logo from '../../images/Logo.png';
import Picture from '../../images/picture.png';
import { useDispatch } from 'react-redux';
import { toggleCompleted } from 'redux/operations';

export const Contact = ({ user }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(user.followers);
  const [isEditingBtn, setIsEditingBtn] = useState(user.following);

  const handleToggleAdd = () => {
    setIsEditingBtn(true);
    setCount(prev => prev + 1);
    dispatch(toggleCompleted(user));
  };

  const handleToggleChange = () => {
    setIsEditingBtn(false);
    setCount(prev => prev - 1);
    dispatch(toggleCompleted(user));
  };

  return (
    <li className="flex flex-col items-center w-[380px] h-[460px] shadow-3xl rounded-[20px] bg-purple">
      <img className="relative right-[132px] mt-5" src={Logo} alt="logo GoIT" />
      <img className="relative bottom-[14px]" src={Picture} alt="bgPhoto" />
      <div className=" border-lightPurple border-4 w-full"></div>
      <img
        className=" relative bottom-[40px] rounded-full border-8 border-lightPurple"
        src={user.avatar}
        alt="avatar user"
        width={80}
      />

      <div className=" relative bottom-3 flex flex-col items-center">
        <span className="mb-4 font-medium uppercase text-lg text-lightPurple font-fontMoserrat">
          {user.tweets} tweets
        </span>
        <span className="mb-[26px] font-medium uppercase text-lg text-lightPurple font-fontMoserrat">
          {count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} followers
        </span>

        {!isEditingBtn ? (
          <button
            className="py-[14px] px-7 w-[196px] h-[50px] rounded-[10px] bg-lightPurple uppercase text-lg  font-fontMoserrat font-semibold"
            type="button"
            onClick={handleToggleAdd}
          >
            follow
          </button>
        ) : (
          <button
            className="py-[14px] px-7 w-[196px] h-[50px] rounded-[10px] bg-green uppercase text-lg  font-fontMoserrat font-semibold"
            type="button"
            onClick={handleToggleChange}
          >
            following
          </button>
        )}
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
