import { FilterInput } from './Filter.style';
import PropTypes from 'prop-types';
export const Filter = ({ changeFilter }) => {
  return (
    <>
      <FilterInput
        onChange={changeFilter}
        placeholder="Search for contact by name..."
      />
    </>
  );
};

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
