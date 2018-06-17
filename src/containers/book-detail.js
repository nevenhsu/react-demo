import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if(!this.props.book) {
      return (
        <div>
          <p>Select a book to get started.</p>
        </div>
      )
    }

    return (
      <div>
        <h3>Detail for:</h3>
        <p>Title: {this.props.book.title}</p>
        <p>Page: {this.props.book.page}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);