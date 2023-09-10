import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/contactsOperations';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <input
      id="filter"
      label="Filter"
      name="filter"
      variant="outlined"
      onChange={(e) => dispatch(setFilter(e.target.value))}
    />
  );
};

export default Filter;

