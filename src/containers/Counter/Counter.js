import React, { Component } from "react";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { connect } from "react-redux";
import {
  Increment,
  Decrement,
  AddAmount,
  DeductAmount
} from "../../store/counterReducer";
import { getValue, getValueFromServer } from "../../store/infoReducer";
class Counter extends Component {
  state = {
    counter: 0
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    console.log(this.props.info);
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl
          label="Increment"
          clicked={() => this.props.Increment()}
        />
        <CounterControl
          label="Decrement"
          clicked={() => this.props.Decrement()}
        />
        <CounterControl label="Add 5" clicked={() => this.props.AddAmount()} />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.props.DeductAmount()}
        />
        <button onClick={this.props.getValue}>get value</button>
        <button onClick={this.props.getValueFromServer}>
          {this.props.info.loading ? "Loading..." : "get value from server"}
        </button>
        <p>value is {this.props.info.info.title}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter.counter,
    info: state.info
  };
};

export default connect(
  mapStateToProps,
  {
    Increment,
    Decrement,
    AddAmount,
    DeductAmount,
    getValue,
    getValueFromServer
  }
)(Counter);
