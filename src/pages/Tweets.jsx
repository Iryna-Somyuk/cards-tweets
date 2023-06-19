import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/selector';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Loader } from 'components/Loader/Loader';

const Tweets = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
      <>
        {isLoading && !error && <Loader/>}
        <ContactsList />
      </>
  );
};
export default Tweets;
