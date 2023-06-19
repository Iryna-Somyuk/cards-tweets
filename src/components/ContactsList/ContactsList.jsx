import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectContacts, selectFilters } from 'redux/selector';
import { statusFilters } from '../../redux/constans';
import { Contact } from '../Contact/Contact';
import { HiOutlineArrowLongLeft } from 'react-icons/hi2';
import { Filter } from 'components/Filter/Filter';
import { NavLink } from 'react-router-dom';
import ScrollToTopButton from 'components/ScrollUp/ScrollUp';

const getVisibleFollowings = (users, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.follow:
      return users.filter(user => !user.following);
    case statusFilters.followings:
      return users.filter(user => user.following);
    default:
      return users;
  }
};

export const ContactsList = () => {
  const users = useSelector(selectContacts);
  const statusFilter = useSelector(selectFilters);
  const [noOfElement, setNoOfElement] = useState(3);

  const visibleFollows = getVisibleFollowings(users, statusFilter);
  const slice = visibleFollows.slice(0, noOfElement);

  const handleLoadMore = () => {
    const nextNoOfElement = noOfElement + 3;
    setNoOfElement(nextNoOfElement);
  };

  const isLoadMoreVisible = noOfElement < visibleFollows.length;

  return (
    <div className="py-5">
      <div className="flex justify-between items-center">
        <NavLink
          className="inline-flex  gap-2 items-center justify-center uppercase text-purple w-32 h-8 px-2 py-1 text-sm hover:font-semibold border-2 border-purple rounded-[10px] hover:border-4 curcor-pointer"
          to="/"
        >
          <HiOutlineArrowLongLeft />
          go back
        </NavLink>
        <Filter />
      </div>
      <ul className="flex flex-wrap gap-2">
        {slice.map(user => (
          <Contact key={user.id} user={user} />
        ))}
      </ul>
      {isLoadMoreVisible ? (
        <button
          className="mt-4 py-3 px-7 w-[196px] h-[50px] flex items-center justify-center uppercase font-semibold font-fontMoserrat text-slate-50 hover:text-slate-900 text-center border-0 rounded-[10px] bg-purple hover:bg-lightPurple"
          onClick={handleLoadMore}
        >
          {' '}
          load more
        </button>
      ) : (
        <div className="flex flex-row gap-4 ">
          <p className="mt-4  text-purple text-xl text-center font-semibold font-fontMoserrat">
            No more cards available :(
          </p>
          <ScrollToTopButton />
        </div>
      )}
    </div>
  );
};
