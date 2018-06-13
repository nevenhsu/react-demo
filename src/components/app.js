import React, { Component } from 'react';
import BookList from '../containers/book-list';
import Selector from "./selector";

export default class App extends Component {
    render() {

        // default options
        let options = [{
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


        let value = '00200';
        value = Number(value);

        // add option
        if (!options.some(e => e.value === value)) {
            console.log('no exist');
            options.push({value: value, label: ` > ${value}`})
        } else {
            console.log('exist');
        }

        // parst to int
        console.log('test: ',Number('0001000.1'));


        return (
            <div>
                <BookList />
                <Selector options={options} value={value}/>
            </div>
        )
    }
}

