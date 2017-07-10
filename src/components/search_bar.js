import React, { Component } from 'react';
// { Component } is the same as const Component = React.Component. It an ES6 shortcut.

class SearchBar extends Component {

  render() {
      return (
          <div className="search-bar">
              <input onChange={this.onInputChange} />
          </div>
    );
  }

  onInputChange(event) {
      console.log(event.target.value);
      //this.setState({event});
        //this.props.onSearchTermChange(event);
  }
}

export default SearchBar;
