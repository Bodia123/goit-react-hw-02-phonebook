import React, { Component } from 'react';
import css from './List.module.css';

class List extends Component {
  render() {
    return (
      <ul className={css.list}>
        {this.props.onVisibleContact.map(contact => {
          return (
            <li key={contact.id} className={css.listItem}>
              <p className={css.itemName}>{contact.name}</p>
              <p className={css.itemNumber}>{contact.number}</p>
              <button
                className={css.deleteButton}
                onClick={() => this.props.onDeleteContact(contact.id)}
              >
                Видалити
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default List;
