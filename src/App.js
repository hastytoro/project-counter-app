import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  constructor() {
    super();
    console.log('App - Constructor');
  }
  componentDidMount() {
    console.log('App - Mounted');
  }
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };
  handleDelete = (counterId) => {
    console.log('delete', counterId);
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId,
    );
    this.setState({ counters: counters });
  };
  handleIncrement = (counter) => {
    console.log('increment', counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });
  };
  handleDecrement = (counter) => {
    console.log('decrement', counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters: counters });
  };
  render() {
    console.log('App - Rendered');
    return (
      <>
        <NavBar
          totalCounters={this.state.counters.filter((v) => v.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </>
    );
  }
}

export default App;
