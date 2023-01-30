import PropTypes from 'prop-types';
import {
  ContactsItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactsItem.styled';

const ContactsListItem = ({ id, name, number, onDelete }) => {
  const handleDeleteClick = evt => {
    onDelete(evt.target.id);
  };

  return (
    <ContactsItem>
      <ContactName>{name}</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <DeleteButton id={id} type="button" onClick={handleDeleteClick}>
        Delete
      </DeleteButton>
    </ContactsItem>
  );
};

export default ContactsListItem;

ContactsItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
};
