import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";

class App extends Component {
  state = {
    value: ""
  };
  handleChange = event => {
    const { updateStates } = this.props;
    if (event.target.value.trim()) {
      updateStates({ search: true });
    } else {
      updateStates({ search: false });
    }
    this.setState({ value: event.target.value });
    this.matcher(event.target.value);
  };
  matcher = value => {
    const { updateStates, data } = this.props;
    debugger;
    let searchedArray = [];

    data.map(arrayIndex => {
      let flag = false;
      Object.keys(arrayIndex).forEach(key => {
        if (!flag) {
          const stringArrayIndex =
            arrayIndex[key] && arrayIndex[key].toString();
          if (stringArrayIndex && stringArrayIndex.toLowerCase().search(value.toLowerCase()) !== -1) {
            flag = true;
          }
          if (flag) {
            searchedArray = searchedArray.concat(arrayIndex);
          }
        }
      });
    });
    updateStates({
      searchedData: searchedArray
    });
    console.log("dfsd", this.state.searchedData);
  };
  render() {
    return (
      <div className="input-container">
        <label>
          Enter text to search:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}

const select = state => ({
  counter: state.counter
});

export default connect(select)(App);
