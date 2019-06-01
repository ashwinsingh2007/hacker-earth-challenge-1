import React, { Component } from "react";
import { connect } from "react-redux";
import DataTable from "react-data-table-component";
import { columns, rowTheme } from "../Constants";
import "../App.css";

class App extends Component {
  onCl = event => {
    window.open(`https://en.wikipedia.org/wiki/${event.Name}`, "_blank");
  };
  render() {
    const { search, searchedData, data } = this.props;
    console.log("searchedData---", this.props);
    return (
      <div className="table-container">
        <DataTable
          title=""
          columns={columns}
          data={search ? searchedData : data}
          customTheme={rowTheme}
          onRowClicked={this.onCl}
          pointerOnHover
          pagination
          responsive
        />
      </div>
    );
  }
}

const select = state => ({
  counter: state.counter
});

export default connect(select)(App);
