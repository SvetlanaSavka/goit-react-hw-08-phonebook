import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactSelectors from 'redux/contacts/contact-selectors';
import { changeFilter } from 'redux/contacts/contactsAction';

const Filter = () => {
  const filter = useSelector(contactSelectors.getFilter);
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(changeFilter(event.currentTarget.value));
  };
  return (
    <>
      <label>
        Find contacts by name
        <input type="text" value={filter} onChange={handleFilter} />
      </label>
    </>
  );
};

export default Filter;
