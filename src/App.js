import React, { Component } from "react";
import { connect } from "react-redux";
// import CsvParse from "@vtex/react-csv-parse";
import Table from "./Components/Table.js";
import Search from "./Components/Search.js";
// import { keys } from "./Constants.js";
import Papa from "papaparse";

import "./App.css";

class App extends Component {
  state = {
    data: [],
    searchedData: [],
    search: false,
    visible: false,
    error: false
  };

  componentDidMount() {
    Papa.parse("./vgsales55c93b8.csv  ", {
      skipEmptyLines: true,
      delimiter: "",
      header: true,
      download: true,
      dynamicTyping: true,
      error: (err, file, inputElem, reason) => {
        // onError({ err, file, inputElem, reason })
      },
      complete: results => {
        console.log("results--", results);
        this.handleData(results.data);
      }
    });
  }

  handleData = data => {
    console.log("data", data);
    this.setState({ data, visible: true });
  };

  handleError = error => {
    this.setState({ error: true });
    console.log("error", error);
  };

  updateStates = obj => {
    this.setState(obj);
  };

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Top Games Challenge</h1>
        <div>
          {/* <CsvParse
            keys={keys}
            onDataUploaded={this.handleData}
            onError={this.handleError}
            render={onChange => <input type="file" onChange={onChange} />}
          /> */}
          {this.state.error && (
            <h2>
              Something is wrong with csv . Please check the headers are: (Rank,
              Name, Platform, Year, Genre, Publisher, Global_Sales)
            </h2>
          )}
          {this.state.visible && (
            <div>
              <Search
                handleChange={this.handleChange}
                updateStates={this.updateStates}
                search={this.state.search}
                searchedData={this.state.searchedData}
                data={this.state.data}
              />
              <Table
                search={this.state.search}
                searchedData={this.state.searchedData}
                data={this.state.data}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

const select = state => ({
  counter: state.counter
});

export default connect(select)(App);
