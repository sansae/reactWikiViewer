import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="search-bar">
        <input value={this.props.value} onChange={this.props.onChange} placeholder="Enter text to search" />
      </div>
    );
  }
}

export default SearchBar;
