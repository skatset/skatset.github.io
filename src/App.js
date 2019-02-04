import React, { Component } from "react";
import Calendar from "react-calendar";
import "./App.css";
import moment from "moment";

class App extends Component {

  startDate = moment("2018-12-25");

  tileClassName = ({date, view}) => {
    if (view === "month") {
      const d = -this.startDate.diff(date, "day");
      if (d < 0) {
        return "";
      } else {
        switch (d % 8) {
          case 0:
          case 1:
            return "App-morning";
          case 2:
            return "App-weekend";
          case 3:
          case 4:
            return "App-night";
          case 5:
            return "App-sleep";
          case 6:
          case 7:
            return "App-weekend";
          default:
            alert("Illegal divider: " + d);
        }
      }
    }
    return "";
  }

  render() {
    console.log(this.state.date)
    return (
      <div className="App">
        <div className="App-header">
          <Calendar minDetail="decade" locale="ru-RU" tileClassName={this.tileClassName}/>
        </div>
      </div>
    );
  }
}

export default App;
