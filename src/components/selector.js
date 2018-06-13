import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


export default class Selector extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: props.options,
            value: Number(props.value),
            name: 'test'
        }
        console.log('selector: ', this.state);
    }

    handleOnChange(value) {
        this.setState({value});
        console.log('change: ', this.state);
    }

    cleanInput(inputValue) {
        // Strip all non-number characters from the input
        return inputValue.replace(/[^0-9]/g, "");
    }

    newOptionCreator(e) {
        const value = Number(e.label);
        return { label: `> ${value}`, value: value };
    }


    render() {
        const {options, value} = this.state;
        return (
            <Select.Creatable multi={false}
                              name={this.state.name}
                              options={options}
                              onChange={(value) => this.handleOnChange(value)}
                              onInputChange={(inputValue) => this.cleanInput(inputValue)}
                              newOptionCreator={(e) => this.newOptionCreator(e)}
                              value={value}
            />
        )
    }
}