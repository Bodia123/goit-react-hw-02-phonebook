import React, { Component } from 'react';
import css from './Filter.module.css';

class Filter extends Component {
  state = {
    filter: '',
  };

  render() {
    return (
      <div className={css.wrapper}>
        <input
          className={css.inputEl}
          type="text"
          name="filter"
          onChange={this.props.onChange}
        />
        <label className={css.labelEl}>Фільтр</label>
      </div>
    );
  }
}

export default Filter;
