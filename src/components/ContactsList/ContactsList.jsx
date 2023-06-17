
import { Contact } from '../Contact/Contact';
import { ListContacts } from './ContactsList.styled';
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
    <div>
    <ListContacts>
      {slice.map(user => (
        <Contact key={user.id} user={user}/>
      ))}
    </ListContacts>
    <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
};
