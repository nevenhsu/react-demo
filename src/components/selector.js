import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


export default class Selector extends Component {


    constructor(props) {
        super(props);

        this.state = {
            options: this.setupOptions(props.value),
            value: props.value,
            name: props.name
        };
    }

    setupOptions(value) {
        let options;

        if (this.props.options) {
            options = this.props.options;
        } else {
            // default options
            options = [{
                value: 0, label: ' >= 0'
            },{
                value: 100, label: ' > 100'
            },{
                value: 1000, label: ' > 1000'
            },{
                value: 10000, label: ' > 10000'
            },{
                value: 100000, label: ' > 100000'
            }];
        }

        // check if value is valid number
        const Value = Number(value);
        if (isNaN(Value)) {return options; }

        // if options doesn't have value, then add it
        if (!options.some(e => e.value === value)) {
            options.push({value: value, label: ` > ${value}`});
        }

        return options;
    }


    handleOnChange(value) {
        this.setState({value}, () => {
            this.props.selectOnChange(this.state);
        });
    }

    cleanInput(inputValue) {
        // Strip all non-number characters from the input
        return inputValue.replace(/[^0-9]/g, "");
    }

    newOptionCreator(e) {
        const value = e.label;
        return {value: Number(value), label: ` > ${value}`};
    }

    render() {
        const {options, value} = this.state;
        return (
            <Select.Creatable multi={false}
                              name={this.state.name}
                              options={options}
                              onChange={({value}) => this.handleOnChange(value)}
                              onInputChange={(inputValue) => this.cleanInput(inputValue)}
                              newOptionCreator={(e) => this.newOptionCreator(e)}
                              value={value || 0}
            />
        )
    }
}