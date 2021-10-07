import React, { Component } from 'react';

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log('Counter - Updated');
    console.log('prevProps', prevProps);
    console.log('current props', this.props);
    console.log('prevState', prevState);
    console.log('current state', this.state);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Now we can do an AJAX call and get new data from an external server.
    }
  }
  componentWillUnmount() {
    console.log('Counter - Unmount');
  }
  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  };
  getBadgeClass = () => {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  };
  render() {
    console.log('Counter - Rendered');
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-1"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-1"
            disabled={this.props.counter.value === 0 ? true : false}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-1"
          >
            DELETE
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
