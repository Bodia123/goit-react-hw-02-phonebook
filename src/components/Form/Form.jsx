import React, { Component } from 'react';

class FormContact extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  }; //метод для роботи з данними інпуту

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();

    this.props.onSubmit(name, number);
    this.setState({ name: '', number: '' });
  }; //метод який відправляє дані отримані із стейту

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Ім'я
          <input
            autoComplete="off"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Назва може містити лише літери, апостроф, тире та пробіли.Наприклад Андрій, Богдан"
            required
            onChange={this.handleChange}
            value={this.state.name}
          />
        </label>
        <label>
          Номер телефону
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            autoComplete="off"
            onChange={this.handleChange}
            value={this.state.number}
          />
        </label>
        <button type="submit" disabled={!this.state.name || !this.state.number}>
          Додати контак!
        </button>
      </form>
    );
  }
}

export default FormContact;
