import React, { Component } from 'react';
// { Component } is the same as const Component = React.Component. It an ES6 shortcut.

/**
 *  The purpose of this component is to make sure that we have in input at the top that the user can type in. When the
 *  user types into the input it should
 *  1. Makes a request to the YouTube API.
 *  2. Update the video list.
 */
class SearchBar extends Component {

    constructor(props) {
        super(props);  // Component has its own constructor
        this.state = { term: 'Search' };  // initialize object and assign to this.state.
    }

    /**
     * Set the state with the new term. Call the callback OnSearchTermChange that we got from app.js.
     * @param newterm
     */
    onInputChange(newterm) {
        this.setState({term: newterm});
        this.props.onSearchTermChange(newterm);
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
                  onChange={(event) => this.onInputChange(event.target.value)} />
          </div>
    );
  }
}

// app.js needs a reference to SearchBar
export default SearchBar;
