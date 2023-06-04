import React, { Component } from 'react';
import css from './Form.module.css';

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
      <form className={css.form} onSubmit={this.handleSubmit}>
        <div className={css.inputBox}>
          <input
            className={css.inputEl}
            autoComplete="off"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Назва може містити лише літери, апостроф, тире та пробіли.Наприклад Андрій, Богдан"
            required
            onChange={this.handleChange}
            value={this.state.name}
          />
          <label className={css.labelEl}>Ім'я</label>
        </div>

        <div className={css.inputBox}>
          <input
            className={css.inputEl}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            autoComplete="off"
            onChange={this.handleChange}
            value={this.state.number}
          />
          <label className={css.labelEl}>Номер телефону</label>
        </div>

        <button
          type="submit"
          disabled={!this.state.name || !this.state.number}
          className={css.addButton}
        >
          Додати контакт!
        </button>
      </form>
    );
  }
}

export default FormContact;
