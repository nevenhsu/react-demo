import React, { Component } from 'react';
import BookList from '../containers/book-list';
import Selector from "./selector";

export default class App extends Component {


    selectOnChange(state) {
        console.log(state);
    }

    render() {

        return (
            <div>
                <BookList />
                <Selector name='test' selectOnChange={(state) => this.selectOnChange(state)}/>
            </div>
        )
    }
}

