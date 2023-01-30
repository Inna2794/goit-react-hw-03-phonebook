import PropTypes from 'prop-types';
import { FilterBox, Label, Input } from './Filter.styled';

const Filter = ({ onChange, filter }) => {
  const handleChange = evt => {
    filter = evt.currentTarget.value;
    onChange(filter);
  };
  return (
    <FilterBox>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input id="filter" type="text" value={filter} onChange={handleChange} />
    </FilterBox>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
