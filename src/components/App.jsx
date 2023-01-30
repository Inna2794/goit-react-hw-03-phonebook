import React, { Component } from 'react';
import Form from 'components/Form';
import Filter from 'components/Filter';
import Contacts from 'components/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const dataParsed = JSON.parse(localStorage.getItem('phoneBook'));
    if (!dataParsed || dataParsed === '') {
      this.setState({ contacts: [] });
    } else {
      this.setState({ contacts: dataParsed });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('phoneBook', JSON.stringify(this.state.contacts));
  }

  formSubmitHandler = data => {
    const check = this.state.contacts.find(
      el => el.name.toLowerCase() === data.name.toLowerCase()
    );
    return check
      ? alert(`${data.name} is already exist.`)
      : this.setState({ contacts: [...this.state.contacts, data] });
  };

  handleChangeFilter = data => {
    this.setState({ filter: data });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleClickDelete = data => {
    this.setState({
      contacts: this.state.contacts.filter(el => el.id !== data),
    });
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <div>
        <h2 style={{ color: '#ff6c00' }}>Phonebook</h2>
        <Form onSubmit={this.formSubmitHandler} />
        <h2 style={{ color: '#ff6c00' }}>Contacts</h2>
        <Filter onChange={this.handleChangeFilter} filter={this.state.filter} />
        <Contacts onDelete={this.handleClickDelete} data={filteredContacts} />
      </div>
    );
  }
}
