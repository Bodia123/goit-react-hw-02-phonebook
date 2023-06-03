import React, { Component } from 'react';

class Filter extends Component {
  state = {
    filter: '',
  };

  render() {
    return (
      <label>
        Фільтр
        <input type="text" name="filter" onChange={this.props.onChange} />
      </label>
    );
  }
}

export default Filter;
