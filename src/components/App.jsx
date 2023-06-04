import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import css from './App.module.css';

import FormContact from './Form/Form';
import Filter from './Filter/Filter';
import List from './List/List';

export class App extends Component {
  state = {
    contacts: [],
    // [
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]
    filter: '',
  };

  handleInput = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }; // один обработчик для всіх інпутів по атрибуту name

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const filter = this.state.contacts.find(item => item.name === name);

    if (filter) {
      Notiflix.Notify.failure(`${name} уже є в списку контактів`);
    } else {
      Notiflix.Notify.success('Контакт додався');
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  }; // додає контакт по імені та по номеру телефону, якщо я схоже ім'я то викидає алерт

  getVisisbleContact = () => {
    const { contacts, filter } = this.state;
    const normilizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normilizedFilter)
    );
  }; //метод для сортування по імені

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
    Notiflix.Notify.success('Контакт видалений');
  }; // видалення елементу

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  render() {
    const visibleContact = this.getVisisbleContact();

    return (
      <div className={css.wrapper}>
        <h1 className={css.mainTitle}>Контакти</h1>
        <div className={css.container}>
          <FormContact onSubmit={this.addContact} />

          <h2 className={css.secondTitle}>Список контактів</h2>
          <Filter onChange={this.handleInput} />
          <List
            onVisibleContact={visibleContact}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}
