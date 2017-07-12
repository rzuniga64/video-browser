import React, { Component } from 'react';
// { Component } is the same as const Component = React.Component. It an ES6 shortcut.

class SearchBar extends Component {

    constructor(props) {
        super(props);  // Component has its own constructor
        this.state = { term: 'Starting Value' };  // initialize object and assign to this.state.
    }

    /**
     *  Define the handler and pass it the property onChange. When input normal change event is triggered it calls
     *  OnInputchange with the new value.
     * */
    render() {
      return (
          <div className="search-bar">
              <input
                  value={this.state.term}
                  onChange={event => this.onInputChange(event.target.value)} />
          </div>
    );
  }

    /**
     * Set the state with the new term. Call the callback OnSearchTermChange that we got from App.js.
     * @param newterm
     */
  onInputChange(newterm ) {
      this.setState({term: newterm});
      this.props.onSearchTermChange(newterm);
  }
}

export default SearchBar;
