import PropTypes from 'prop-types';
import { FilterBox, Label, Input } from './Filter.styled';

const Filter = props => {
  let filter;

  const handleChange = evt => {
    filter = evt.currentTarget.value;

    props.onChange(filter);
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
  props: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
  }),
};
