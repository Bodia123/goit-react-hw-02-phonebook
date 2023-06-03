import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <ul>
        {this.props.onVisibleContact.map(contact => {
          return (
            <li key={contact.id}>
              <p>{contact.name}</p>
              <p>{contact.number}</p>
              <button onClick={() => this.props.onDeleteContact(contact.id)}>
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
