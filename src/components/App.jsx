import React, { Component } from 'react';
import Form from 'components/Form';
import Filter from 'components/Filter';
import Contacts from 'components/Contacts';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        // { id: 'id-5', name: 'Edem Cldfmts', number: '645-17-79' },
        // { id: 'id-6', name: 'Alec Mjduels', number: '645-17-79' },
        // { id: 'id-7', name: 'Karl Fridr', number: '645-17-79' },
        // { id: 'id-8', name: 'Joiur Masuro', number: '645-17-79' },
      ],
      filter: '',
    };
  }

  componentDidMount() {
    const dataParsed = JSON.parse(localStorage.getItem('phoneBook'));
    if (!dataParsed) return;
    this.setState({ contacts: dataParsed });
  }

  componentDidUpdate() {
    localStorage.setItem('phoneBook', JSON.stringify(this.state.contacts));
  }

  formSubmitHandler = data => {
    this.state.contacts.map(el => {
      if (el.name.toLowerCase() === data.name.toLowerCase()) {
        alert(`${data.name} is already in contacts.`);
      }
      return el.name;
    });
    this.setState({ contacts: [...this.state.contacts, data] });
  };

  handleChangeFilter = data => {
    this.setState({ filter: data });
  };

  handleClickDelete = data => {
    console.log(data);
    this.setState({
      contacts: this.state.contacts.filter(el => el.id !== data),
    });
  };

  render() {
    return (
      <div>
        <h2 style={{ color: '#ff6c00' }}>Phonebook</h2>
        <Form onSubmit={this.formSubmitHandler} />
        <h2 style={{ color: '#ff6c00' }}>Contacts</h2>
        <Filter onChange={this.handleChangeFilter} />
        <Contacts
          onDelete={this.handleClickDelete}
          data={this.state.contacts}
          filter={this.state.filter}
        />
      </div>
    );
  }
}
