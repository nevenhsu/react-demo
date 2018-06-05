import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => {
            const term = event.target.value;
            this.setState({term: term});
            this.props.onSearchTermChange(term)
          }}/>
      </div>
    );
  }


}

export default SearchBar;