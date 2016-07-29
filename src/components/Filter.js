import React, { Component, PropTypes } from 'react';
import { throttle } from '../utils/helpers.js';

export default class Filter extends Component {
  constructor(props, context) {
    super(props, context);
    this.updateFilter = this.updateFilter.bind(this);
  }

  updateFilter(event) {
    throttle(() => this.props.actions.updateFilter(event.target.value), 200)();
  }

  render() {
    return (
      <div className="filter-container">
        <div className="filter-bar">
          <input type="text" name="fname" onChange={this.updateFilter}/>
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};
