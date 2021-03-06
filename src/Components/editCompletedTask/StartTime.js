import React, { Component } from "react";
import moment from "moment";
import TimePicker from "./TimePicker";
import "./EditTask.css";
import { newStartTime } from "../../actions.js";
import { connect } from "react-redux";

class TimeSelectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start_time: moment(this.props.start_time, "h:mm a"),
    };
    // console.log(this.state.start_time)
  }



  handleChange = value => {
    this.setState({ start_time: value }, () => {
      this.props.newStartTime(moment(this.state.start_time).format("h:mm a"));
    });
  
  
  };


  handleSubmit = e => {
    e.preventDefault();
    alert(moment(this.state.start_time).format("hh:mm a"));
  };

  render() {
    return (
      <div className='timeBlock'>
        <h1 className="Title2" > START</h1>
        <div className="startTime">

          <div className='timeContainer' onSubmit={this.handleSubmit}>
            <i data-testid='clockImg' className="far fa-clock fa-3x"></i>
            <TimePicker className='stupid' value={this.state.start_time} onChange={this.handleChange} />
            <br/>
          </div>
        </div>
      </div>
      // <div className="startCont">
      //   <i id="startClock" className="fas fa-clock "></i>
      //   <h3 className="startTitle">START</h3>
      //   <input
      //     className="inputClock"
      //     value={this.state.start_time}
      //     onChange={this.handleChange}
      //     type="time"
          
          
      //   ></input>
      // </div>
    );
  };
}

const mapDispatchToProps = {
  newStartTime
};

export default connect(null, mapDispatchToProps)(TimeSelectForm);
