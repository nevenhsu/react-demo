import 'react-dates/initialize';
import React, {Component} from 'react';
import { DateRangePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import Moment from 'moment';

class DatePicker extends Component{
  constructor(props) {
    super(props);
    let start = Moment(1525392000000);
    let end = Moment(1528098057000);

    this.state = {
      startDate: start,
      endDate: end,
      focusedInput: null
    }
  }

  render() {
    return (
      <DateRangePicker
        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        onDatesChange={({ startDate, endDate }) => {
          console.log(Moment('dd').isValid());
          console.log(Moment(endDate).endOf('day').format('YYYY-MM-DD HH:mm'));
          this.setState({ startDate, endDate })
        }} // PropTypes.func.isRequired,
        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
      />

    )
  }
}

export default DatePicker;