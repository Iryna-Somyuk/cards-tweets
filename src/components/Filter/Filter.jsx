import { FilterContainer, FilterBtn } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { statusFilters } from "../../redux/constans";
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selector';

export const Filter = () => {

  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilterChange = filter => {
    dispatch(setFilter(filter));
  }
  
  return (
    <FilterContainer >
      Find users by status
     <FilterBtn type='button' onClick={() => handleFilterChange(statusFilters.all)}>show all</FilterBtn>
     <FilterBtn type='button' onClick={() => handleFilterChange(statusFilters.follow)}>follow</FilterBtn>
     <FilterBtn type='button' onClick={() => handleFilterChange(statusFilters.followings)}>followings</FilterBtn>
    </FilterContainer>
  );
};